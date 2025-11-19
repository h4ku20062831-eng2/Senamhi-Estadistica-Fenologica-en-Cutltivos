import React from 'react';
import Sidebar from './components/Sidebar/Siderbar';
import CreateCultivoPage from './pages/CreateCultivoPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
  
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-10 bg-gray-100"> 
      <Routes>
        
        <Route path="/cultivo/crear" element={<CreateCultivoPage />} />
      </Routes>
      </main>


    </div>

   
  )
    
}



export default App;