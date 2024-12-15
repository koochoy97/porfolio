import "./App.css";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App bg-[url('/public/images/dot.svg')] h-screen flex justify-center items-center w-full">
      <div className="gradient absolute w-[80%] h-full opacity-15 blur-[100px] saturate-150 z-0"></div>
      <Main />
    </div>
  );
}

export default App;
