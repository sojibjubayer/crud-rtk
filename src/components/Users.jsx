import React from 'react';
import { useDeleteUserMutation, useGetUsersQuery } from '../RTK/userApi';
import { Link } from 'react-router-dom';

const Users = () => {
    const { data: users, isLoading, isError, isSuccess, error } = useGetUsersQuery();
    const [deleteUser] =  useDeleteUserMutation()

    if (isLoading) {
        return <h3 className="text-center text-xl font-semibold text-gray-600">Loading...</h3>;
    }

    if (isError) {
        return (
            <div className="text-center text-xl font-semibold text-red-600">
                <h3>Something went wrong</h3>
                <p>{error.message || 'Please try again later.'}</p>
            </div>
        );
    }

    if (isSuccess && users.length === 0) {
        return <h3 className="text-center text-xl font-semibold text-gray-600">No users found.</h3>;
    }

    return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {isSuccess && 
                users?.map((user) => (
                    <div key={user.id} className="border p-4 m-2 rounded-lg shadow-md w-80">
                        <h4 className="text-lg font-bold text-gray-800">{user.name}</h4>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <div className='flex gap-10'>
                            <button className='bg-green-300 px-2 rounded-md mt-4 mb-2'>
                                <Link to={`/edit/${user.id}`}>edit</Link>
                                </button>
                            <button className='bg-red-300 px-2 rounded-md mt-4 mb-2
                            ' onClick={()=>deleteUser(user.id)}>
                                delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;
