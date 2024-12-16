export function Contact_form() {
  return (
    <form action="" className="bg-[#F8FBFB] w-full rounded-md p-6  ">
      <div className="flex flex-col form_input my-3">
        <label htmlFor="name" className="font-semibold">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-transparent border-b active:outline-none focus:outline-none text-sm"
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
          className="bg-transparent border-b active:outline-none focus:outline-none text-sm"
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
        />
      </div>

      <button className="my-3 w-full bg-[#000000] text-white py-2 rounded">
        Enviar
      </button>
    </form>
  );
}
