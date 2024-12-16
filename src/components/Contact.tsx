import { Contact_form } from "./Contact_form";

export function Contact() {
  return (
    <div className="p-8 flex items-center mb-4 flex-col">
      <p className="text-xl font-['Raleway'] text-center w-full mb-2 ">
        CONTACTO
      </p>
      <div className="main_data_container flex flex-col justify-between items-center w-full gap-4">
        <div className="phone_container w-full border rounded-md p-4">
          <div className="row_1">
            <p>Phone</p>
            <p className="text-sm flex items-center gap-2">
              989301999{" "}
              <span>
                <img
                  className="cursor-pointer h-[12px] font-semibold"
                  src="/public/images/copy-icon.svg"
                  alt=""
                />
              </span>
            </p>
          </div>
        </div>

        <div className="phone_container w-full border rounded-md p-4">
          <div className="row_1">
            <p>Email</p>
            <p className="text-sm flex items-center gap-2">
              jaime23koochoy@gmail.com{" "}
              <span>
                <img
                  className="cursor-pointer h-[12px] font-semibold"
                  src="/public/images/copy-icon.svg"
                  alt=""
                />
              </span>
            </p>
          </div>
        </div>

        <Contact_form />
      </div>
    </div>
  );
}
