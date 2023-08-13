import React from 'react'; 
import { LayoutAbsolute } from 'pages/layoutAbsolute';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Monitoring, SystemMotherboardPage } from 'pages';


function App() {
  return (
    <Routes> 
      <Route path="*" element={<>Bruh</>} />
      <Route path='/' element={<Navigate to='monitoring'/>}/>
      <Route path="/" element={<LayoutAbsolute/>}>
        <Route path='monitoring' element={<Navigate to='/monitoring/mainpage'/>}/>
        <Route path='monitoring/mainpage' element={<Monitoring/>}/>
        <Route path='system' element={<Navigate to='/system/gpus'/>}/>
        <Route path='system/gpus' element={<SystemMotherboardPage/>}/>
      </Route>  
    </Routes>
  );
}

export default App;
