"use client"; // This is a client component 👈🏽

import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const signIn = async () => {
		if (password.length < 6) {
			setError("Password must be at least 6 characters long.");
			return;
		}

		try {
			console.log("trying to sign in with email and password");
			await createUserWithEmailAndPassword(auth, email, password);
			setError(""); // Clear error if sign-in is successful
		} catch (err) {
			if (err.code === 'auth/invalid-email') {
				setError("The email address is not valid.");
			} else if (err.code === 'auth/email-already-in-use') {
				setError("The email address is already in use.");
			} else {
				setError("An error occurred. Please try again.");
			}
			console.error(err);
		}
	};

	const signInWithGoogle = async () => {
		try {
			console.log("trying to sign in with google");
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
			<div>
				<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
					Email address
				</label>
				<div className="mt-2">
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id="email"
						name="email"
						type="email"
						placeholder="correo@gmail.com"
						autoComplete="email"
						required
						className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div className="flex items-center justify-between">
					<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
						Password
					</label>
					<div className="text-sm">
						<a href="/resetear" className="font-semibold text-indigo-600 hover:text-indigo-500">
							Forgot password?
						</a>
					</div>
				</div>
				<div className="mt-2">
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						id="password"
						name="password"
						type="password"
						autoComplete="current-password"
						required
						placeholder="********"
						className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<br />
			<div>
				<button
					onClick={signIn}
					type="submit"
					className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Sign in
				</button>
				<br />
				<button
					className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					onClick={signInWithGoogle}
				>
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
						<path
							fill="#FFC107"
							d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
						></path>
						<path
							fill="#FF3D00"
							d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
						></path>
						<path
							fill="#4CAF50"
							d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
						></path>
						<path
							fill="#1976D2"
							d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
						></path>
					</svg>
					Sign in with Google
				</button>
			</div>
			{error && <div className="text-red-600 text-sm mt-2">{error}</div>}
		</div>
	);
};
