import { useEffect, useState } from "react";

const FeaturedTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/featured-tasks")
      .then((response) => response.json())
      .then((data) => 
        
        setTasks(data))

      .catch((error) => console.error("Error fetching featured tasks:", error));
  }, []);

  return (
    <section className="m-8">
      <h2 className="mb-10 text-5xl font-bold text-center">Featured Tasks</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div key={task._id} className="p-4 bg-black border-4 rounded-lg shadow border-accent text-secondary">
            <h3 className="text-xl font-semibold">{task["task-name"]}</h3>
            <p className="mb-2 text-gray-600">{task.description}</p>
            <p>
              <span className="font-bold">Category: </span>
              {task.category}
            </p>
            <p>
              <span className="font-bold">Budget: </span>${task.budget}
            </p>
            <p>
              <span className="font-bold">Deadline: </span>
              {task.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTask;
