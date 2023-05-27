import React from 'react'; 
import { LayoutAbsolute } from 'pages/layoutAbsolute';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Monitoring } from 'pages/monitoring';


function App() {
  return (
    <Routes> 
      <Route path="*" element={<>Bruh</>} />
      <Route path='/' element={<Navigate to='monitoring'/>}/>
      <Route path="/" element={<LayoutAbsolute/>}>
        <Route path='/monitoring' element={<Monitoring/>}/>
      </Route>  
    </Routes>
  );
}

export default App;
