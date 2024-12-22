import "./App.css";
import { Main } from "./components/Main";
import { Profile_desktop } from "./components/Profile_desktop";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App bg-[url('/public/images/dot.svg')] flex justify-center item-start w-full box-border">
      <div className="gradient absolute w-[80%] opacity-15 blur-[100px] saturate-150 z-0 h-screen "></div>
      <Profile_desktop />
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
