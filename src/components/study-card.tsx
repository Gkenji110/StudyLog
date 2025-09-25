interface StudyCardProps {
    id: string;
    subject: string;
    minutes: number;
    date: string;
    notes?: string;
}

export function StudyCard(props: StudyCardProps) {
    return (
        <div className="bg-white shadow rounded-lg p-4 w-3/5">
            <h2>Matéria: {props.subject}</h2>
            <p>Tempo: {props.minutes} min</p>
            <p>Data: {props.date}</p>
            <p>Notas: {props.notes}</p>
        </div>
    )
}