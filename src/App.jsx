import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { NotFound } from './Components/NotFound'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
