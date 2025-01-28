import React, { useState } from 'react'
import { z } from "zod";
const loginSchema = z.object({
    email: z.string().email("Invaild Format"),
    password: z.string().min(6, "Password must be Greater than or equal to 6")
})

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({});
    const changeHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const result = loginSchema.safeParse(formData)
        if (!result.success) {
            const errorFiled = result.error.formErrors.fieldErrors;
            setError(errorFiled);
            return;
        }
        //api call here
        console.log(formData)
    };
  
    return (
        <div className='flex items-center justify-center w-full h-[80vh] bg-[#f0f0f0f0] '>
            <form onSubmit={submitHandler} className='flex flex-col gap-10 bg-white px-10 py-14 rounded-lg shadow w-[40%]'>
                <div className='flex flex-col'>
                    <input value={formData.email} name="email" onChange={changeHandle} className='border border-gray-300 px-2 py-1 rounded-lg'  placeholder='123@gmail.com' />
                    <span className="text-xs text-red-600">{error && error.email}</span>
                </div>
                <div className='flex flex-col'>
                    <input value={formData.password} name="password" onChange={changeHandle} className="border border-gray-300 px-2 py-1 rounded-lg" type='password' placeholder='password' />
                    <span className="text-xs text-red-600">{error && error.password}</span>
                </div>

                <button className='bg-purple-600 text-white rounded-md py-2'>Submit</button>
            </form>

        </div>
    )
}

export default Login;
