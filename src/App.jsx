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
import Analytics from './pages/analytic/Analytics';
import NotFound from './pages/notFound';
import '../src/constants/fonts.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user/management" element={<UserManagement />} />
            <Route path="wallet/virtual" element={<NotFound />} />
            <Route path="wallet/master" element={<NotFound />} />
            <Route path="Transactions" element={<NotFound />} />
            <Route path="fee/management" element={<NotFound />} />
            <Route path="nodification" element={<NotFound />} />
            <Route path="kyc&compliance/kyc" element={<NotFound />} />
            <Route path="kyc&compliance/amcMonitoring" element={<NotFound />} />
            <Route path="MarketData" element={<NotFound />} />
            <Route path="security" element={<NotFound />} />
            <Route path="refferal/management" element={<NotFound />} />
            <Route path="report&analytics" element={<Analytics />} />
            <Route path="logs" element={<NotFound />} />
            <Route path="support" element={<NotFound />} />
            <Route path="teamChat" element={<NotFound />} />
            <Route path="Settings" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      {/* hello */}
    </>
  )
}

export default App
