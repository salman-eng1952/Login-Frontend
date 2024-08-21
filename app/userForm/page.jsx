"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios"
import { toast } from "react-toastify";
export default function CreatedUser() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/getuser")
            .then(user => setUser(user.data.user))
            
        },[])

    const submithandler = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/login",user)
          toast.success("User Login successfully!")
          router.push("/userForm")
        } catch (error) {   
          console.log("Error",error)
        }
        setUser({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        })

    };
    return (
        <div className="overflow-x-auto">
            <table onSubmit={submithandler} className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">First Name</th>
                        <th className="py-2 px-4 border">Last Name</th>
                        <th className="py-2 px-4 border">Email</th>
                        {/* <th className="py-2 px-4 border">Password</th> */}
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td className="py-2 px-4 border">{row.firstname}</td>
                                <td className="py-2 px-4 border">{row.lastname}</td>
                                <td className="py-2 px-4 border">{row.email}</td>
                                {/* <td className="py-2 px-4 border">{row.password}</td> */}
                                <td className="py-2 px-4 border flex space-x-2">
                                    <Link href={`/UpdateUser/${row._id}`}>
                                        <button className="bg-blue-500  text-white px-5 py-1 rounded">
                                            Update
                                        </button>
                                    </Link>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded" >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}