import { useCallback, useMemo, useState } from "react";
import type { Study } from "../types/study";
import { StudyForm } from "../components/study-form";
import { StudyList } from "../components/study-list";

export function NewSession(){
    const [studies, setStudies] = useState<Study[]>([]);


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

    const newSession = useCallback((study: Study) => {
        setStudies((prev) => [...prev, study]);
    }, []);

    const removeStudy = useCallback((id: string) => {
        const studyToDelete = studies.findIndex((value) => {
            return value.id === id;
        });

        const updatedStudies = [...studies];

        updatedStudies.splice(studyToDelete, 1);

        setStudies(updatedStudies);
    }, []);




    return (
        <>
            <h2>Adicionar novo estudo</h2>

            <p>Total de sessão de estudo: {studyTotal}</p>

            <p>Tempo de sessão de estudo: {studyMinutes}</p>

            <StudyForm onAdd={newSession} />
            
            <StudyList removeStudy={removeStudy} studyList={studies} />
        </>
    )

}