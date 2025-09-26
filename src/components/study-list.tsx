import type { Study } from "../types/study";
import { StudyResume } from "./study-resume";

interface StudyListProps {
  studyList: Study[];
}

export function StudyList({ studyList }: StudyListProps) {
  return (
    <div className="flex flex-col items-center gap-3 mt-6 w-full">
      {studyList.map((value) => (
        <StudyResume key={value.id} study={value} />
      ))}
    </div>
  );
}
