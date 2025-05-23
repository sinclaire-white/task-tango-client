import Select from "react-select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = () => {
  const [deadline, setDeadline] = useState(null);

  const options = [
    { value: "graphic-design", label: "Graphic Design" },
    { value: "writing-editing", label: "Writing & Editing" },
    { value: "web-development", label: "Web Development" },
    { value: "digitalar-mketing", label: "Digital Marketing" },
    { value: "video-animation", label: "Video & Animation" },
    {
      value: "translation-transcription",
      label: "Translation & Transcription",
    },
    { value: "programming-techsupport", label: "Programming & Tech Support" },
    { value: "Voice Over & Audio Services", label: "voiceover-audioservices" },
  ];

  return (
    <div className="p-24">
      <div className="p-10 border-4 border-accent rounded-2xl">
        <div className="text-center text-secondary">
        <h1
          className="mb-3 text-5xl font-bold"
          style={{
            textShadow:
              "0 0 8px rgba(72, 166, 167, 0.7), 0 0 16px rgba(72, 166, 167, 0.4)",
          }}
        >
          Add New Task
        </h1>
        <p className="mb-10 font-semibold">
          Small steps lead to big achievements. Start by adding your task!
        </p>
      </div>
      <div>
        <form>
          <div className="grid grid-cols-2 gap-2">
            <fieldset className="w-full p-4 border fieldset bg-accent border-base-300 rounded-box">
              <label className="text-base font-bold text-black label">
                User Name
              </label>
              <input
                type="text"
                className="w-full bg-white input"
                placeholder="Your Name Here"
                name="name"
              />
            </fieldset>
            <fieldset className="w-full p-4 border fieldset bg-accent border-base-300 rounded-box">
              <label className="text-base font-bold text-black label">
                User Email
              </label>
              <input
                type="email"
                className="w-full bg-white input"
                placeholder="Your Email Here"
              />
            </fieldset>
            <fieldset className="w-full p-4 border fieldset bg-accent border-base-300 rounded-box">
              <label className="text-base font-bold text-black label">
                Task Name
              </label>
              <input
                type="text"
                className="w-full bg-white input"
                placeholder="Write your task name here"
                name="task-name"
              />
            </fieldset>
            <fieldset className="w-full p-4 border fieldset bg-accent border-base-300 rounded-box">
              <label className="text-base font-bold text-black label">
                Category
              </label>
              <Select options={options} />
            </fieldset>
            <fieldset className="w-full p-4 border fieldset bg-accent border-base-300 rounded-box">
              <label className="text-base font-bold text-black label">
                Deadline
              </label>
              <DatePicker
                selected={deadline}
                onChange={(date) => setDeadline(date)}
                className="w-full bg-white input"
                placeholderText="Select deadline"
                minDate={new Date()}
              />
            </fieldset>
            <fieldset className="w-full p-4 border fieldset bg-accent border-base-300 rounded-box">
              <label className="text-base font-bold text-black label">
                Budget
              </label>
              <input
                type="text"
                className="w-full bg-white input"
                placeholder="Your Budget"
                name="budget"
              />
            </fieldset>
                       
          </div>
          <fieldset className="w-full p-4 mt-2 border fieldset bg-accent border-base-300 rounded-box">
              <label className="text-base font-bold text-black label">
                Description
              </label>
             <textarea className="w-full bg-white textarea" placeholder="Add Details About Task Here"></textarea>
            </fieldset>
            <button className="w-full py-4 mt-5 text-xl font-bold rounded-4xl bg-accent hover:bg-black hover:text-accent hover:cursor-pointer">Add</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AddTask;
