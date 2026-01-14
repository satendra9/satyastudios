import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DanceInstructorForm from "../src/pages/DanceInstructorForm.jsx"
import "./App.css";


function App() {
 
  return (
    <>
     <Routes>
      <Route path = "/" element = {<DanceInstructorForm />} />
     </Routes>
    </>
  )
}

export default App
