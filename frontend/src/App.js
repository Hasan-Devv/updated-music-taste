import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserDataForm from './components/form'
import UserRegistration from './components/register';
import RegistrationSuccess from './components/success-page';
import UserLogin from './components/login';
import PopularityDisplay from './components/popularityDisplay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/userDataform" element={<UserDataForm />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/success" element={<RegistrationSuccess />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="popularity" element={<PopularityDisplay />} />
        
        {/* Add a default route for 404 */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
