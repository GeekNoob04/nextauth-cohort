"use client";

import { signIn, signOut } from "next-auth/react";

export const Appbar = () => {
    return (
        <div className="p-4 m-4 text-stone-200 flex justify-center items-center">
            <button
                className="border gap-2 p-2 m-2"
                onClick={() => {
                    signIn();
                }}
            >
                Sign in
            </button>
            <button
                className="border gap-2 p-2 m-2"
                onClick={() => {
                    signOut();
                }}
            >
                Logout
            </button>
        </div>
    );
};
