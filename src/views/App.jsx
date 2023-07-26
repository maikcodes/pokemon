import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pokemon from './pokemon/Pokemon'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
