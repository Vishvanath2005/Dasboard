import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Pages/layout/Layout'
import Institution from './Pages/institution/Institution'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/insitution' element={<Institution/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
        </>
  )
}

export default App
