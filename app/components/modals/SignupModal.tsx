'use client';

import { useState } from "react";
import Modal from "./Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const signupModal = useSignupModal()
    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="your email address" type="email" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />

                <input placeholder="your passwored" type="password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                <input placeholder="repeat your passwored" type="password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error
                </div>

                <CustomButton 
                    label="Submit"
                    onClick={() => console.log("Test")}
                />
            </form>
        </>
    )

    return(
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign Up"
            content={content}
        />
    )
}

export default SignupModal