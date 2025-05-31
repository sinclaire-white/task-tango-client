import { Fade } from "react-awesome-reveal";

const Why = () => {
  return (
    <div className="container px-4 mx-auto my-12 md:my-20">
      <h2 className="mb-8 text-3xl font-bold text-center md:mb-12 md:text-4xl lg:text-5xl text-primary">
        Why Work With Us?
      </h2>

      <div className="flex flex-col items-center gap-8 p-5 bg-accent rounded-2xl lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
        {/* Features List - comes first in DOM for mobile, but appears on left on desktop */}
        <div className="w-full lg:w-1/2">
          <Fade direction="up" cascade triggerOnce damping={0.2}>
            <div className="flex items-start gap-4 p-4 mb-6 border-2 border-black rounded-lg md:p-5 md:gap-5">
              <div className="flex-shrink-0">
                <img 
                  src="https://i.ibb.co/8LmbFkqp/icons8-task.gif" 
                  alt="Task matching icon" 
                  className="w-12 h-12 rounded-lg md:w-14 md:h-14"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold md:text-xl">Tailored Task Matching</h3>
                <p className="mt-2 text-gray-600 md:mt-3 md:text-base">
                  Smart matching connects you with the right freelancer or task based on skills, 
                  budget, and deadlines. 90% matched within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 mb-6 border-2 border-black rounded-lg md:p-5 md:gap-5">
              <div className="flex-shrink-0">
                <img 
                  src="https://i.ibb.co/0bNh7qL/icons8-secure.gif" 
                  alt="Secure transactions icon" 
                  className="w-12 h-12 rounded-lg md:w-14 md:h-14"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold md:text-xl">Secure and Transparent Transactions</h3>
                <p className="mt-2 text-gray-600 md:mt-3 md:text-base">
                  Enjoy peace of mind with escrow protection and clear bid tracking, 
                  ensuring fair payments every time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 mb-6 border-2 border-black rounded-lg md:p-5 md:gap-5">
              <div className="flex-shrink-0">
                <img 
                  src="https://i.ibb.co/v4X4YL2G/icons8-handshake.gif" 
                  alt="Support icon" 
                  className="w-12 h-12 rounded-lg md:w-14 md:h-14"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold md:text-xl">Support for Small Tasks and Beginners</h3>
                <p className="mt-2 text-gray-600 md:mt-3 md:text-base">
                  Perfect for quick projects and new freelancers, offering a 
                  low-entry platform for growth and success.
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Image - comes second in DOM but appears on right on desktop */}
        <div className="w-full lg:w-1/2">
          <Fade direction="right" triggerOnce>
            <img 
              src="https://i.ibb.co/cc5S1fm9/whyworkwithus-removebg-preview.png" 
              alt="Why work with us illustration" 
              className="w-full rounded-2xl shadow-md h-auto max-h-[500px] object-cover"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Why;