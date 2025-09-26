import { Link } from "react-router-dom";
import type { Study } from "../types/study";

interface StudyFormProps {
  study: Study;
}

export function StudyResume({ study }: StudyFormProps) {
  return (
    <div className="bg-violet-300 rounded-lg shadow p-4 mb-3 w-3/5 flex justify-between items-center">
      <h2 className="font-bold text-gray-800">{study.subject}</h2>

      <Link
        to={`/study/${study.id}`}
        state={{ study }}
        className="text-sm font-semibold text-white bg-violet-500 px-3 py-1 rounded hover:bg-violet-600"
      >
        Detalhes
      </Link>
    </div>
  );
}
