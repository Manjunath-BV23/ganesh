import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addUser } from "../../Redux/User/action"
import "./Users.css"

export const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((store => store.user.user))
    console.log("users",users)

    // useEffect(()=> {
    //     getUsers()
    // },[])

    // const getUsers = () => {
    //     axios.get("http://localhost:8080/users").then((res) => {
    //         dispatch(addUser(res.data))
    //     })
    // }

    return (
        <div className="usersDiv">
            {users.map((e) => (
                <div>
                    <img src={e.image} alt="img" />
                    <p>Id: <span>{e.id}</span></p>
                    <p>Name: <span>{e.name}</span></p>
                    <p>Mobile: <span>{e.mobile}</span></p>
                </div>
            ))}
        </div>
    )
}