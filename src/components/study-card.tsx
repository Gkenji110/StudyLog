import type { Study } from "../types/study";

interface StudyCardProps {
  study: Study;
}

export function StudyCard({ study }: StudyCardProps) {
  return (
    <div className="bg-violet-300 rounded-lg shadow p-6 w-3/5 mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        Matéria: {study.subject}
      </h2>
      <p className="text-gray-700">Tempo: {study.minutes} min</p>
      <p className="text-gray-700">Data: {study.date}</p>
      {study.notes && (
        <p className="text-gray-700 mt-2">
          <span className="font-semibold">Notas:</span> {study.notes}
        </p>
      )}
    </div>
  );
}
