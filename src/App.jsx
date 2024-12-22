import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
