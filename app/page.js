
"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", user)
      if (response) {
        toast.success("User Login  successfully");
        router.push("/userForm");
      }
    } catch (error) {
      console.log(error)
      toast.error("Invalid Email or Password");

    }
    setUser({
      email: "",
      password: "",
    })

  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Login Page
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={submithandler}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={changeHandler}
                    value={user.email}
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={changeHandler}
                    value={user.password}
                    name="password"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Login
                </button>
                <div className="flex justify-between">
                  <Link href={"/signup"} className="mr-3">
                    Register
                  </Link>
                  <Link href={"/ForgotPassword"}>Forgotpassword</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;