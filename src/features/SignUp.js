// import '../../styles/style.css'
import { useNavigate } from "react-router-dom";
import { UserForm } from '../components/UserForm';

const SignUp = () =>{

    const navigate = useNavigate();

    const onSubmit = async(userData)=>{
        const res = await fetch(`http://localhost:8080/user/signup`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })

        const data = await res.json()
        if(res.status>=400){
            console.log("err")
        }
        localStorage.setItem("userToken",data.token)
        navigate("/shop")
    }


    return(
        <UserForm
      title="Please, Sign Up"
      onSubmit={onSubmit}
      submitCaption="Sign Up"/>

    )
}
export default SignUp