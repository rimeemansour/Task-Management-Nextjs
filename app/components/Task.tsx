import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from './TaskList';
import FilterButtons from './FilterButtons';
import { BsPlus } from 'react-icons/bs';
import { addTask } from '../redux/actions';
import { RootState } from '../redux/store'; 

const Task: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = useState<string>('');
  const filteredTasks = useSelector((state: RootState) => {
    const tasks = state.tasks;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); 
    return tasks.filter((task:any) => {
      const matchesFilter =
        (filter === 'COMPLETED' && task.completed) ||
        (filter === 'INCOMPLETE' && !task.completed) ||
        filter === 'ALL';
      const matchesSearch = task.text.toLowerCase().includes(searchTerm);
      return matchesFilter && matchesSearch;
    });
  });

  const handleAddTask = (text: string) => {
    dispatch(addTask(text));
  };

  const handleAddTaskClick = () => {
    if (newTaskText.trim() !== '') {
      handleAddTask(newTaskText.trim());
      setNewTaskText('');
    }
  };

  return (
    <div className="p-40 bg-purple-300 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-900">TASK MANAGEMENT APP</h2>
      <div className="flex items-center mb-4">
        <input
          id="addTaskInput"
          className="flex-grow p-4 border-b-2 border-purple-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none"
          onClick={handleAddTaskClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4">
        
        </div>
      </div>

      <TaskList Tasks={filteredTasks} />
    </div>
  );
};

export default Task;
