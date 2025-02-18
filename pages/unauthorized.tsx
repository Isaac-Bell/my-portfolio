import Link from "next/link";

const Unauthorized = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-red-400">Access Denied</h1>
      <p className="text-gray-400 mt-2">You do not have permission to view this page.</p>

      <div className="flex flex-col w-full space-y-4 m-8 max-w-sm mx-auto">

      <Link href="/">
        <button className="w-full  bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
          Go Home
        </button>
      </Link>

      <Link href="login"> 
      <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
         Login 
        </button>
      </Link> 
      <Link href="login"> 
      <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
          Sign up
        </button>
      </Link> 
      </div>
    </div>
  );
};

export default Unauthorized;
