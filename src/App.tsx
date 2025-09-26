import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout";
import { ErrorFallback } from "./components/fallback";
import { ErrorBoundary } from "react-error-boundary";
import { lazy, Suspense, useCallback, useState } from "react";
import { Loading } from "./components/loading";
import type { Study } from "./types/study";

const Home = lazy(() => import('./pages/home').then(m => ({ default: m.Home })));
const NewSession = lazy(() => import('./pages/new-session').then(m => ({ default: m.NewSession })));
const StudyDetails = lazy(() => import('./pages/study-details').then(m => ({ default: m.StudyDetails })));
const NotFound = lazy(() => import('./pages/not-found').then(m => ({ default: m.NotFound })));

function App() {

  const [studies, setStudies] = useState<Study[]>([]);

  const removeStudy = useCallback((id: string) => {
    const studyToDelete = studies.findIndex((value) => {
      return value.id === id;
    });

    const updatedStudies = [...studies];

    updatedStudies.splice(studyToDelete, 1);

    setStudies(updatedStudies);
  }, []);

  // Renderiza somente uma vez
  const addStudy = useCallback((study: Study) => {
    setStudies((prev) => [...prev, study]);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route 
                  index 
                  element={
                    <Home studies={studies} removeStudy={removeStudy}/>} />
                <Route 
                  path="/add" 
                  element={<NewSession onAdd={addStudy} studies={studies}/>} />
                <Route path="/study/:id" element={<StudyDetails />} />
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
