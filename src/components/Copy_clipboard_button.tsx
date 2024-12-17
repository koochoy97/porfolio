import { toast } from "react-toastify";

interface Props {
  value: string | number;
}

export function Copy_clipboard_button(props: Props) {
  const handle_click = () => {
    navigator.clipboard
      .writeText(props.value)
      .then(function () {
        toast.success("Texto copiado", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(function (err) {
        alert("Error al copiar el texto: " + err);
      });
  };

  return (
    <span>
      <img
        className="cursor-pointer h-[12px] font-semibold"
        src="/public/images/copy-icon.svg"
        alt=""
        onClick={handle_click}
      />
    </span>
  );
}
