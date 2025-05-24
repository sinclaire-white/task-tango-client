// import  { createContext, useContext, useEffect, useState } from 'react';
// export const TaskContext = createContext();
// const TaskProvider = ({children}) => {

//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);
  
//  useEffect(() => {
//     fetch('http://localhost:3000/tasks')
//       .then(response => response.json())
//       .then(data => {
//                 setTasks(data);
//                 setLoading(false); 
//             })
//   }, []);

//   const value = {
//     tasks,
//     loading,
    
//     // Add functions to update tasks if needed
//     addTask: (newTask) => setTasks([...tasks, newTask]),
//     updateTask: (updatedTask) => setTasks(tasks.map(task => 
//       task._id === updatedTask._id ? updatedTask : task
//     )),
//     deleteTask: (taskId) => setTasks(tasks.filter(task => task._id !== taskId))
//   };
// return (
//     <TaskContext.Provider value={value}>
//       {children}
//     </TaskContext.Provider>
//   );
// }

// export default TaskProvider;


import { createContext, useContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/tasks');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const value = {
    tasks,
    loading,
    error,
    refetchTasks: fetchTasks, // Allow manual refetching
    addTask: (newTask) => setTasks([...tasks, newTask]),
    updateTask: (updatedTask) => setTasks(tasks.map(task => 
      task._id === updatedTask._id ? updatedTask : task
    )),
    deleteTask: (taskId) => setTasks(tasks.filter(task => task._id !== taskId))
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;