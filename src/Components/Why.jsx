
import { Fade } from "react-awesome-reveal";
const Why = () => {
  return (
    <div>
      <h2 className="my-10 text-5xl font-bold text-center text-primary">Why Work With Us?</h2>

      <div className="flex items-center gap-10">
        <div className="w-1/2">
        <Fade direction="up" cascade triggerOnce>
          <div className="flex items-center gap-4 mb-5 feature">
            <div><img src="https://i.ibb.co/8LmbFkqp/icons8-task.gif" alt="" className="rounded-lg w-15 h-15"/></div>
            <div>
                <h3 className="text-lg font-medium">Tailored Task Matching</h3>
            <p className="max-w-xl opacity-80">Smart matching connects you with the right freelancer or task based on skills, budget, and deadlines 90% matched within 24 hours.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-5 feature">
            <div><img src="https://i.ibb.co/0bNh7qL/icons8-secure.gif" alt="" className="rounded-lg h-15 w-15"/></div>
            <div>
                <h3 className="text-lg font-medium">Secure and Transparent Transactions</h3>
            <p className="max-w-xl opacity-80">Enjoy peace of mind with escrow protection and clear bid tracking, ensuring fair payments every time.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-5 feature">
            <div><img src="https://i.ibb.co/v4X4YL2G/icons8-handshake.gif" alt="" className="rounded-lg h-15 w-15"/></div>
            <div>
                <h3 className="text-lg font-medium">Support for Small Tasks and Beginners</h3>
            <p className="max-w-xl opacity-80">Perfect for quick projects and new freelancers, offering a low-entry platform for growth and success.</p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="w-1/2">
        <img src="https://i.ibb.co/nNP9bLFD/whyworkwithus.jpg" alt="" className="w-full h-120 rounded-2xl"/>
      </div>
      </div>
    </div>
  );
};

export default Why;
