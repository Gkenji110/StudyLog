import { Link } from "react-router-dom";
import type { Study } from "../types/study";

interface StudyFormProps {
  study: Study;
  removeStudy: (id: string) => void;
}

export function StudyResume({ study, removeStudy }: StudyFormProps) {
  return (
    <div className="bg-violet-300 rounded-lg shadow p-4 mb-3 w-3/5 flex justify-between items-center">
        <div>
            <h2 className="font-bold text-gray-800">{study.subject}</h2>

            <Link
                to={`/study/${study.id}`}
                state={{ study }}
                className="bg-violet-500 text-white font-bold hover:underline rounded  p-2"
            >
                Detalhes
            </Link>

            <button 
                onClick={() => removeStudy(study.id)}
                className="bg-red-600 text-white font-bold hover:underline rounded  p-2"
            >
                Remover 
            </button>
        </div>

        <h3>Data: {study.date}</h3>
    </div>  

  );
}
