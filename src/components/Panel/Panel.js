function Panel({ project }) {
  return (
    <div className="h-full">
      <table className="w-full">
        <tr>
          <td>Task</td>
          <td>Assigned</td>
          <td>Progress</td>
        </tr>
        {project.tasks.map((task) => (
          <tr>
            <td>{task.title}</td>
            <td>{task.assigned}</td>
            <td>{task.progress}</td>
          </tr>
        ))}
        <button className="text-sky-600 hover:text-sky-400">+Add task</button>
      </table>
    </div>
  );
}

export default Panel;
