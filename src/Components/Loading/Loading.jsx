const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1 className="font-semibold text-center text-2xl ">Loading Data...</h1>
        <p className="text-center">
          <span className="loading loading-bars loading-lg"></span>
        </p>
      </div>
    </div>
  );
};

export default Loading;
