import React, { useState } from "react";
import { useAddUserMutation } from "../RTK/userApi";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const [user,setUser]=useState({})

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const [addUser] = useAddUserMutation();
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(user)
        await addUser(user);
        navigate('/')
    }






  return (
    <div>
      Create User:
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 w-[30%] mx-auto border px-4 py-8">
          <h2 className="text-center text-xl">Create User</h2>
          Name:
          <input
            type="text"
            name="name"
            className="border rounded-md p-1"
            onChange={handleChange}
            required
          />
          Email:
          <input
            type="email"
            name="email"
            className="border rounded-md p-1"
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            name=""
            className="bg-green-300 px-2 py-1 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
