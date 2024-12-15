const techs = ["All", "React", "Tailwind", "Python", "Supabase"];

export function Tech_filter_bar() {
  return (
    <div className="w-full flex justify-between gap-1 mt-2 mb-4">
      {techs.map((tech, id) => (
        <div className=" font-bold text-[#57657A] cursor-pointer" key={id}>
          {tech}
        </div>
      ))}
    </div>
  );
}
