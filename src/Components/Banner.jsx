import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid items-center justify-center grid-cols-1 gap-8 px-12 py-9 md:grid-cols-2">
            <div className="px-10 py-20 space-y-5 bg-black text-secondary rounded-2xl">
              <h2 className="text-5xl font-extrabold">
                Welcome to Task Tango!
              </h2>
              <p className="text-lg font-light">
                Connect with freelancers for small tasks or find work
                opportunities based on skills, budget, and deadlines
              </p>
              <button className="px-8 py-4 text-2xl font-bold rounded-2xl bg-base-100 hover:bg-secondary hover:text-base-100">
                <Link to="/browse-task">Browse Tasks Now</Link>
              </button>
            </div>
            <div>
              <img
                src={
                  "https://i.ibb.co/YF4sBXPZ/Welcome-to-Task-Tango-Connect-with-freelancers-for-small-tasks-or-find-work-opportunities-based-on-s.jpg"
                }
                className="border-2 rounded-3xl"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center justify-center grid-cols-1 gap-8 px-12 py-9 md:grid-cols-2">
            <div className="px-10 py-20 space-y-5 bg-black text-secondary rounded-2xl">
              <h2 className="text-5xl font-extrabold">
                Hire Freelancers Easily
              </h2>
              <p className="text-lg font-light">
                Post your task, set your budget, and get bids from skilled
                freelancers in minutes.
              </p>
              <button className="px-8 py-4 text-2xl font-bold rounded-2xl bg-base-100 hover:bg-secondary hover:text-base-100">
                <Link to="/add-task">Post a Task</Link>
              </button>
            </div>
            <div>
              <img
                src={
                  "https://i.ibb.co/v6WdcF9H/Find-Work-Opportunities-Showcase-your-skills-bid-on-tasks-and-grow-your-freelance-career-with-Task-T.jpg"
                }
                className="border-2 rounded-3xl"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center justify-center grid-cols-1 gap-8 px-12 py-9 md:grid-cols-2">
            <div className="px-10 py-20 space-y-5 bg-black text-secondary rounded-2xl">
              <h2 className="text-5xl font-extrabold">
                Find Work Opportunities
              </h2>
              <p className="text-lg font-light">
                Showcase your skills, bid on tasks, and grow your freelance
                career with Task Tango.
              </p>
              <button className="px-8 py-4 text-2xl font-bold rounded-2xl bg-base-100 hover:bg-secondary hover:text-base-100">
                <Link to="/browse-task">Start Bidding</Link>
              </button>
            </div>
            <div>
              <img
                src={
                  "https://i.ibb.co/cSzN18N8/Hire-Freelancers-Easily-Post-your-task-set-your-budget-and-get-bids-from-skilled-freelancers-in-minu.jpg"
                }
                className="border-2 rounded-3xl"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
