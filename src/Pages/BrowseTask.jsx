import { useLoaderData, useNavigation, Link } from "react-router";

const BrowseTask = () => {
  const tasks = useLoaderData();
  const navigation = useNavigation();

  // Loading state
  if (navigation.state === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="ml-2">Loading tasks...</p>
      </div>
    );
  }

  // Empty state
  if (!tasks || tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mb-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h3 className="text-xl font-medium">No tasks available</h3>
        <p className="mt-2 text-gray-500">Check back later or create a new task</p>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="transition-transform duration-300 bg-black card text-secondary hover:scale-110 hover:shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title line-clamp-1">{task.name}</h2>
              <p className="line-clamp-2">{task.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="badge badge-secondary">
                  {task.category}
                </span>
                <span className="font-bold">${task.budget}</span>
              </div>
              <div className="justify-end mt-4 card-actions">
                <Link 
                  to={`/task-details/${task._id}`}
                  className="btn btn-sm bg-base-100 hover:bg-base-200"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTask;