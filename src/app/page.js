import Image from 'next/image';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <Image
          className="mx-auto w-auto"
          src="/imgs/logo/3.2.png"
          alt="Notes Web"
          width={250}
          height={150}
        />
        <h1 className="mt-6 text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Notes Web
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to Notes Web, your personal note-taking application. Manage your notes efficiently and securely.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link className="flex w-full max-w-xs justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="/login">
            Sign In
          </Link>
          <Link className="flex w-full max-w-xs justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
