import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import MedicalRecords from './pages/MedicalRecords';
import Doctor from './pages/Doctor';
import Messages from './pages/Messages';
import Payment from './pages/Payment';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Help from './pages/Help';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
