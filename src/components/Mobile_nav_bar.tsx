import { Copy_clipboard_button } from "./Copy_clipboard_button";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  send_action_to_parent: () => void;
}

export function Mobile_nav_bar(props: Props) {
  const handle_on_click = (element_clicked: string) => {
    props.setOpen(false);
    props.send_action_to_parent(element_clicked);
  };

  return (
    <div
      className={`flex rounded-md h-full top-0 w-full ${
        props.open
          ? " z-50 black-transparency-background"
          : "transparent-background z-[-1]"
      } flex-col items-end absolute transition-display duration-[100ms] ease-in-out`}
    >
      <div
        className={`flex flex-col items-center justify-start  bg-white h-full w-11/12 rounded-r-md relative transition-all duration-300 ease-in-out
            ${props.open ? "translate-x-0" : "translate-x-full"}`}
      >
        <span
          className="text-3xl font-bold absolute top-2 left-2 cursor-pointer"
          onClick={() => handle_on_click("close")}
        >
          <img src="/public/images/hamburger-menu-grey.png" alt="" />
        </span>
        <div className="profile_container flex justify-start items-start w-full border px-10 py-4 gap-3">
          <div className="w-[60px] h-[60px] bg-slate-300"></div>
          <div className="flex flex-col items-start justify-start h-full  ">
            <h2 className="">Jaime Koochoy</h2>
            <p className="font-light text-[#858585] text-sm">
              Frontend Developer
            </p>
            <p className="text-sm font-semibold flex items-center gap-2">
              jaime23koochoy@gmail.com
              <Copy_clipboard_button value="jaime23koochoy@gmail.com" />
            </p>
            <p className="text-sm font-semibold flex items-center gap-2">
              989301999
              <Copy_clipboard_button value="98301999" />
            </p>
          </div>
        </div>

        <div
          className="item_container flex justify-start items-start w-full border-b px-10 py-4 gap-3 cursor-pointer transition-colors hover:bg-slate-100"
          onClick={() => handle_on_click("about_me")}
        >
          <div className="svg_container w-5 flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.459 1.6601C12.3259 1.55635 12.162 1.5 11.9932 1.5C11.8245 1.5 11.6606 1.55635 11.5275 1.6601L0.75 10.0639L1.68225 11.2429L3 10.2154V19.4996C3.00079 19.8972 3.15908 20.2783 3.44022 20.5594C3.72135 20.8405 4.10242 20.9988 4.5 20.9996H19.5C19.8976 20.9988 20.2787 20.8405 20.5598 20.5594C20.8409 20.2783 20.9992 19.8972 21 19.4996V10.2221L22.3177 11.2496L23.25 10.0706L12.459 1.6601ZM13.5 19.4996H10.5V13.4996H13.5V19.4996ZM15 19.4996V13.4996C14.9996 13.1019 14.8414 12.7206 14.5602 12.4394C14.279 12.1582 13.8977 12 13.5 11.9996H10.5C10.1023 12 9.721 12.1582 9.43978 12.4394C9.15856 12.7206 9.0004 13.1019 9 13.4996V19.4996H4.5V9.0461L12 3.2036L19.5 9.0536V19.4996H15Z"
                fill="#595959"
              />
            </svg>
          </div>
          <p className="font-medium">About me</p>
        </div>

        <div
          className="item_container flex justify-start items-start w-full border-b px-10 py-4 gap-3 cursor-pointer transition-colors hover:bg-slate-100"
          onClick={() => handle_on_click("skills")}
        >
          <div className="svg_container w-5 flex justify-center items-center">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 0H13C13.7956 0 14.5587 0.31607 15.1213 0.87868C15.6839 1.44129 16 2.20435 16 3V17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7956 0 17L0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0ZM3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H3ZM5 3H11C11.2652 3 11.5196 3.10536 11.7071 3.29289C11.8946 3.48043 12 3.73478 12 4C12 4.26522 11.8946 4.51957 11.7071 4.70711C11.5196 4.89464 11.2652 5 11 5H5C4.73478 5 4.48043 4.89464 4.29289 4.70711C4.10536 4.51957 4 4.26522 4 4C4 3.73478 4.10536 3.48043 4.29289 3.29289C4.48043 3.10536 4.73478 3 5 3ZM5 15H7C7.26522 15 7.51957 15.1054 7.70711 15.2929C7.89464 15.4804 8 15.7348 8 16C8 16.2652 7.89464 16.5196 7.70711 16.7071C7.51957 16.8946 7.26522 17 7 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15ZM5 11H11C11.2652 11 11.5196 11.1054 11.7071 11.2929C11.8946 11.4804 12 11.7348 12 12C12 12.2652 11.8946 12.5196 11.7071 12.7071C11.5196 12.8946 11.2652 13 11 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11ZM5 7H11C11.2652 7 11.5196 7.10536 11.7071 7.29289C11.8946 7.48043 12 7.73478 12 8C12 8.26522 11.8946 8.51957 11.7071 8.70711C11.5196 8.89464 11.2652 9 11 9H5C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7Z"
                fill="#1A1003"
                fill-opacity="0.5"
              />
            </svg>
          </div>

          <p className="font-medium">Skills</p>
        </div>

        <div
          className="item_container flex justify-start items-start w-full border-b px-10 py-4 gap-3 cursor-pointer transition-colors hover:bg-slate-100"
          onClick={() => handle_on_click("contact")}
        >
          <div className="svg_container w-5 flex justify-center items-center">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 0H4.5C3.96957 0 3.46086 0.210714 3.08579 0.585786C2.71071 0.960859 2.5 1.46957 2.5 2V5H0.5V7H2.5V9H0.5V11H2.5V13H0.5V15H2.5V18C2.5 18.5304 2.71071 19.0391 3.08579 19.4142C3.46086 19.7893 3.96957 20 4.5 20H19.5C19.7652 20 20.0196 19.8946 20.2071 19.7071C20.3946 19.5196 20.5 19.2652 20.5 19V1C20.5 0.734784 20.3946 0.48043 20.2071 0.292893C20.0196 0.105357 19.7652 0 19.5 0ZM11.5 2.999C13.148 2.999 14.5 4.35 14.5 5.999C14.4971 6.79385 14.1801 7.55533 13.6182 8.11747C13.0562 8.67962 12.2948 8.99684 11.5 9C9.853 9 8.5 7.647 8.5 5.999C8.5 4.35 9.853 2.999 11.5 2.999ZM17.5 16H5.5V15.25C5.5 13.031 8.205 10.75 11.5 10.75C14.795 10.75 17.5 13.031 17.5 15.25V16Z"
                fill="#1A1003"
                fill-opacity="0.5"
              />
            </svg>
          </div>

          <p className="font-medium">Contact</p>
        </div>
      </div>
    </div>
  );
}
