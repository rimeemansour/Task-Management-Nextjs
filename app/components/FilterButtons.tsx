import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTasks, markAllCompleted } from '../redux/actions';
import { RootState } from '../redux/store'; 

const FilterButtons: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.filter);

  const handleFilter = (filter: string) => {
    dispatch(filterTasks(filter));
  };

  return (
    <div className="flex items-center space-x-4">
      <select
        className="px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Show All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

    </div>
  );
};

export default FilterButtons;
