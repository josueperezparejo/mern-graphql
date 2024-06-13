import { Route, Routes } from 'react-router-dom'
import { Error404Page, Home, Projects } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/404" element={<Error404Page />} />

        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </>
  )
}

export default App