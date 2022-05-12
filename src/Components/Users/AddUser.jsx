import "./AddUser.css"
import { useState, useEffect } from "react";
import axios from "axios"
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Redux/User/action";

export const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        fatherName: "",
        mobile: "",
        dateOfBirth: "",
        image: "",
        // preferredTenant: "",
        // bachelor: "",
        // married: "",
        // image: ""
    })

    const users = useSelector(store => store.user.user)
    const dispatch = useDispatch()
    console.log("users: in dum",users)
    useEffect(()=> {
        getUsers()
    },[])

    const handleChange = (e) => {
      console.log(e.target.value)
        const {className, value} = e.target;
        // ({...data,[e.target.name]:e.target.value})
        setUser({
            ...user,
            [className]:value,
        })
    }
    // const handleFile = (event) => {
      
    //     let img = event.target.files[0];
    //     setUser({
    //       ...user,
    //       image: URL.createObjectURL(img)
    //     });
      
    // }
    const handleImageChange =(e) => {

      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        setUser({
          ...user,
          image: reader.result
      });
      }
  
      reader.readAsDataURL(file)
    }

    const getUsers = () => {
        axios.get("http://localhost:8080/users").then((res) => {
            dispatch(addUser(res.data))
        })
    }

    const addUsers = (e) => {

        axios.post("http://localhost:8080/users", user).then(() => getUsers())

    }
    return (
      <div className="addUserContainer">
        <form onSubmit={addUsers}>
          <label>Name :</label> <br/>
          <input type="text" value = {user.name} onChange={handleChange} className="name" placeholder="Enter your name" required />
          <br />
          <label>Father Name :</label> <br/>
          <input value={user.fatherName} onChange={handleChange} type="text" className="fatherName"placeholder="Enter your Father's name" required />
          <br />
          <label>Mobile Number :</label> <br/>
          <input value={user.mobile} onChange={handleChange} type="number" className="mobile"placeholder="Enter your Mobile number" required />
          <br />
          <label>Date Of Birth :</label> <br/>
          <input value={user.dateOfBirth} onChange={handleChange} type="date" className="dateOfBirth"placeholder="date of birth" required />
          <br />
          <label >Upload your photo here :</label> <br/>
          <input  onChange={handleImageChange} type="file" className="image"  accept="image/png, image/jpeg, image/jpg" required />
          <br />
          <label>Set Password :</label> <br/>
          <input value={user.password} onChange={handleChange} type="password" className="password" placeholder="Enter password" required />
          <br />
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    );
  };
  