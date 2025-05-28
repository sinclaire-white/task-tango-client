import { useLoaderData, Link } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";

const MyPostedTask = () => {
  const { user } = useContext(AuthContext);
  const allTasks = useLoaderData();
  
  const myTasks = allTasks.filter(task => task.email === user?.email);
 const [selectedTask, setSelectedTask] = useState(null);


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
        }).then(() => {
          setSelectedTask(null);
          window.location.reload();
        });
      }
    } catch (error) {
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
                    Bids
                  </button>
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
                      <td className="p-3 border border-secondary">{task.name}</td>
                      <td className="p-3 border border-secondary">{task.category}</td>
                      <td className="p-3 border border-secondary">${task.budget}</td>
                      <td className="p-3 border border-secondary">{task.date}</td>
                      <td className="p-3 border border-secondary">
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => setSelectedTask(task)}
                            className="btn btn-sm btn-outline btn-primary"
                          >
                            Update
                          </button>
                          <button 
                            onClick={() => handleDelete(task._id)}
                            className="btn btn-sm btn-outline btn-error"
                          >
                            Delete
                          </button>
                          <button 
                            
                            className="btn btn-sm btn-outline btn-secondary"
                          >
                            Bids
                           </button>
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

{selectedTask && (
  <div className="modal modal-open">
    <div className="max-w-lg modal-box md:max-w-xl">
      <h3 className="mb-4 text-2xl font-semibold">Update Task</h3>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="font-medium label-text">Task Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={selectedTask.name}
            className="w-full input input-bordered"
            placeholder="Enter task name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-medium label-text">Category</span>
          </label>
          <input
            type="text"
            name="category"
            defaultValue={selectedTask.category}
            className="w-full input input-bordered"
            placeholder="Enter category"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-medium label-text">Budget</span>
          </label>
          <input
            type="number"
            name="budget"
            defaultValue={selectedTask.budget}
            className="w-full input input-bordered"
            placeholder="Enter budget"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-medium label-text">Due Date</span>
          </label>
          <input
            type="date"
            name="date"
            defaultValue={selectedTask.date}
            className="w-full input input-bordered"
            required
          />
        </div>
        <div className="flex justify-end space-x-2 modal-action">
          <button
            type="button"
            className="btn btn-outline btn-error"
            onClick={() => setSelectedTask(null)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Update
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