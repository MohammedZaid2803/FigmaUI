import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar';

import ContactForm from './Components/ContactForm';
import Dashboard from "./Components/Dashboard";

function App() {
  return (
   <div >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/" element={<Dashboard/>}/>
        {/* Add other routes here */}
     
      </Routes>
     
   
    </Router>


   
   </div>
   
  );
}

export default App;
