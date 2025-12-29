import React, { lazy, Suspense }  from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Loader from "./components/Loader";

const App = () => {
  return (
    
        <Routes>
      <Route
        path="/" 
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
    </Routes>

  )
}

export default App