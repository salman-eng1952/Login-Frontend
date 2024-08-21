"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/createUser",user)
      toast.success("User created successfully!")
      router.push("/")
    } catch (error) {
      console.log("Error",error)
    }
    setuser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }) 
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Create User
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={submithandler}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    firstName
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    onChange={changeHandler}
                    value={user.firstName}
                    name="firstName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    lastName
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={changeHandler}
                    value={user.lastName}
                    name="lastName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
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
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    onChange={changeHandler}
                    value={user.password}
                    name="password"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.458 12C3.732 7.943 7.71 5 12 5c4.29 0 8.268 2.943 9.542 7-1.274 4.057-5.252 7-9.542 7-4.29 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.025 10.025 0 0 1 12 19c-4.29 0-8.268-2.943-9.542-7a10.04 10.04 0 0 1 2.485-4.347M14.121 14.121a3 3 0 1 1-4.242-4.242M10.59 10.59L8.53 8.53M9.757 9.757L5 5m0 0h.01M5 5l-.01-.01M12 5c1.308 0 2.577.253 3.74.71m2.48 1.48A9.96 9.96 0 0 1 21.542 12c-1.274 4.057-5.252 7-9.542 7-.896 0-1.77-.128-2.605-.367"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Register
                </button>
                <Link href={"/"}>Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}