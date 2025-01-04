import { useState, useRef } from "react";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact_form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const name_ref = useRef<HTMLInputElement>(null);
  const email_ref = useRef<HTMLInputElement>(null);
  const message_ref = useRef<HTMLTextAreaElement>(null);

  const [loader_on, setLoader_on] = useState(false);

  const sendToWebhook = async (formData: FormData) => {
    try {
      const response = await fetch(
        "https://hook.us1.make.com/57b5l19o7epxh4w914hh68s2bfr967zs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud al webhook");
      }

      const result = await response;
      console.log("Datos enviados correctamente:", result);
      setLoader_on(false);

      if (name_ref.current && email_ref.current && message_ref.current) {
        name_ref.current.value = "";
        email_ref.current.value = "";
        message_ref.current.value = "";
      }

      toast.success("¡Mensaje enviado correctamente!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const handle_submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoader_on(true);
    const form_data = {
      name: name,
      email: email,
      message: message,
    };
    sendToWebhook(form_data);
  };

  return (
    <form
      action=""
      className="bg-[#F8FBFB] w-full rounded-md p-6  "
      onSubmit={handle_submit}
    >
      <div className="flex flex-col form_input my-3">
        <label htmlFor="name" className="font-semibold">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-transparent border-b active:outline-none focus:outline-none text-sm"
          onChange={(e) => setName(e.target.value)}
          ref={name_ref}
        />
      </div>

      <div className="flex flex-col form_input my-3">
        <label htmlFor="name" className="font-semibold">
          Email:
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="bg-transparent border-b active:outline-none focus:outline-none text-sm active:bg-transparent"
          onChange={(e) => setEmail(e.target.value)}
          ref={email_ref}
        />
      </div>

      <div className="flex flex-col form_input my-3">
        <label htmlFor="name" className="font-semibold">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          className="bg-transparent border-b active:outline-none focus:outline-none text-sm"
          onChange={(e) => setMessage(e.target.value)}
          ref={message_ref}
        />
      </div>

      <button
        className="my-3 w-full bg-[#000000] text-white py-2 rounded flex justify-center items-center cursor-pointer"
        disabled={loader_on}
      >
        {loader_on ? (
          <img src="/images/loader.gif" className="w-[20px]" alt="" />
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  );
}
