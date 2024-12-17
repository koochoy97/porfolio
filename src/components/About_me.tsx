import { Tech_filter_bar } from "./Tech_filter_bar";
import { Project_item } from "./Project_item";

export function About_me() {
  return (
    <div name="about_me" className=" p-8 flex items-center flex-col w-full">
      <div className="header w-full">
        <p className="text-xl font-['Raleway'] text-center w-full">SOBRE MI</p>
        <p className="w-full text-center font-['Raleway'] text-sm leading-6">
          Me apasiona convertir ideas en proyectos funcionales y visualmente
          atractivos. Actualmente trabajo con React, y estoy siempre listo para
          aprender nuevas tecnologías y adaptarme a cualquier desafío.
        </p>
      </div>

      <div className="content w-full">
        <p className="text-xl font-['Raleway'] text-center w-full mt-10 mb-2">
          PROYECTOS
        </p>

        <Project_item
          title="Restaurant POS"
          description="POS para restaurantes con carrito de compras y sistema de diseño de Layout para la gestión de las mesas "
          tech={["React", "Tailwind", "Python", "Supabase"]}
          id={1}
        />
      </div>
    </div>
  );
}
