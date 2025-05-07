Acumed
A Secure, AI-Powered, Immersive Healthcare Platform

🩺 1. Problem Statement
Fragmented Health Records: Patients and doctors lack a unified, trustworthy source of health data.

Limited Control & Security: Sensitive medical records are vulnerable and difficult to share securely.

Slow Diagnostics: Access to medical experts and diagnosis tools is limited, especially in rural areas.

Lack of Immersive Tools: Doctors often rely on 2D records without visual or interactive aids.

Poor Accessibility: Patients face language and tech barriers in understanding their conditions.

💡 2. Solution Overview
MediVault XR is a React-based web application that:

Uses Blockchain to securely store and share medical records

Offers AI-powered diagnostics via pretrained CNNs

Visualizes diagnoses in Augmented Reality

Includes multilingual support, gamified wellness goals, and real-time doctor-patient access control

🔐 3. Core Features

🔗 1. Decentralized Health Record Storage
Powered by Ethereum smart contracts

Patients own their data and control who can access it

Access logs are transparent and immutable

🧠 2. AI Diagnostic System (Pretrained CNNs)
Chest X-rays, skin disease images, etc.

Backend API runs pretrained CNNs for diagnosis

Returns predictions with confidence scores

Optional fallback (mock data) ensures stability

🩻 3. Augmented Reality Visualization
Built in Unity with WebGL (embedded into React)

Doctors can view 3D models of affected organs based on AI results

Interactive organ overlays enhance understanding of conditions

🛂 4. Consent-as-a-Service
Doctors must request access to patient records

Patients approve access via MetaMask (or mock wallet)

Emergency “break-glass” QR allows limited data exposureX


Folder Structure: 


client/
├── public/
│   ├── index.html          # Main HTML file
│   ├── favicon.ico         # App favicon
│   ├── manifest.json       # Web app manifest
│   └── assets/             # Static assets
│       ├── images/         # Logos, icons, general images
│       └── models/         # 3D models for Unity WebGL (AR)
│
├── src/
│   ├── assets/
│   │   ├── images/         # UI images
│   │   ├── styles/         # Global CSS or Tailwind configs
│   │   └── data/           # Mock data or static JSON
│
│   ├── components/
│   │   ├── common/         # Shared reusable components
│   │   │   ├── Button/
│   │   │   ├── Modal/
│   │   │   ├── Navbar/
│   │   │   └── Loader/
│   │   ├── doctor/         # Doctor-facing UI
│   │   │   ├── Dashboard/
│   │   │   ├── RecordAccess/
│   │   │   ├── DiagnosisView/
│   │   │   ├── ARViewer/
│   │   │   └── Profile/
│   │   └── patient/        # Patient-facing UI
│   │       ├── Dashboard/
│   │       ├── RecordView/
│   │       ├── DiagnosisView/
│   │       ├── ARViewer/
│   │       ├── AccessControl/
│   │       └── Profile/
│
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── PatientDashboard.jsx
│   │   └── NotFound.jsx
│
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── BlockchainContext.jsx
│   │   └── DataContext.jsx
│
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useBlockchain.js
│   │   └── useAR.js
│
│   ├── utils/
│   │   ├── api.js
│   │   ├── formatters.js
│   │   └── constants.js
│
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
│
├── tailwind.config.js      # Tailwind setup
├── package.json            # Frontend dependencies
└── README.md               # Setup instructions




server/
├── config/
│   ├── db.js               # MongoDB config
│   └── blockchain.js       # Web3/Ethereum config
│
├── controllers/            # Request handlers
│   ├── authController.js
│   ├── recordController.js
│   ├── diagnosisController.js
│   └── blockchainController.js
│
├── models/                 # Mongoose schemas
│   ├── User.js
│   ├── Record.js
│   └── Diagnosis.js
│
├── routes/                 # REST API routes
│   ├── authRoutes.js
│   ├── recordRoutes.js
│   ├── diagnosisRoutes.js
│   └── blockchainRoutes.js
│
├── services/               # Business logic
│   ├── aiService/
│   │   ├── jiviRadX.js         # CNN model logic
│   │   └── imageProcessor.js   # Preprocessing
│   ├── blockchainService/
│   │   ├── contract.js         # Smart contract interaction
│   │   └── metaMask.js         # Wallet handling
│   └── storageService/
│       └── mongoStorage.js     # File storage abstraction
│
├── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── loggerMiddleware.js
│
├── utils/
│   ├── errorHandler.js
│   ├── validators.js
│   └── constants.js
│
├── contracts/              # Smart contracts
│   ├── HealthRecord.sol    # Solidity contract
│   └── compile.js          # Compiler script
│
├── tests/
│   ├── auth.test.js
│   ├── record.test.js
│   └── diagnosis.test.js
│
├── .env                    # Environment variables
├── server.js               # Server entry point
├── package.json            # Backend dependencies
└── README.md               # Setup instructions