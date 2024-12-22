import { Skill_block } from "./Skill_block";
import { useEffect, useState } from "react";

type Techs_sorted = "none" | "az" | "za";
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
  const [techs_sorted, setTechs_sorted] = useState<Techs_sorted>("none");

  const handle_order = (array: string) => {
    if (array === "techs") {
      if (techs_sorted === "none" || techs_sorted === "za") {
        setTechs_sorted("az");
        const sorted = [...techs].sort((a, b) =>
          a.nombre.localeCompare(b.nombre)
        );
        setTechs(sorted);
      } else if (techs_sorted === "az") {
        setTechs_sorted("za");
        console.log("Ordena ZA");
        const sorted = [...techs].sort((a, b) =>
          b.nombre.localeCompare(a.nombre)
        );
        setTechs(sorted);
      }

      console.log("Ordenando tecnologías");
    }
  };

  return (
    <div className="p-8 flex items-center mb-4 flex-col">
      <p className="text-xl font-['Raleway'] text-center w-full mb-2 lg:text-left">
        SKILLS
      </p>
      <div className="techs flex justify-center items-center w-full gap-3 flex-col lg:items-start">
        <div className=" flex items-center justify-between">
          <h2 className="text-lg font-semibold ">Tecnologías</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {techs.map((tech: any) => (
            <Skill_block
              img_source={tech.src_imagen}
              tech_name={tech.nombre + " - " + tech.nivel}
              key={tech.id}
            />
          ))}
        </div>
      </div>

      <div className="soft_skills mt-12 flex justify-center items-center w-full gap-3 flex-col lg:items-start">
        <h2 className="text-lg font-semibold">Habilidades</h2>
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {soft_skills.map((soft_skill: any) => (
            <Skill_block
              img_source={soft_skill.img_source}
              tech_name={soft_skill.nombre}
              key={soft_skill.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
