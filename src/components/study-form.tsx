import { useState } from "react";
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
      className="bg-violet-300 rounded-lg shadow p-6 flex flex-col gap-4 w-3/5 mx-auto mt-6"
    >
      <label htmlFor="study-subject" className="font-semibold text-gray-800">
        Matéria estudada
      </label>
      <input
        type="text"
        id="study-subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="p-2 rounded border"
        placeholder="Matéria estudada"
      />

      <label htmlFor="study-minutes" className="font-semibold text-gray-800">
        Tempo de estudo (min)
      </label>
      <input
        type="number"
        id="study-minutes"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
        className="p-2 rounded border"
        placeholder="Tempo de estudo (min)"
      />

      <label htmlFor="study-date" className="font-semibold text-gray-800">
        Dia do estudo
      </label>
      <input
        type="date"
        id="study-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 rounded border"
        placeholder="Dia do estudo"
      />

      <label htmlFor="study-notes" className="font-semibold text-gray-800">
        Notas do estudo
      </label>
      <input
        type="text"
        id="study-notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="p-2 rounded border"
        placeholder="Notas do estudo"
      />

      <button
        type="submit"
        className="bg-violet-500 text-white font-bold py-2 px-4 rounded hover:bg-violet-600"
      >
        Adicionar estudo
      </button>
    </form>
  );
}
