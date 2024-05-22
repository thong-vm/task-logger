import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="flex">
      <div className="fixed w-[20%] border h-full bg-white">Cot</div>
      <div className="min-w-[600px] w-full ml-[20%] overflow-x-auto">
        <Calendar year={2024} />
      </div>
    </div>
  );
}
export default App;
