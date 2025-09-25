import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { NewSession } from "./pages/new-session";
import { Layout } from "./components/layout";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route element={<Home />} index path="/" />
          <Route element={<NewSession />} index path="/add" />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App
