import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));

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
  );
};

export default App;
