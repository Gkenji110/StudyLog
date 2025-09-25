import {useState} from "react";
import type { Study } from "../types/study";

interface StudyFormProps {
    onAdd: (study: Study) => void;
}

export function StudyForm({ onAdd }: StudyFormProps) {
    const [subject, setSubject] = useState("");
    const [minutes, setMinutes] = useState(0);
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");
    
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const study: Study = {
            id: crypto.randomUUID(),
            subject,
            minutes,
            date,
            notes,
        };
        
        onAdd(study);

        setSubject("");
        setMinutes(0);
        setDate("");
        setNotes("");
    }

    return (
        
        <form
            onSubmit={handleSubmit}
        >
            <label htmlFor="study-subject"> Matéria estudada</label>
            <input
                type="text"
                id="study-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Matéria estudada"
            />

            <label htmlFor="study-minutes">Tempo de estudo (min)</label>
            <input
                type="number"
                id="study-minutes"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                placeholder="Tempo de estudo (min)"
            />

            <label htmlFor="study-date">Dia do estudo</label>
            <input
                type="date"
                id="study-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Dia do estudo"
            />

            <label htmlFor="study-notes">Notas do estudo</label>
            <input
                type="text"
                id="study-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notas do estudo"
            />

            <button type="submit">Adicionar estudo</button>

        </form>
    );
}