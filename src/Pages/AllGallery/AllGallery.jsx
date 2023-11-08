const AllGallery = () => {
  return (
    <div>
      <div className="h-[50vh] lg:h-screen w-full bg-[url('https://fivestar.qodeinteractive.com/wp-content/uploads/2017/05/About-us-title-img.jpg')] bg-no-repeat bg-center bg-cover mb-20">
        <div className="h-full bg-black/40 w-full flex items-center justify-center">
          <div>
            <h1 className="lg:text-2xl text-lg text-center text-f-color mb-3">
              Welcome to FiveStar
            </h1>
            <h1
              style={{ letterSpacing: "5px" }}
              className="text-2xl text-center md:text-5xl font-bold uppercase text-white"
            >
             Gallery
            </h1>
            <hr className="lg:my-8 md:my-4  w-32 mx-auto border border-f-color" />
          </div>
        </div>
      </div>
      <div className="container mb-20 mx-auto px-5">
        <div className="grid grid-cols-4">
          <div className="bg-black">
            <img
              className="hover:opacity-70"
              src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-1.jpg"
              alt="Loading Image"
            />
          </div>
          <div className="bg-black">
            <img
              className="hover:opacity-70"
              src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-2.jpg"
            />
          </div>
          <div className="bg-black">
            <img
              className="hover:opacity-70"
              src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-3.jpg"
            />
          </div>
          <div className="bg-black">
            <img
              className="hover:opacity-70"
              src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-1.jpg"
            />
          </div>
          <div className="bg-black">
            <img
              className="hover:opacity-70"
              src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-2.jpg"
            />
          </div>
          <div className="bg-black">
            <img
              className="hover:opacity-70"
              src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-1.jpg"
              alt="Loading Image"
            />
          </div>
          <div className="bg-black">
            <img
              className="hover:opacity-70"
              src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-2.jpg"
            />
          </div>
          <div className="bg-black">
            <img
              className="hover:opacity-70"
              src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGallery;
