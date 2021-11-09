import React from 'react'
import Home from './redux/components/Home';
import Forms from './redux/components/Forms';
import UpdateDetail from './redux/components/updateDetail'
import {BrowserRouter , Routes,Route} from 'react-router-dom'; 
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/edit/:id" element={<UpdateDetail />} />
        </Routes>
      </BrowserRouter>
    
  
    
    </div>
  )
}

export default App
