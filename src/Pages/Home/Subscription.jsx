import toast from "react-hot-toast";

const Subscription = () => {

    const handleSubscription =(e) =>{
        e.preventDefault();
        toast.success("Subscribed successfull!")
    };

  return (
    <div>
      <form onSubmit={handleSubscription}>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <div className="relative">
            <input
              type="email"
              required
              placeholder="Enter Your Email Address"
              className="outline-none w-96 h-12 rounded-md pl-5 pr-16"
            />
            <button className="s-btn h-full w-24 absolute top-0 right-0 rounded-r-md">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Subscription;
