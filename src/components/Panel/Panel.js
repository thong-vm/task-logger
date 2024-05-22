function Panel({ project }) {
  const tasks = project.tasks.map((task) => (
    <span className="hover:font-bold hover:cursor-pointer">{task.title}</span>
  ));
  return (
    <div className="h-full">
      <div className="flex flex-row  h-full ">
        <div className="border-x h-full w-[50%] flex flex-col">
          <span>Task</span>
          <div className="mt-16 flex flex-col"> {tasks}</div>
          <button className="text-sky-600 hover:text-sky-400 hover:underline">
            + Add task
          </button>
        </div>
        <div className="border-x h-full w-[25%]">Assigned</div>
        <div className="border-x h-full w-[25%]">Progress</div>
      </div>
    </div>
  );
}

export default Panel;
