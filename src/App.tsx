import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Home } from '@/pages/home';
import { Dashboard } from '@/pages/dashboard';
import { Login } from '@/pages/auth/login';
import { PrivateRoute } from '@/components/auth/private-route';
import { AuthProvider } from '@/components/auth/auth-provider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;