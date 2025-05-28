import Select from "react-select";
import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'
import { AuthContext } from "../Providers/AuthContext";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData);

    newTask.email = user.email;

    // send data to db
    fetch('http://localhost:3000/tasks', {  
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          icon: "success",
          title: "Task Added Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset();
        setDeadline(null);
      }
    })
    .catch(error => {
      console.error('Error adding task:', error);
      Swal.fire({
        icon: "error",
        title: "Failed to Add Task",
        text: error.message,
      });
    });
  }

  const [deadline, setDeadline] = useState(null);

  const options = [
    { value: "graphic-design", label: "Graphic Design" },
    { value: "writing-editing", label: "Writing & Editing" },
    { value: "web-development", label: "Web Development" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "video-animation", label: "Video & Animation" },
    { value: "translation-transcription", label: "Translation & Transcription" },
    { value: "programming-techsupport", label: "Programming & Tech Support" },
    { value: "voiceover-audioservices", label: "Voice Over & Audio Services" },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-24">
      <div className="p-4 border-4 border-accent rounded-2xl md:p-8 lg:p-10">
        <div className="text-center text-secondary">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl"
            style={{
              textShadow: "0 0 8px rgba(72, 166, 167, 0.7), 0 0 16px rgba(72, 166, 167, 0.4)",
            }}
          >
            Add New Task
          </h1>
          <p className="mb-6 text-sm font-semibold md:text-base md:mb-10">
            Small steps lead to big achievements. Start by adding your task!
          </p>
        </div>
        
        <form onSubmit={handleAddTask}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {/* User Name */}
            <fieldset className="w-full p-3 border fieldset bg-accent border-base-300 rounded-box md:p-4">
              <label className="text-sm font-bold text-black label md:text-base">
                User Name
              </label>
              <input
                type="text"
                className="w-full text-sm bg-white input md:text-base"
                placeholder="Your Name Here"
                name="name"
                disabled
                value={user?.displayName || user?.name || "User"}
              />
            </fieldset>

            {/* User Email */}
            <fieldset className="w-full p-3 border fieldset bg-accent border-base-300 rounded-box md:p-4">
              <label className="text-sm font-bold text-black label md:text-base">
                User Email
              </label>
              <input
                type="email"
                className="w-full text-sm bg-white input md:text-base"
                placeholder="Your Email Here"
                disabled
                value={user?.email || ""}
              />
            </fieldset>

            {/* Task Name */}
            <fieldset className="w-full p-3 border fieldset bg-accent border-base-300 rounded-box md:p-4">
              <label className="text-sm font-bold text-black label md:text-base">
                Task Name
              </label>
              <input
                type="text"
                className="w-full text-sm bg-white input md:text-base"
                placeholder="Write your task name here"
                name="name"
                required
              />
            </fieldset>

            {/* Category */}
            <fieldset className="w-full p-3 border fieldset bg-accent border-base-300 rounded-box md:p-4">
              <label className="text-sm font-bold text-black label md:text-base">
                Category
              </label>
              <Select 
                options={options} 
                name="category" 
                required
                className="text-sm md:text-base"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'white',
                    minHeight: '3rem',
                  }),
                }}
              />
            </fieldset>

            {/* Deadline */}
            <fieldset className="w-full p-3 border fieldset bg-accent border-base-300 rounded-box md:p-4">
              <label className="text-sm font-bold text-black label md:text-base">
                Deadline
              </label>
              <DatePicker
                selected={deadline}
                onChange={(date) => setDeadline(date)}
                className="w-full text-sm bg-white input md:text-base"
                placeholderText="Select deadline"
                minDate={new Date()}
                name="date"
                required
              />
            </fieldset>

            {/* Budget */}
            <fieldset className="w-full p-3 border fieldset bg-accent border-base-300 rounded-box md:p-4">
              <label className="text-sm font-bold text-black label md:text-base">
                Budget ($)
              </label>
              <input
                type="number"
                className="w-full text-sm bg-white input md:text-base"
                placeholder="Your Budget"
                name="budget"
                min="1"
                required
              />
            </fieldset>
          </div>

          {/* Description */}
          <fieldset className="w-full p-3 mt-4 border fieldset bg-accent border-base-300 rounded-box md:p-4 md:mt-6">
            <label className="text-sm font-bold text-black label md:text-base">
              Description
            </label>
            <textarea 
              className="w-full text-sm bg-white textarea md:text-base" 
              placeholder="Add Details About Task Here" 
              name="description" 
              rows="4"
              required
            ></textarea>
          </fieldset>

          {/* Submit Button */}
          <button 
            className="w-full py-3 mt-6 text-base font-bold rounded-4xl bg-accent hover:bg-black hover:text-accent hover:cursor-pointer md:py-4 md:text-lg lg:text-xl"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;