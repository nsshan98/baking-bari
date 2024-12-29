import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-2xl font-medium text-gray-700 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-gray-500 mt-2">
          You might have the wrong address, or the page may have moved.
        </p>
        <div className="mt-6">
          <Link href="/">
            <p className="btn btn-primary">Go to Homepage</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
