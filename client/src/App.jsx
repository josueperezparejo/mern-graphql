import { Route, Routes } from 'react-router-dom'
import { Error404Page, Home } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/404" element={<Error404Page />} />

        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </>
  )
}

export default App