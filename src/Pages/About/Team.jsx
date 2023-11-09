const Team = () => {
  return (
    <div className="my-10 md:my-20 container mx-auto px-5 grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-20 grid-cols-1">
      <div className="">
        <div className="flex justify-center">
          <div>
            <img
              className="rounded-full object-cover h-52 w-52"
              src="https://media.licdn.com/dms/image/D5603AQFB-TDGjbkEWQ/profile-displayphoto-shrink_800_800/0/1670449340633?e=2147483647&v=beta&t=s5szD0qTShTYkrfGemW0zWWFZnidWKSPBRiguf2THe4"
              alt=""
            />
          </div>
        </div>
        <div className="text-center px-5">
          <h1 className="text-2xl font-semibold mb-2 ">Elena Evergreen</h1>
          <p className="text-lg font-medium">CEO</p>
          <hr className=" my-3 w-24 mx-auto border border-f-color" />
          <p className="">
            Passionate eco-warrior ensuring Lumina Luxes commitment to
            sustainable practices, harmonizing opulence with environmental
            responsibility.
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center">
          <div>
            <img
              className="rounded-full object-cover h-52 w-52"
              src="https://media.istockphoto.com/id/1401557224/photo/confident-businesswoman-in-modern-office.webp?b=1&s=170667a&w=0&k=20&c=Fpkcc3TzSAaHV2d7iuAuKeS0zBDbAczzPPtfFUBc0Qg="
              alt=""
            />
          </div>
        </div>
        <div className="text-center px-5">
          <h1 className="text-2xl font-semibold mb-2 ">Maximilian Nexus</h1>
          <p className="text-lg font-medium">Sustainability Director</p>
          <hr className=" my-3 w-24 mx-auto border border-f-color" />
          <p className="">
            Tech maestro driving Lumina Luxes evolution, infusing the hotel with
            the latest advancements for a seamless fusion of luxury and
            technology.
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center">
          <div>
            <img
              className="rounded-full object-cover h-52 w-52"
              src="https://i.insider.com/5d2f66d79e07552f4a1b3aa3?width=600&format=jpeg&auto=webp"
              alt=""
            />
          </div>
        </div>
        <div className="text-center px-5">
          <h1 className="text-2xl font-semibold mb-2 ">Sophia Stellaris</h1>
          <p className="text-lg font-medium">Tech Innovation Manager</p>
          <hr className=" my-3 w-24 mx-auto border border-f-color" />
          <p className="">
            Visionary leader steering Lumina Luxe to new heights, seamlessly
            blending luxury with cutting-edge technology for an unparalleled
            guest experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
