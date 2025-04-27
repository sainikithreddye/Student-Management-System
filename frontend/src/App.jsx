import { Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import StudentList from './components/StudentList';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
