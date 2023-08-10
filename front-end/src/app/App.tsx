import React from 'react'; 
import { LayoutAbsolute } from 'pages/layoutAbsolute';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Monitoring, System } from 'pages';


function App() {
  return (
    <Routes> 
      <Route path="*" element={<>Bruh</>} />
      <Route path='/' element={<Navigate to='monitoring'/>}/>
      <Route path="/" element={<LayoutAbsolute/>}>
        <Route path='/monitoring' element={<Monitoring/>}/>
        <Route path='/system' element={<System/>}/>
      </Route>  
    </Routes>
  );
}

export default App;
