import { Copy_clipboard_button } from "./Copy_clipboard_button";

export function Profile_desktop() {
  return (
    <div className="bg-white z-50 rounded-md border my-6  hidden xl:flex xl:w-[275px] xl:mr-5 xl:flex-col h-[500px] ">
      <div className="row_1 text-center bg-slate-600 rounded-t-md h-[60px] relative">
        <div className="bg-slate-300 rounded-full w-[80px] h-[80px] absolute bottom-[-50%] left-[50%] translate-x-[-50%]"></div>
      </div>

      <div className="row_2 text-center px-6 mt-10">
        <p>Jaime Koochoy</p>
        <p className="text-sm text-[#858585]">Frontend Developer</p>
      </div>

      <div className="row_3 text-center px-6 mt-4 flex gap-3 justify-center">
        <div className="bg-[#F2F7FC] w-[45px] h-[45px] rounded-md"></div>
        <div className="bg-[#F2F7FC] w-[45px] h-[45px] rounded-md"></div>
      </div>

      <div className="row_4 text-left mx-6 p-4 mt-4 bg-[#F2F5F9] rounded-md ">
        <div className="flex items-center justify-center gap-2 border-b py-2">
          <div className="text-xs w-full">
            <p className="text-left">Phone</p>
            <p className="flex items-center justify-left gap-2 font-semibold">
              989301999 <Copy_clipboard_button value="98301999" />
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 border-b py-2">
          <div className="text-xs w-full">
            <p className="text-left">Email</p>
            <p className="flex items-center justify-left gap-2 font-semibold">
              jaime23koochoy@gmail.com
              <Copy_clipboard_button value="jaime23koochoy@gmail.com" />
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 border-b py-2">
          <div className="text-xs w-full">
            <p className="text-left">Ubicación</p>
            <p className="flex items-center justify-left gap-2 font-semibold">
              Lima, Perú
            </p>
          </div>
        </div>

        <div className="my-4">
          <button className="text-sm font-semibold bg-black text-white w-full rounded-md py-2">
            {" "}
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
}
