import { StudyList } from "../components/study-list";
import type { Study } from "../types/study";


interface HomeProps {
  studies: Study[];
  removeStudy: (id: string) => void;
}


export function Home({ studies, removeStudy}: HomeProps) {
    return (
        <>
            <h2>Página inicial - Lista de estudos</h2>

            <StudyList removeStudy={removeStudy} studyList={studies} />
        </>
    );
   
}