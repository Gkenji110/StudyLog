import { useMemo } from "react";
import type { Study } from "../types/study";
import { StudyForm } from "../components/study-form";

    
interface NewSessionProps {
    studies: Study[];
    onAdd: (study: Study) => void;
}

export function NewSession({ onAdd, studies}: NewSessionProps){

    const studyTotal = useMemo(() => {
        return studies.length;
    }, [studies]);


    const studyMinutes = useMemo(() => {
        let studyMinutes: number = 0;

        studies.forEach((study) => {
            studyMinutes += study.minutes;
        });

        const hours = Math.floor(studyMinutes / 60);
        const minutes = studyMinutes % 60;

        return `${hours}:${minutes}`;
    }, [studies]);

    




    return (
        <>
            <h2>Adicionar novo estudo</h2>

            <p>Total de sessão de estudo: {studyTotal}</p>

            <p>Tempo de sessão de estudo: {studyMinutes}</p>

            <StudyForm onAdd={onAdd} />

        </>
    )

}