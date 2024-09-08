import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import {DataContext} from "../context/data-context"

function Users() {
    const userCTX  =  useContext(DataContext);
    
    console.log(userCTX)
    const {name} = useParams();
    useEffect(()=>{
        userCTX.setUserData(name)
    },[userCTX, name])
    return (
        <div>
            
            <h1>{userCTX.userData}</h1>
        </div>
    )
}

export default Users
