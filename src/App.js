
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login/Login'
import { CreateAccount } from './pages/CreateAccount/CreateAccount';
import { RecoverAccount } from './pages/RecoverAccount/RecoverAccount'
import { ProtectRouter } from './components/ProtectRouter/ProtectRouter'
import { ThemeProvider } from 'styled-components';
import { LightThemes, DarkThemes, GlobalStyles } from './components/Themes';
import { useState, lazy, Suspense } from 'react';
import { LoginLayout } from './components/LoginLayout';
import { useAppContext } from './Providers/AppProvider';
import { DashboardLayout } from './components/DashboardLayout';
import { Documentation } from './pages/Documentation/Documentation';
const Dashboard = lazy(() => import('./pages/Dashboard'))


function App() {
  const { theme } = useAppContext();
  return (
    <ThemeProvider theme={theme === 'light' ? LightThemes : DarkThemes}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<LoginLayout />} >
              <Route path="/" element={<Login />} />
              <Route path="create-account" element={<CreateAccount />} />
              <Route path="recover-account" element={<RecoverAccount />} />
            </Route>
            <Route element={<DashboardLayout />}>
              <Route path="dashboard" element={<ProtectRouter>
                <Suspense fallback={<div>loading..</div>}>
                <Dashboard />
                </Suspense>
              </ProtectRouter>} />
              <Route path="documentation" element={<Documentation />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );

}

export default App;
