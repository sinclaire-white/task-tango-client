import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";
import { Link,  } from "react-router";

const MyPostedTask = () => {
  const { user } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);


  // Fetch tasks for the current user
  const fetchTasks = async () => {
    try {
      const response = await fetch(`http://localhost:3000/my-tasks/${user?.email}`);
      if (response.ok) {
        const tasks = await response.json();
        setMyTasks(tasks);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      Swal.fire("Error", "Failed to fetch tasks.", "error");
    }
  };

  // Fetch tasks when the component mounts
  useEffect(() => {
    if (user?.email) {
      fetchTasks();
    }
  }, [user?.email]);

  const handleDelete = async (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: "DELETE"
          });

          if (response.ok) {
            Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
              icon: "success"
            });
            fetchTasks(); 
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete task.",
            icon: "error"
          });
        }
      }
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTask = Object.fromEntries(new FormData(form));
    updatedTask.email = user?.email;

    try {
      const response = await fetch(`http://localhost:3000/tasks/${selectedTask._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        Swal.fire({
          title: "Updated!",
          text: "Your task has been updated successfully.",
          icon: "success",
        });
        setSelectedTask(null);
        fetchTasks(); 
      }
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to update task.",
        icon: "error",
      });
    }
  };






  return (
    <div className="min-h-screen p-4 lg:p-8 xl:p-12">
      <h1 className="mb-6 text-2xl font-bold text-center sm:text-3xl md:mb-8">My Posted Tasks</h1>

      {myTasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-base-100 rounded-box">
          <p className="mb-4 text-lg">You haven't posted any tasks yet.</p>
          <Link to="/add-task" className="btn btn-primary">Create Your First Task</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {myTasks.map((task, index) => (
            <div key={task._id} className="p-4 rounded-lg shadow bg-base-100">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{task.name}</h3>
                <span className="text-gray-500">#{index + 1}</span>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setSelectedTask(task)}
                  className="flex-1 btn btn-sm btn-outline btn-primary"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="flex-1 btn btn-sm btn-outline btn-error"
                >
                  Delete
                </button>
                <button
                  
                  className="flex-1 btn btn-sm btn-outline btn-secondary"
                >
                  Bids ({task.bids || 0})
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Task Modal */}
      {selectedTask && (
        <div className="modal modal-open">
          <div className="relative max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg modal-box">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Update Task</h3>
            <button
              onClick={() => setSelectedTask(null)}
              className="absolute text-gray-500 top-2 right-2 btn btn-sm btn-circle btn-ghost hover:text-gray-700"
            >
              ✕
            </button>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Task Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedTask.name}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  defaultValue={selectedTask.description}
                  className="w-full h-20 p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={selectedTask.category}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <input
                  type="number"
                  name="budget"
                  defaultValue={selectedTask.budget}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  required
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Due Date</label>
                <input
                  type="date"
                  name="date"
                  defaultValue={selectedTask.date}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded-md btn btn-primary hover:bg-blue-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTask(null)}
                  className="px-4 py-2 rounded-md btn btn-outline btn-error hover:bg-red-100"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default MyPostedTask;