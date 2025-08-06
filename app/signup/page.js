import { ConnectDB } from '@/lib/config/db'
import UserModel from '@/lib/config/models/UserModel'
import { hash } from 'bcryptjs'
import { redirect } from 'next/navigation';
import Link from 'next/link'
import React from 'react'
import { signIn } from '@/auth';

const SignUp = () => {

    const handleSubmit = async (formData) => {
        "use server";

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        // Input validation
        if (!name || !email || !password) {
            throw new Error("Please provide all fields");
        }

        await ConnectDB();

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            throw new Error("User already exists");
        }

        const hashedPassword = await hash(password, 10);

        // Create new user
        await UserModel.create({
            name,
            email,
            password: hashedPassword,
        });

        redirect("/login");
    };

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <form className='border border-gray-300 p-5 rounded-md'
                action={handleSubmit}
            >
                <h1 className='font-medium text-2xl mb-5'>Sign Up</h1>
                <input className='p-2 border border-gray-300 mb-5 rounded-md w-[100%]' name="name" type="text" placeholder='Name' />
                <br />
                <input className='p-2 border border-gray-300 mb-5 rounded-md w-[100%]' name="email" type="email" placeholder='Email' />
                <br />
                <input className='p-2 border border-gray-300 mb-5 rounded-md w-[100%]' name="password" type="password" placeholder='Password' />
                <br />
                <button type='submit' className='py-2 px-2 bg-black text-white w-[100%] border rounded-md cursor-pointer'>Sign Up</button>
                <p className='text-center'>Or</p>
                {/* <form action={async () => {
                    "use server"
                    await signIn("google")
                }}>
                    <button type='submit' className='py-2 px-2 font-bold bg-white text-black w-[100%] border rounded-md cursor-pointer'>Sign In With Google</button>
                </form> */}
                <Link href="/login" className='text-center inline-block mt-2'>Already have an account? <span className='text-blue-600 font-bold'>Sign In</span></Link>
            </form>
        </div>
    )
}

export default SignUp