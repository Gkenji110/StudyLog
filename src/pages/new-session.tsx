import { useState } from "react";
import type { Study } from "../types/study";
import { StudyForm } from "../components/study-form";
import { StudyList } from "../components/study-list";

export function NewSession(){
    const [studies, setStudies] = useState<Study[]>([]);


    function newSession(study: Study): void {
    setStudies((prev) => [...prev, study]);
    }

    return (
        <>
            <h2>Adicionar novo estudo</h2>

            <StudyForm onAdd={newSession} />
            
            <StudyList studyList={studies} />
        </>
    )

}