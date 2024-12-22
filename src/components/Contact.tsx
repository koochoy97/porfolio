import { Contact_form } from "./Contact_form";
import { Copy_clipboard_button } from "./Copy_clipboard_button";

export function Contact() {
  return (
    <div className="p-8 flex items-center mb-4 flex-col">
      <p className="text-xl font-['Raleway'] text-center w-full mb-2 lg:text-left">
        CONTACTO
      </p>
      <div className="main_data_container flex flex-col justify-between items-center w-full gap-4">
        <div className="w-full flex-col flex justify-between items-center gap-4 md:flex-row ">
          <div className="phone_container w-full border rounded-md p-4 ">
            <div className="row_1">
              <p>Phone</p>
              <p className="text-sm flex items-center gap-2">
                989301999 <Copy_clipboard_button value="989301999" />
              </p>
            </div>
          </div>

          <div className="email_container w-full border rounded-md p-4 ">
            <div className="row_1">
              <p>Email</p>
              <p className="text-sm flex items-center gap-2">
                jaime23koochoy@gmail.com{" "}
                <Copy_clipboard_button value="jaime23koochoy@gmail.com" />
              </p>
            </div>
          </div>
        </div>

        <Contact_form />
      </div>
    </div>
  );
}
