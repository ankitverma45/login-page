import { useContext } from 'react';
import { Route,Navigate, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  const ppp=authCtx.isLoggedIn && <UserProfile />
  !authCtx.isLoggedIn && <Navigate push to='/auth' />

  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={  <HomePage />} />
        {!authCtx.isLoggedIn && (
          <Route path='/auth' element={ <AuthPage />} />
        )}
        <Route path='/profile' element={ppp} />
        <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </Layout>
  );
}

export default App;
