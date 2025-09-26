import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout";
import { ErrorFallback } from "./components/fallback";
import { ErrorBoundary } from "react-error-boundary";
import { lazy, Suspense } from "react";
import { Loading } from "./components/loading";

const Home = lazy(() => import('./pages/home').then(m => ({ default: m.Home })));
const NewSession = lazy(() => import('./pages/new-session').then(m => ({ default: m.NewSession })));
const StudyDetails = lazy(() => import('./pages/study-details').then(m => ({ default: m.StudyDetails })));
const NotFound = lazy(() => import('./pages/not-found').then(m => ({ default: m.NotFound })));

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route element={<Home />} index path="/" />
                <Route element={<NewSession />} index path="/add" />
                <Route element={<StudyDetails />} index path="/study-details" />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </BrowserRouter>

    </>
  );
}

export default App
