// import Image from 'next/image';
// import Link from 'next/link';
"use client"    
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { UserAuth } from "@context/AuthContext";

export default function RegisterPage() {
	const { logOut, user, router } = UserAuth();

    const handleLogOut = async () => {
        try {
            await logOut();
            router.push("/login");
            
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
            <h1>HELLO, I'M THE DASHBOARD</h1>
            <button
                onClick={handleLogOut}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                sign Out
            </button>
        </>
    );
}
