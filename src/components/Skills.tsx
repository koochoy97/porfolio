import { Skill_block } from "./Skill_block";
import { useEffect, useState } from "react";

export function Skills() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/assets/skill.json");
        const data = await response.json();
        console.log(data);
        setTechs(data.tecnologias);
        setSoft_skills(data.habilidades);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [techs, setTechs] = useState([]);
  const [soft_skills, setSoft_skills] = useState([]);

  return (
    <div className="p-8 flex items-center mb-4 flex-col">
      <p className="text-xl font-['Raleway'] text-center w-full mb-2">SKILLS</p>
      <div className="techs flex justify-center items-center w-full gap-3 flex-col ">
        <h2 className="text-lg font-semibold">Tecnologías</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {techs.map((tech: any) => (
            <Skill_block
              img_source={tech.src_imagen}
              tech_name={tech.nombre + " - " + tech.nivel}
            />
          ))}
        </div>
      </div>

      <div className="soft_skills mt-12 flex justify-center items-center w-full gap-3 flex-col ">
        <h2 className="text-lg font-semibold">Habilidades</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {soft_skills.map((soft_skill: any) => (
            <Skill_block
              img_source={soft_skill.img_source}
              tech_name={soft_skill.nombre}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
