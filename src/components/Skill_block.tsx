interface Props {
  img_source: string;
  tech_name: string;
}

export function Skill_block(props: Props) {
  return (
    <div className="flex gap-1 justify-start items-center bg-[#E1E8EF] py-1 px-2 rounded-md">
      <img src={props.img_source} alt="" className="w-[22px]" />
      <p className="text-sm"> {props.tech_name}</p>
    </div>
  );
}
