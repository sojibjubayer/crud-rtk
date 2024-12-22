import React, { useEffect, useState } from "react";
import { useAddUserMutation, useGetUserQuery, useUpdateUserMutation } from "../RTK/userApi";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const {id} = useParams();
    const [user,setUser]=useState({
        id:id,
        name:'',
        email:''
    })
    const {data}=useGetUserQuery(id)

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        if(data){
            setUser({...user, name:data.name, email:data.email})
        }
        
    },[data,id])
    const navigate = useNavigate()
    const [updateUser] = useUpdateUserMutation()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(user)
        await updateUser(user);
        navigate('/')
    }



  return (
    <div>
      Create User:
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 w-[30%] mx-auto border px-4 py-8">
          <h2 className="text-center text-xl">Edit User</h2>
          Name:
          <input
            type="text"
            name="name"
            value={user?.name}
            className="border rounded-md p-1"
            onChange={handleChange}
            required
          />
          Email:
          <input
            type="email"
            name="email"
            value={user?.email}
            className="border rounded-md p-1"
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            name=""
            
            value="update"
            className="bg-green-300 px-2 py-1 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
