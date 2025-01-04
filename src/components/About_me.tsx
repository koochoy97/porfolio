import { Project_item } from "./Project_item";

export function About_me() {
  return (
    <div className=" p-8 flex items-center flex-col w-full">
      <div className="header w-full ">
        <p className="text-xl font-['Raleway'] text-center w-full lg:text-left">
          SOBRE MI
        </p>
        <p className="w-full text-center font-['Raleway'] text-sm leading-6 lg:text-left">
          Me apasiona convertir ideas en proyectos funcionales y visualmente
          atractivos. Actualmente trabajo con React, y estoy siempre listo para
          aprender nuevas tecnologías y adaptarme a cualquier desafío.
        </p>
      </div>

      <div className="content w-full">
        <p className="text-xl font-['Raleway'] text-center w-full mt-10 mb-2 lg:text-left">
          PROYECTOS
        </p>

        <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">
          <Project_item
            title="Restaurant POS"
            description="POS para restaurantes con carrito de compras y sistema de diseño de Layout para la gestión de las mesas "
            tech={["React", "Tailwind", "Python", "Supabase"]}
            img="/images/Login_project.png"
          />

          <Project_item
            title="Complete Login System"
            description="Sistema de inicio de sesión por correo y Google, restablecimiento de contraseña, almacenamiento seguro en Cloud Firestore y redirección de rutas para usuarios no autenticados"
            tech={["React", "Tailwind", "Firebase"]}
            img="/images/Login_project.jpeg"
          />

          <Project_item
            title="Restaurant POS"
            description="POS para restaurantes con carrito de compras y sistema de diseño de Layout para la gestión de las mesas "
            tech={["React", "Tailwind", "Python", "Supabase"]}
            img="/images/Login_project.png"
          />
        </div>
      </div>
    </div>
  );
}
