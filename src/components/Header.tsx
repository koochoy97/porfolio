import { Desktop_nav_bar } from "./Desktop_nav_bar";

interface Props {
  click_handler: () => void;
}

export function Header(props: Props) {
  const handle_click = () => {
    props.click_handler();
  };

  const option_handler = (option: string) => {
    console.log(option);
    props.send_action_to_parent(option);
  };

  return (
    <div className="bg-white p-8  border-b h-20 rounded-t-md flex items-center  justify-between mb-4 sticky top-0">
      <span className="text-xl font-['Raleway'] font-extrabold w-full">
        Jaime Koochoy
      </span>
      <span onClick={handle_click} className="cursor-pointer md:hidden ">
        <img
          className="h-[16px]"
          src="/public/images/hamburger-menu_black.png"
          alt=""
        />
      </span>
      <Desktop_nav_bar get_option_selected={option_handler} />
    </div>
  );
}
