interface Props {
  click_handler: () => void;
}

export function Header(props: Props) {
  const handle_click = () => {
    props.click_handler();
  };

  return (
    <div className="bg-white p-8  border-b h-20 rounded-t-md flex items-center  justify-between mb-4 sticky top-0">
      <span className="text-xl font-['Raleway'] font-extrabold ">
        Jaime Koochoy
      </span>
      <span onClick={handle_click} className="cursor-pointer">
        <img
          className="h-[16px]"
          src="/public/images/hamburger-menu_black.png"
          alt=""
        />
      </span>
    </div>
  );
}
