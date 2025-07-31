import type { TechSkill } from "../../data/techStack";

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

  return (
    <div className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
      <div className="text-center">
        <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
          <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
        </div>
        <h3 className="font-semibold text-gray-800 mb-3 text-lg">
          {skill.name}
        </h3>
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
