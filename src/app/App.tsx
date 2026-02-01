import RegistrationPage from '@/pages/RegistrationPage';
import ConfirmPage from '@/pages/ConfirmPage'
import SetPasswordPage from '@/pages/SetPasswordPage';
import NotFound from '@/pages/NorFound';
import { Route, Routes } from 'react-router';
import MainLayout from './layout/MainLayout';
import './styles/main.css';
import HomePage from '@/pages/HomePage/HomePage';
import ResultPage from '@/pages/ResultPage/ResultPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route element={<MainLayout />}>
          <Route path='registration' element={<RegistrationPage />}/>
          <Route path='confirm' element={<ConfirmPage />}/>
          <Route path='password' element={<SetPasswordPage />}/>
        </Route>
        <Route path='/result' element={<ResultPage />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
