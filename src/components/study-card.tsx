import type { Study } from "../types/study";


interface StudyCardProps {
    study: Study;
}

export function StudyCard({ study }: StudyCardProps) {
    return (
        <div className="bg-white shadow rounded-lg p-4 w-3/5">
            <h2>Matéria: {study.subject}</h2>
            <p>Tempo: {study.minutes} min</p>
            <p>Data: {study.date}</p>
            <p>Notas: {study.notes}</p>
        </div>
    )
}