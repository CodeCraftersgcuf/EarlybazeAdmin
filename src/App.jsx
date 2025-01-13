import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css'
import Layout from './layout/Layout';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './auth/login';
import UserManagement from './pages/userManagement/UserManagement';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user/management" element={<UserManagement />} />
            <Route path="wallet/management" element={<Dashboard />} />
            <Route path="wallet/virtual" element={<Dashboard />} />
            <Route path="wallet/master" element={<Dashboard />} />
            <Route path="Transactions" element={<Dashboard />} />
            <Route path="fee/management" element={<Dashboard />} />
            <Route path="nodification" element={<Dashboard />} />
            <Route path="kyc&compliance" element={<Dashboard />} />
            <Route path="kyc&compliance/kyc" element={<Dashboard />} />
            <Route path="kyc&compliance/amcMonitoring" element={<Dashboard />} />
            <Route path="MarketData" element={<Dashboard />} />
            <Route path="security" element={<Dashboard />} />
            <Route path="refferal/management" element={<Dashboard />} />
            <Route path="report&analytics" element={<Dashboard />} />
            <Route path="logs" element={<Dashboard />} />
            <Route path="support" element={<Dashboard />} />
            <Route path="teamChat" element={<Dashboard />} />
            <Route path="Settings" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
      {/* hello */}
    </>
  )
}

export default App
