import type { Study } from "../types/study";
import { StudyResume } from "./study-resume";

interface StudyListProps {
  studyList: Study[];
  removeStudy: (id: string) => void;

}

export function StudyList({ studyList, removeStudy }: StudyListProps) {
  return (
    <>
        <div className="flex flex-col items-center gap-3 mt-6 w-full">
            {studyList.map((value) => {
                return <StudyResume removeStudy={removeStudy} study={value} />;
            })}
        </div>
    </>
  );
}
