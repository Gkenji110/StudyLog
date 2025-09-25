import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { NewSession } from "./pages/new-session";
import { Layout } from "./components/layout";
import { NotFound } from "./pages/not-found";
import { ErrorFallback } from "./components/fallback";
import { ErrorBoundary } from "react-error-boundary";

function App() {

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route element={<Home />} index path="/" />
              <Route element={<NewSession />} index path="/add" />
              <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </ErrorBoundary>
      </BrowserRouter>

    </>
  );
}

export default App
