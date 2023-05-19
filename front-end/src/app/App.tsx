import React from 'react'; 
import { LayoutAbsolute } from 'pages/layoutAbsolute';
import { Route, Routes } from 'react-router-dom';
import { Monitoring } from 'pages/monitoring';


function App() {
  return (
    <Routes>
      <Route path="/monitoring" element={<LayoutAbsolute />}>
        <Route path='/monitoring' element={<Monitoring/>}/>
      </Route>  
    </Routes>
  );
}

export default App;
