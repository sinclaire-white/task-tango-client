
import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };



  // Initial data loading
  useEffect(() => {
    const loadData = async () => {
      await Promise.all([fetchTasks(), fetchUsers()]);
      setLoading(false);
    };
    loadData();
  }, []);

  const value = {
    tasks,
    users,
    loading,
    error,
    fetchTasks,
    fetchUsers,
    
    // Add other CRUD operations as needed
    addTask: async (newTask) => {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      setTasks([...tasks, data]);
      return data;
    },
    deleteTask: async (taskId) => {
      await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'DELETE',
      });
      setTasks(tasks.filter(task => task._id !== taskId));
    },
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);