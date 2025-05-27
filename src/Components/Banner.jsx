import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative px-4 mx-auto max-w-7xl">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="grid items-center justify-center grid-cols-1 gap-6 p-6 md:gap-8 md:grid-cols-2 lg:p-12">
            <div className="px-6 py-12 space-y-4 bg-black text-secondary rounded-2xl md:px-8 md:py-16 lg:px-10 lg:py-20 lg:space-y-5">
              <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
                Welcome to Task Tango!
              </h2>
              <p className="text-base font-light md:text-lg">
                Connect with freelancers for small tasks or find work
                opportunities based on skills, budget, and deadlines
              </p>
              <button className="px-6 py-3 text-lg font-bold rounded-2xl bg-base-100 hover:bg-secondary hover:text-base-100 md:px-8 md:py-4 md:text-xl lg:text-2xl">
                <Link to="/browse-task">Browse Tasks Now</Link>
              </button>
            </div>
            <div>
              <img
                src="https://i.ibb.co/YF4sBXPZ/Welcome-to-Task-Tango-Connect-with-freelancers-for-small-tasks-or-find-work-opportunities-based-on-s.jpg"
                className="w-full border-2 rounded-3xl"
                alt="Welcome to Task Tango"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="grid items-center justify-center grid-cols-1 gap-6 p-6 md:gap-8 md:grid-cols-2 lg:p-12">
            <div className="px-6 py-12 space-y-4 bg-black text-secondary rounded-2xl md:px-8 md:py-16 lg:px-10 lg:py-20 lg:space-y-5">
              <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
                Hire Freelancers Easily
              </h2>
              <p className="text-base font-light md:text-lg">
                Post your task, set your budget, and get bids from skilled
                freelancers in minutes.
              </p>
              <button className="px-6 py-3 text-lg font-bold rounded-2xl bg-base-100 hover:bg-secondary hover:text-base-100 md:px-8 md:py-4 md:text-xl lg:text-2xl">
                <Link to="/add-task">Post a Task</Link>
              </button>
            </div>
            <div>
              <img
                src="https://i.ibb.co/v6WdcF9H/Find-Work-Opportunities-Showcase-your-skills-bid-on-tasks-and-grow-your-freelance-career-with-Task-T.jpg"
                className="w-full border-2 rounded-3xl"
                alt="Hire Freelancers Easily"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="grid items-center justify-center grid-cols-1 gap-6 p-6 md:gap-8 md:grid-cols-2 lg:p-12">
            <div className="px-6 py-12 space-y-4 bg-black text-secondary rounded-2xl md:px-8 md:py-16 lg:px-10 lg:py-20 lg:space-y-5">
              <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
                Find Work Opportunities
              </h2>
              <p className="text-base font-light md:text-lg">
                Showcase your skills, bid on tasks, and grow your freelance
                career with Task Tango.
              </p>
              <button className="px-6 py-3 text-lg font-bold rounded-2xl bg-base-100 hover:bg-secondary hover:text-base-100 md:px-8 md:py-4 md:text-xl lg:text-2xl">
                <Link to="/browse-task">Start Bidding</Link>
              </button>
            </div>
            <div>
              <img
                src="https://i.ibb.co/cSzN18N8/Hire-Freelancers-Easily-Post-your-task-set-your-budget-and-get-bids-from-skilled-freelancers-in-minu.jpg"
                className="w-full border-2 rounded-3xl"
                alt="Find Work Opportunities"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Custom Navigation Artons */}
        <div className="swiper-button-prev !text-white/70 hover:!text-white !left-2 md:!left-4"></div>
        <div className="swiper-button-next !text-white/70 hover:!text-white !right-2 md:!right-4"></div>
      </Swiper>

      {/* Custom CSS for navigation arrows */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(0, 0, 0, 0.5);
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 1.2rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Banner;