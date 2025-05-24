import { useLoaderData, Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";

const MyPostedTask = () => {
  const { user } = useContext(AuthContext);
  const allTasks = useLoaderData();
  
  // Filter tasks to only show those posted by the current user
  const myTasks = allTasks.filter(task => task.email === user?.email);

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
            }).then(() => {
              window.location.reload(); 
            });
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

  return (
    <div className="min-h-screen p-4 md:p-20">
      <h1 className="mb-8 text-3xl font-bold text-center">My Posted Tasks</h1>
      
      {myTasks.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">You haven't posted any tasks yet.</p>
          <Link to="/add-task" className="btn btn-primary">
            Create Your First Task
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-secondary">
            <thead>
              <tr className="bg-secondary text-secondary-content">
                <th className="border border-secondary">#</th>
                <th className="border border-secondary">Task Name</th>
                <th className="border border-secondary">Category</th>
                <th className="border border-secondary">Budget</th>
                <th className="border border-secondary">Due Date</th>
                <th className="border border-secondary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((task, index) => (
                <tr key={task._id} className="hover:bg-base-200">
                  <th className="border border-secondary">{index + 1}</th>
                  <td className="border border-secondary">{task['task-name']}</td>
                  <td className="border border-secondary">{task.category}</td>
                  <td className="border border-secondary">${task.budget}</td>
                  <td className="border border-secondary">{task.date}</td>
                  <td className="border border-secondary">
                    <div className="flex flex-wrap gap-2">
                      <Link 
                        to={`/update-task/${task._id}`} 
                        className="btn btn-sm btn-outline btn-primary"
                      >
                        Update
                      </Link>
                      <button 
                        onClick={() => handleDelete(task._id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Delete
                      </button>
                      <Link 
                        to={`/task-bids/${task._id}`} 
                        className="btn btn-sm btn-outline btn-secondary"
                      >
                        Bids
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPostedTask;