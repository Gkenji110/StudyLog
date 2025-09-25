import { StudyCard } from "./study-card";
import type { Study } from "../types/study";

interface StudyListProps {
    studyList: Study[];
}


export function StudyList({ studyList }: StudyListProps) {
    return (
        <>
            {studyList.map((value) => {
                return <StudyCard study={value} />;
            })}
        
        </>
    )
}