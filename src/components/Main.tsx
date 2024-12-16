import { Header } from "./Header";
import { About_me } from "./About_me";
import { Mobile_nav_bar } from "./Mobile_nav_bar";
import { useState } from "react";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export function Main() {
  const [open_Mobile_menu, setOpen_Mobile_menu] = useState(false);

  const click_handler = () => {
    setOpen_Mobile_menu(true);
  };

  return (
    <div className="bg-white w-11/12 z-50 rounded-md  border relative overflow-x-hidden h-full my-6 pb-20">
      <Mobile_nav_bar open={open_Mobile_menu} setOpen={setOpen_Mobile_menu} />
      <Header click_handler={click_handler} />
      <About_me />
      <Skills />
      <Contact />
    </div>
  );
}
