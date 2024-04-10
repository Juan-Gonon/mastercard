import {Outlet} from "react-router-dom"


const Profile = ()=>{
    return (
        <div className="profile">
            Profile
            <Outlet></Outlet>
        </div>
    )
}


export default Profile;