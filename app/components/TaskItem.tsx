import { useDispatch } from 'react-redux';
import { toggleTask, removeTask, markCompleted, markIncomplete } from '../redux/actions';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import Router from 'next/router';
import Link from 'next/link';

interface Task {
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  Task: Task;
  index: number;
}

const TaskItem: React.FC<TaskItemProps> = ({ Task, index }: TaskItemProps) => {
  const dispatch = useDispatch();

  return (
    <li className="bg-blue flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4" style={{ width: '100%' }}>
      <Link style={{ width: '100%' }} href={`/task-details/${index}`}>  
        <div className="flex items-center">
          <span className="mr-4 text-gray-500">
            {index + 1}.
          </span>
          <span className={`mr-4 ${Task.completed ? 'line-through text-gray-500' : ''}`}>
            {Task.text}
          </span>
        </div>
      </Link>
      <div className='flex space-x-3 ml-8'>
        
        <button
          className="mr-2 text-sm bg-purple-600 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTask(String(index)))}
        >
          <FaTrash />
        </button>
        {!Task.completed && (
          <button
            className="text-sm bg-purple-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(String(index)))}
          >
            <FaCheck />
          </button>
        )}
        {Task.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(String(index)))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
