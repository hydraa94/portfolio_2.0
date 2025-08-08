import type { TechSkill } from "../../data/techStack";
import { IconContext } from "react-icons";

interface TechSkillCardProps {
  skill: TechSkill;
  className?: string;
}

export const TechSkillCard = ({ skill }: TechSkillCardProps) => {
  const proficiencyColors = {
    beginner: "bg-yellow-100 text-yellow-800 border-yellow-200",
    intermediate: "bg-blue-100 text-blue-800 border-blue-200",
    advanced: "bg-green-100 text-green-800 border-green-200",
  };

  const IconComponent = skill.icon;

  return (
    <div className="group bg-gray-100 dark:bg-slate-600 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex flex-col items-center text-center hover:dark:text-gray-900">
        {/* ICON */}
        <div className="flex justify-center items-center mb-4 w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-300">
          <IconContext.Provider
            value={{
              className:
                "w-7 h-7 sm:w-10 sm:h-10 text-gray-900 dark:text-gray-100 group-hover:dark:text-gray-600",
            }}
          >
            <IconComponent />
          </IconContext.Provider>
        </div>

        {/* TITLE */}
        <h3 className="font-semibold text-gray-800 dark:text-gray-50 mb-3 text-lg group-hover:dark:text-gray-700">
          {skill.name}
        </h3>

        {/* BADGE */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
            proficiencyColors[skill.proficiency]
          }`}
        >
          {skill.proficiency.charAt(0).toUpperCase() +
            skill.proficiency.slice(1)}
        </span>
      </div>
    </div>
  );
};
