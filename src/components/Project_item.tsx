const techs = ["React", "Tailwind", "Python", "Supabase"];

interface Props {
  title: string;
  description: string;
  tech: string[];
  id: number;
}

export function Project_item(props: Props) {
  return (
    <div className="bg-white w-full p-4 border rounded flex flex-col items-center mb-4">
      <img src="/public/images/Rectangle.png" alt="" className="mb-2 w-full" />
      <p className="title text-lg font-['Raleway'] font-semibold text-left w-full uppercase">
        {props.title}
      </p>
      <div className="techs_used flex justify-start items-center w-full gap-3 my-1">
        {props.tech?.map((tech) => (
          <div
            className="  text-[#57657A] text-xs flex items-center justify-center bg-[#FAFAFA] p-[2px] rounded-md border"
            key={props.id}
          >
            {tech}
          </div>
        ))}
      </div>
      <p className="text-sm text-[#1A1003]">{props.description}</p>
    </div>
  );
}
