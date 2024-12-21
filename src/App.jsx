import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './components/Users';
// import CreatePage from './components/CreatePage'; // Add this if you have a create page
// import ReadPage from './components/ReadPage'; // Add this if you have a read page

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/create" element={<CreatePage />} />
        <Route path="/read" element={<ReadPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
