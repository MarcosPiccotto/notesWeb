import Image from 'next/image';
import { Auth } from "@/components/Auth";


export default function RegisterPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-900">
			<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<Image
						className="mx-auto w-auto"
						src="/imgs/logo/3.2.png"
						alt="Your Company"
						width={250}
						height={150}
					/>
					<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Create your account
					</h2>
					<Auth />
				</div>
				<p className="mt-10 text-center text-sm text-gray-500">
					Made of{" "}
					<a
						href="https://github.com/MarcosPiccotto"
						className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
					>
						Marcos Piccotto
					</a>
				</p>
			</div>
		</div>
	);
}
