import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { NewSession } from "./pages/new-session";
import { Layout } from "./components/layout";
import { StudyDetails } from "./pages/study-details";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route element={<Home />} index path="/" />
          <Route element={<NewSession />} index path="/add" />
          <Route element={<StudyDetails />} index path="/study-details" />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App
