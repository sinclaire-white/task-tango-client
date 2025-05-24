import { useLoaderData, Link } from "react-router";
import { useState } from 'react';

const TaskDetails = () => {
  const task = useLoaderData();
  const [bidCount, setBidCount] = useState(0);
  const [showBidButton, setShowBidButton] = useState(true);

  const handleBid = () => {
    setBidCount(bidCount + 1);
    setShowBidButton(false);
  };

  if (!task || !task._id) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Task not found or data is incomplete</p>
      </div>
    );
  }

  return (
    <div className="relative max-w-4xl min-h-screen p-4 mx-auto">
      {/* Bid Counter - Always visible */}
      <div className={`badge badge-secondary absolute top-4 right-4 ${bidCount === 0 ? 'opacity-70' : ''}`}>
        Bids: {bidCount}
      </div>

      <div className="mt-8 overflow-x-auto border-secondary">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th className="w-1/4 bg-gray-100 border border-secondary">Task Name</th>
              <td className="border border-secondary">{task['task-name'] || 'Untitled Task'}</td>
            </tr>
            <tr>
              <th className="bg-gray-100 border border-secondary">Description</th>
              <td className="border border-secondary">{task.description}</td>
            </tr>
            <tr>
              <th className="bg-gray-100 border border-secondary">Category</th>
              <td className="border border-secondary">{task.category}</td>
            </tr>
            <tr>
              <th className="bg-gray-100 border border-secondary">Budget</th>
              <td className="border border-secondary">${task.budget}</td>
            </tr>
            <tr>
              <th className="bg-gray-100 border border-secondary">Due Date</th>
              <td className="border border-secondary">{task.date}</td>
            </tr>
            <tr>
              <th className="bg-gray-100 border border-secondary">Posted By</th>
              <td className="border border-secondary">{task.name || 'Anonymous'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Visual divider */}
      <div className="divider"></div>

      {/* Bid Button Section */}
      <div className="flex flex-col items-center gap-4">
        {showBidButton && (
          <button 
            onClick={handleBid}
            className="w-48 btn btn-primary"
          >
            Place Bid
          </button>
        )}
        
        {/* Back Link */}
        <Link to="/browse-task" className="btn btn-ghost bg-accent">
          Back to Tasks
        </Link>
      </div>
    </div>
  );
};

export default TaskDetails;