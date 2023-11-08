import error from "../../../public/error.png";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <img src={error} alt="Loading Image..." />
        </div>
    );
};

export default ErrorPage;