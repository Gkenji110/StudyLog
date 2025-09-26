import { Link } from "react-router-dom";
import type { Study } from "../types/study";

interface StudyFormProps{
    study: Study
}

export function StudyResume({ study }: StudyFormProps) {
     return (
        <div>
            <div>
                <h2>{study.subject}</h2>
                <Link to={`/study/${study.id}`} state={{ study }}>
                    Detalhes
                </Link>
            </div>
        </div>
     )
}