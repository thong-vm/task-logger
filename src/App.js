import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Panel from "./components/Panel/Panel";

function App() {
  const project = {
    name: "Example project",
    tasks: [
      {
        title: "Task 1",
        assigned: "Vo Minh Thong",
        dateTime: "2024/01/01 00:00",
        progress: "100%",
      },
      {
        title: "Task 2",
        assigned: "Vo Minh Thong",
        dateTime: "2024/01/01 00:00",
        progress: "100%",
      },
    ],
  };
  return (
    <div className="flex">
      <div className="fixed w-[20%] h-screen bg-white shadow">
        <Panel project={project} />
      </div>
      <div className="min-w-[600px] h-screen w-full ml-[20%] overflow-x-auto">
        <Calendar year={2024} />
      </div>
    </div>
  );
}
export default App;
