import {useState} from 'react';
import './Login.scss'
import {useNavigate} from "react-router";


const Login = () => {

    const  navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [ password , setPassword ] = useState("")

    const login = (e) => {
      e.preventDefault()
        const item ={
          userName: userName,
          password:password
        }
        localStorage.setItem("token", JSON.stringify(item))

        navigate("/category")
    }



    return (
        <div className='login'>
            <div className="container">
                <div className='login__box'>
                    <h1>Login...</h1>
                    <form className='login__form' onSubmit={login}>
                        <input type="text" placeholder='user name' onChange={(e) => setUserName(e.target.value)} required/>
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value) } required/>
                        <button>Submit</button>
                    </form>
                </div>

            </div>


        </div>
    );
};

export default Login;