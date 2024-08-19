import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Welcome to Weather App
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Get the latest weather information for your desired location.
        </p>
        <Link href="/" className=" text-blue-300  transition duration-300">
          See Weather ➡️
        </Link>
      </div>
    </div>
  );
}
