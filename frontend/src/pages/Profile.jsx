import Navbar from "../components/Navbar";
import { getUsers, getUsersWeb3 } from '../api/api'
import { useEffect } from "react";

const Profile = () => {

    useEffect(() => {
        getUsersWeb3()
            .then(res => console.log("users", res))
            .catch(err => console.log(err))
        getUsers()
            .then(res => console.log("usersWeb3", res))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='gradient-bg-welcome min-h-screen w-full flex flex-col justify-start items-center text-center text-white'>
            
            <div>
                <h1>Profile</h1>
            </div>
        </div>
    );
}

export default Profile;