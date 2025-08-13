# 🔐 ZAMA - FHEVM IoT Security Analytics

## 📌 Overview
The **FHEVM IoT Security Analytics Demo** is a **React-based** application that simulates IoT devices sending encrypted sensor data to a **blockchain-powered backend** using **Fully Homomorphic Encryption (FHE)** via **Zama's FHEVM technology**.  
It demonstrates how **sensitive IoT data** can be processed, analyzed, and used for **anomaly detection** without being decrypted — ensuring **complete privacy**.

---

## 🚀 Features

### 📡 IoT Device Simulator
- Real-time virtual IoT devices generating random **temperature**, **humidity**, and **pressure** data.

### 🔐 FHE Encrypted Data Streaming
- All generated sensor data is encrypted using **FHEVM** before being transmitted to the blockchain.

### 📊 Anomaly Detection
- Smart contract analyzes **encrypted values** to detect abnormal readings such as:
  - High temperature
  - High humidity
  - Abnormal pressure

### 📜 Smart Contract & Deployment Script
- Written in **Solidity** using the **FHEVM library**.
- Deployable via **Hardhat** & **JavaScript scripts**.

### ⚠️ Real-Time Alerts & Error History
- Displays critical **security alerts**.
- Logs anomaly history with **risk scoring**.

### 🎨 TailwindCSS & Font Awesome UI
- Modern, **responsive UI** design.
- Beautiful icons and **smooth animations**.

---

## 🛠 Technology Stack

| Layer        | Technology |
|--------------|------------|
| **Frontend** | ReactJS, TailwindCSS, Font Awesome |
| **Blockchain** | Solidity Smart Contract with Zama's FHEVM |
| **Deployment** | Hardhat, Node.js |
| **Data Handling** | Fully Homomorphic Encryption (FHE) via `fhevmjs` |

---

## ⚡ Installation & Setup

### 1: Clone the repository
```bash
git clone https://github.com/leonguyen971/Zama-Fhevm-Iot-Analytics.git
cd fhevm-iot-analytics
```
### 2: Install dependencies
```bash
npm install
```
### 3: Run the development server
```bash
npm start
```
##🔐 How It Works
- IoT Simulator generates raw sensor data.
- Data is encrypted using Zama’s FHEVM client.
- Smart contract receives encrypted data and analyzes it without decryption.
- If anomalies are found, alerts are triggered in the frontend.
- History of anomalies is stored for audit.

## 📸 Demo Preview
<img width="1903" height="910" alt="image" src="https://github.com/user-attachments/assets/747a4ade-85c8-49fc-ad49-e6d5e54b97f6" />
<img width="1900" height="902" alt="image" src="https://github.com/user-attachments/assets/60a38263-6308-40aa-a857-d8b99c5ae3f5" />
<img width="1906" height="906" alt="image" src="https://github.com/user-attachments/assets/bcf1eabd-040d-4162-9417-0674ec35f68f" />

## Thank you for watching.






