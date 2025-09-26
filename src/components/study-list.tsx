import type { Study } from "../types/study";
import { StudyResume } from "./study-resume";

interface StudyListProps {
    studyList: Study[];
}


export function StudyList({ studyList }: StudyListProps) {
    return (
        <>
            {studyList.map((value) => {
                return <StudyResume study={value} />;
            })}
        
        </>
    )
}