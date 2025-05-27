import { useLoaderData, Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";

const MyPostedTask = () => {
  const { user } = useContext(AuthContext);
  const allTasks = useLoaderData();
  
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
    <div className="min-h-screen p-4 lg:p-8 xl:p-12">
      <h1 className="mb-6 text-2xl font-bold text-center sm:text-3xl md:mb-8">My Posted Tasks</h1>
      
      {myTasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-base-100 rounded-box">
          <svg className="w-16 h-16 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="mb-4 text-lg">You haven't posted any tasks yet.</p>
          <Link to="/add-task" className="btn btn-primary">
            Create Your First Task
          </Link>
        </div>
      ) : (
        <>
          {/* Mobile View (Cards) */}
          <div className="space-y-4 md:hidden">
            {myTasks.map((task, index) => (
              <div key={task._id} className="p-4 rounded-lg shadow bg-base-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{task.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="badge badge-secondary">{task.category}</span>
                      <span className="font-medium">${task.budget}</span>
                    </div>
                  </div>
                  <span className="text-gray-500">#{index + 1}</span>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Due:</span> {task.date}
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Link 
                    to={`/update-task/${task._id}`} 
                    className="flex-1 btn btn-sm btn-outline btn-primary"
                  >
                    Update
                  </Link>
                  <button 
                    onClick={() => handleDelete(task._id)}
                    className="flex-1 btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                  <Link 
                    to={`/task-bids/${task._id}`} 
                    className="flex-1 btn btn-sm btn-outline btn-secondary"
                  >
                    Bids
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View (Table) */}
          <div className="hidden md:block">
            <div className="overflow-x-auto">
              <table className="table w-full border border-secondary">
                <thead>
                  <tr className="bg-secondary text-secondary-content">
                    <th className="p-3 border border-secondary">#</th>
                    <th className="p-3 border border-secondary">Task Name</th>
                    <th className="p-3 border border-secondary">Category</th>
                    <th className="p-3 border border-secondary">Budget</th>
                    <th className="p-3 border border-secondary">Due Date</th>
                    <th className="p-3 border border-secondary">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myTasks.map((task, index) => (
                    <tr key={task._id} className="hover:bg-base-200">
                      <th className="p-3 border border-secondary">{index + 1}</th>
                      <td className="p-3 border border-secondary">{task['task-name']}</td>
                      <td className="p-3 border border-secondary">{task.category}</td>
                      <td className="p-3 border border-secondary">${task.budget}</td>
                      <td className="p-3 border border-secondary">{task.date}</td>
                      <td className="p-3 border border-secondary">
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
          </div>
        </>
      )}
    </div>
  );
};

export default MyPostedTask;