import { useLoaderData, useNavigation, Link  } from "react-router";

const BrowseTask = () => {
  const tasks = useLoaderData();
  // const navigation = useNavigation();

  //  if (navigation.state === "loading") {
  //     return (
  //       <div className="flex items-center justify-center h-64">
  //         <span className="loading loading-spinner loading-lg"></span>
  //         <p className="ml-2">Loading tasks...</p>
  //       </div>
  //     );
  //   }

  if (!tasks || tasks.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3 p-10">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="mb-4 card bg-primary text-primary-content w-96"
        >
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">{task.name}</h2>
              <p>{task.description}</p>
              <div className="justify-end card-actions">
                <Link to={`/task-details/${task._id}`}><button className="btn bg-base-100">See Details</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrowseTask;
