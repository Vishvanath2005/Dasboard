import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Pages/layout/Layout'
import Institution from './Pages/institution/Institution'
import Leads from './Pages/leads/Leads'
import Enquires from './Pages/enquires/Enquires'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/insitution' element={<Institution/>}/>
      <Route path='/leads' element={<Leads/>}/>
      <Route path='/enquires' element={<Enquires/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
        </>
  )
}

export default App
