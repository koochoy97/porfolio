const techs = ["React", "Tailwind", "Python", "Supabase"];

interface Props {
  title: string;
  description: string;
  tech: string[];
  img: string;
}

export function Project_item(props: Props) {
  return (
    <div className="bg-white w-full p-4 border rounded flex flex-col items-center mb-4 lg:w-[300px] overflow-hidden">
      <a
        className="w-full overflow-hidden rounded-lg"
        href="https://github.com/koochoy97/login_system"
        target="_blank"
      >
        <img
          src={props.img}
          alt=""
          className="mb-2 w-full rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:origin-center"
        />
      </a>
      <p className="title text-lg font-['Raleway'] font-semibold text-left w-full uppercase">
        {props.title}
      </p>
      <div className="techs_used flex justify-start items-center w-full gap-3 my-1">
        {props.tech?.map((tech) => (
          <div
            className="  text-[#57657A] text-xs flex items-center justify-center bg-[#FAFAFA] p-[2px] rounded-md border"
            key={tech}
          >
            {tech}
          </div>
        ))}
      </div>
      <p className="text-sm text-[#1A1003] text-left w-full">
        {props.description}
      </p>
      <div className="buttons_container flex justify-end items-center gap-2 w-full mt-2 text-sm">
        <a
          className="bg-black text-white rounded-md px-2 py-[2px] cursor-pointer flex items-center gap-1 hover:bg-[#353535]"
          href="https://fullloginsystem.netlify.app"
          target="_blank"
        >
          Preview
          <img src="/images/right_arrow.png" alt="" className="h-[18px]" />
        </a>
        <a
          className="bg-black text-white rounded-md px-2 py-[2px] cursor-pointer flex items-center gap-1 hover:bg-[#353535]"
          href="https://github.com/koochoy97/login_system"
          target="_blank"
        >
          Github
          <img src="/images/github_white.png" alt="" className="h-[18px]" />
        </a>
      </div>
    </div>
  );
}
