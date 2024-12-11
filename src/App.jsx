import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Pages/layout/Layout'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}/>
    </Routes>
    </BrowserRouter>
        </>
  )
}

export default App
