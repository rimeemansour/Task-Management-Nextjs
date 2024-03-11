import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";

const TaskList: React.FC<{ Tasks: any[] }> = ({ Tasks }) => {
  const [data, setData] = useState<any[]>(Tasks);

  useEffect(() => {
    setData(Tasks);
  }, [Tasks]);

  return (
    <div className="p-30 bg-purple-300 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-center text-purple-900">Tasks List</h2>

      <div className="text-gray-500 italic mb-2">Click on a task to show details:</div>

      {data?.length ? (
        <ul>
          {data.map((task: any, index: number) => (
            <TaskItem key={index} Task={task} index={index} />
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No tasks available</div>
      )}
    </div>
  );
};

export default TaskList;
