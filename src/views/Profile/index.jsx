import {Outlet, useLocation, useNavigate } from "react-router-dom";
import style from './profile.module.css'



const Profile = ()=>{

    const {pathname} = useLocation();
    const navigate = useNavigate();

    const handleTabClick = (path)=>{
        navigate(`/profile/${path}`)
    };

    console.log(pathname)
    return (
        <div className="profile">
            <div>
                <span 
                className={pathname.includes('my-info') ? style.active : ''}
                onClick={()=> handleTabClick('my-info')} 
                >
                    My información 
                </span>
                <span 
                className={pathname.includes('liked-events') ? style.active : ''}
                onClick={()=> handleTabClick('liked-events')} 
                >
                    Eventos Favoritos
                </span>
            </div>
            <Outlet></Outlet>
        </div>
    )
}


export default Profile;