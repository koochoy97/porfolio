import { Skill_block } from "./Skill_block";

export function Skills() {
  return (
    <div className="p-8 flex items-center mb-4 flex-col">
      <p className="text-xl font-['Raleway'] text-center w-full mb-2">SKILLS</p>
      <div className="techs flex justify-center items-center w-full gap-3 flex-col ">
        <h2 className="text-lg font-semibold">Tecnologías</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="React Intermedio"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Javascript Intermedio"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Tailwind Intermedio"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Css Intermedio"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="SQL Básico"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Python Básico"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Supabase Básico"
          />
        </div>
      </div>

      <div className="soft_skills mt-12 flex justify-center items-center w-full gap-3 flex-col ">
        <h2 className="text-lg font-semibold">Habilidades</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="React Intermedio"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Javascript Intermedio"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Tailwind Intermedio"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Css Intermedio"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="SQL Básico"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Python Básico"
          />
          <Skill_block
            img_source="/public/images/react_icon.png"
            tech_name="Supabase Básico"
          />
        </div>
      </div>
    </div>
  );
}
