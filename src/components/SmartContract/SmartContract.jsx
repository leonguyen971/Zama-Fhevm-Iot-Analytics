import React, { useState, useEffect } from 'react';
import './SmartContract.css';

const SmartContract = ({ onContractUpdate }) => {
  const [contractCode, setContractCode] = useState(`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "fhevm/lib/TFHE.sol";

contract IoTSecurityAnalytics {
    struct EncryptedData {
        euint32 temperature;
        euint32 humidity;
        euint32 pressure;
        uint256 timestamp;
        address device;
    }
    
    mapping(address => EncryptedData[]) private deviceData;
    mapping(address => euint32) private anomalyScores;
    
    event AnomalyDetected(address device, uint256 timestamp);
    
    function submitData(
        bytes calldata encTemp,
        bytes calldata encHum, 
        bytes calldata encPres
    ) external {
        euint32 temp = TFHE.asEuint32(encTemp);
        euint32 hum = TFHE.asEuint32(encHum);
        euint32 pres = TFHE.asEuint32(encPres);
        
        deviceData[msg.sender].push(EncryptedData({
            temperature: temp,
            humidity: hum,
            pressure: pres,
            timestamp: block.timestamp,
            device: msg.sender
        }));
        
        _analyzeAnomaly(msg.sender, temp, hum, pres);
    }
    
    function _analyzeAnomaly(
        address device,
        euint32 temp,
        euint32 hum,
        euint32 pres
    ) private {
        // Phân tích bất thường trên dữ liệu mã hóa
        euint32 tempThreshold = TFHE.asEuint32(50);
        euint32 humThreshold = TFHE.asEuint32(80);
        
        ebool tempAnomaly = TFHE.gt(temp, tempThreshold);
        ebool humAnomaly = TFHE.gt(hum, humThreshold);
        
        euint32 score = TFHE.select(tempAnomaly, 
            TFHE.asEuint32(100), TFHE.asEuint32(0));
        score = TFHE.add(score, 
            TFHE.select(humAnomaly, TFHE.asEuint32(50), TFHE.asEuint32(0)));
            
        anomalyScores[device] = score;
        
        // Emit event nếu phát hiện bất thường
        if (TFHE.decrypt(TFHE.gt(score, TFHE.asEuint32(75)))) {
            emit AnomalyDetected(device, block.timestamp);
        }
    }
}`);

  const [deployScript, setDeployScript] = useState(`// deploy.js
const { ethers } = require("hardhat");
const { FhevmInstance } = require("fhevmjs");

async function main() {
    console.log("🚀 Deploying IoT Security Analytics Contract...");
    
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with account:", deployer.address);
    
    // Deploy contract
    const IoTAnalytics = await ethers.getContractFactory("IoTSecurityAnalytics");
    const contract = await IoTAnalytics.deploy();
    await contract.deployed();
    
    console.log("✅ Contract deployed to:", contract.address);
    
    // Initialize FHEVM instance
    const instance = await FhevmInstance.create({
        chainId: 8009, // Zama devnet
        networkUrl: "https://devnet.zama.ai/",
        gatewayUrl: "https://gateway.zama.ai/"
    });
    
    console.log("🔐 FHEVM instance initialized");
    
    return {
        contractAddress: contract.address,
        instance: instance
    };
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });`);

  useEffect(() => {
    onContractUpdate({ contractCode, deployScript });
  }, [contractCode, deployScript, onContractUpdate]);

  return (
    <div className="smart-contract-container">
      <h3 className="smart-contract-title">
        <i className="fas fa-file-contract mr-2 text-blue-400"></i>
        Smart Contract & Deploy Script
      </h3>
      
      <div className="contract-sections">
        <div className="contract-section">
          <label className="section-label">
            Smart Contract (Solidity)
          </label>
          <textarea
            value={contractCode}
            onChange={(e) => setContractCode(e.target.value)}
            className="code-textarea solidity"
          />
        </div>
        
        <div className="contract-section">
          <label className="section-label">
            Deploy Script (JavaScript)
          </label>
          <textarea
            value={deployScript}
            onChange={(e) => setDeployScript(e.target.value)}
            className="code-textarea javascript"
          />
        </div>
      </div>
    </div>
  );
};

export default SmartContract;