function Panel({ project }) {
  const tasks = project.tasks.map((task) => (
    <span className="hover:font-bold hover:cursor-pointer">{task.title}</span>
  ));
  return (
    <div className="h-full">
      <table>
        <th className="text-2xl font-semibold mb-4 ">
          <td>Task</td>
          <td>Assigned</td>
          <td>Progress</td>
        </th>
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
