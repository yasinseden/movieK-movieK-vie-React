import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import MyList from './pages/my-list/My-List'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/my-list" element={<MyList />} /> */
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
