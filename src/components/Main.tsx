import { Header } from "./Header";
import { About_me } from "./About_me";
import { Mobile_nav_bar } from "./Mobile_nav_bar";
import { useEffect, useState } from "react";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { useRef } from "react";

export function Main() {
  const [open_Mobile_menu, setOpen_Mobile_menu] = useState(false);
  const about_me_ref = useRef<HTMLDivElement>(null);
  const contact_ref = useRef<HTMLDivElement>(null);
  const skills_ref = useRef<HTMLDivElement>(null);
  /*const [active_section, setActive_section] = useState("about_me");*/

  const click_handler = () => {
    setOpen_Mobile_menu(true);
  };

  const get_action_from_menu = (e: string) => {
    switch (e) {
      case "about_me":
        about_me_ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        break;
      case "skills":
        skills_ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        break;
      case "contact":
        contact_ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        break;
    }
  };

  /*
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      const entry = entries[0];
      console.log(entry.isIntersecting, entry.target.id);
      if (entry.isIntersecting) {
        setActive_section(entry.target.id);
      }
    });

    // Observar cada referencia
    const refs = [about_me_ref, skills_ref, contact_ref];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
  }, []);

  */

  return (
    <div className="bg-white w-11/12 z-50 rounded-md  border relative overflow-x-hidden h-full my-6 pb-20 xl:w-3/4 lg:w-[70%]">
      <Mobile_nav_bar
        open={open_Mobile_menu}
        setOpen={setOpen_Mobile_menu}
        send_action_to_parent={get_action_from_menu}
      />
      <Header
        click_handler={click_handler}
        send_action_to_parent={get_action_from_menu}
      />
      <div ref={about_me_ref} id="about_me_section">
        <About_me />
      </div>
      <div ref={skills_ref} id="skills_ref_section">
        <Skills />
      </div>
      <div ref={contact_ref} id="contact_ref_section">
        <Contact />
      </div>
    </div>
  );
}
