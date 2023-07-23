import React, {useState} from "react";
import Eye from "../../assets/icon/eye";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/icon/logo.svg"
import Cookies from 'universal-cookie';
import {apiUrl} from "../../commons/inFormTypes";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {

        setPasswordShown(!passwordShown);
      };
      const [user,setUser]=useState()
      const [erUser,setErUser]=useState(false)
      const [pass,setPass]=useState()
      const [erPass,setErPass]=useState(false)
      const [isShown, setIsShown] = useState(false);
      const [snipper, setSnipper] = useState(false);
      const login=()=>{
        if(!pass||!user){
            if(!pass){
              setErPass(true)
            }
            if(!user){
              setErUser(true)
            }
        }
        else{
          setErPass(false)
          setErUser(false)
        console.log(pass)
    // if(validateCaptcha(captcha)==false||!user || !pass){
    //   handleClick()
    // }
    // else{
      setSnipper(true)
      axios
      .post(apiUrl + "Users/Login",{
        username:user,
        password:pass,
        grant_Type:"password"
      })
    .then(function (response) {
      console.log(123456)
      console.log(response)
    
    if (response.request.status == 200) {
      const cookies = new Cookies();
    // cookies.set('token',response.data.token, { path: '/' })
    // cookies.set('ID',response.data.id, { path: '/' })
      // console.log(response.data.token)
    setSnipper(false)
   
    }
    else{
    //   handleClick()
      setSnipper(false)
    
    }})
    .catch(function (error) {
    console.log(error);
    setSnipper(false)
    
    });
    
    
    //   }
    
      }}
    return (
                  <div
            className="w-full h-screen bg-[#f4f4f4] pt-24">
                <Logo className="w-[80px] h-auto block mx-auto"/>
                <div className="w-[30%] block mx-auto bg-white rounded-2xl h-max shadow-object my-10 p-6">
                <span className="font-bold text-[#000] text-2xl text-center block mx-auto">
                    Login
                </span>
                <div class="w-full  px-3 mt-6">
                    <label
                        class="block  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        Email Address
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="example@gmail.com"
                        className="block appearance-none  w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        onChange={(e)=>setUser(e.target.value)}
                        />

                </div>
                <div class="w-full  px-3 mt-6">
                    <label
                        class="block  tracking-wide text-[#000] text-xs font-bold mb-2"
                        for="title">
                        Password
                    </label>
                    <div
                        className="flex appearance-none  w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <input
                            className="w-[95%] bg-white text-[#000] leading-tight focus:outline-none focus:bg-white focus-visible:outline-none"
                            id="title"
                            type={passwordShown ? "text" : "password"}
                            placeholder="example@gmail.com"
                            onChange={(e)=>setPass(e.target.value)}

                            />
                        <button onClick={togglePassword}>
                            <Eye/>
                        </button>
                    </div>
                    <Link to={'/'} className="pb-2 font-semibold text-[#000] text-sm border-b border-dashed border-green hover:text-green">
                        Forget Password?
                    </Link>
                    <button onClick={()=>login()} className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-gradient-to-r from-[#54df97] to-[#008a5c] text-white mt-5 hover:bg-green transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;