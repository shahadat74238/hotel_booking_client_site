import { Helmet } from "react-helmet-async";
import contactImg from "../../assets/contact.svg";

const Contact = () => {
  return (
    <div className="">
      <Helmet>
        <title className="uppercase">Five Star | Contact</title>
      </Helmet>
      <div className="h-[50vh] lg:h-screen w-full bg-[url('https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover">
        <div className="h-full bg-black/60 w-full flex items-center justify-center">
          <div>
            <h1 className="lg:text-2xl text-lg text-center text-f-color mb-3">
              Welcome to FiveStar
            </h1>
            <h1
              style={{ letterSpacing: "5px" }}
              className="text-2xl text-center md:text-5xl font-bold uppercase text-white"
            >
              Contact US
            </h1>
            <hr className="lg:my-8 md:my-4 my-2 w-60 mx-auto border border-f-color" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 my-10 lg:my-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-[#f5f5f5] p-5">
            <h1 className="text-f-color uppercase font-bold text-lg">
              Send Message
            </h1>
            <form>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <textarea
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Type Your Message"
                />
              </div>
              <div className="mt-8">
                <button className="h-10 w-36 bg-f-color text-white font-semibold rounded hover:bg-white hover:text-f-color uppercase hover:border hover:border-f-color text-sm">
                  send
                </button>
              </div>
            </form>
          </div>
          <div className="lg:flex justify-end hidden">
            <img className="w-full h-96 " src={contactImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
