import { BrowserRouter,Routes,Route } from 'react-router-dom'



import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Settings from './Components/Settings'
import Home from './Components/Home'
import Button from './Components/Button'


function App() {


  return (
    <>


    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Settings' element={<Settings/>}/>
      


    </Routes>
    
    
    
    </BrowserRouter>
     
      
     
    </>
  )
}

export default App
