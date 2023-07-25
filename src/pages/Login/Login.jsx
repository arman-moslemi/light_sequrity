import React, {useState} from "react";
import Eye from "../../assets/icon/eye";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/icon/logo.svg"
import Cookies from 'universal-cookie';
import {apiUrl} from "../../commons/inFormTypes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {axiosReq} from "../../commons/axiosReq";

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
      const handleClick = event => {

        setIsShown(!isShown);
    
    
      };
      let navigate = useNavigate();

      const login=async()=>{
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
  
      setSnipper(true)
      axios
      .post(apiUrl + "Users/Login",{
        username:user,
        password:pass,
        grant_Type:"password"
      })
    .then(function (response) {
 
    
    if (response.request.status == 200) {
      const cookies = new Cookies();
    cookies.set('token',response.data.accessToken, { path: '/' })
   getUser()

    setSnipper(false)
   navigate("/")
    }
    else{
      alert(123)
      handleClick()
      setSnipper(false)
    
    }})
    .catch(function (error) {
    console.log(error);
    handleClick()

    setSnipper(false)
    
    });
    
    
      
    
      }}

      const getUser=async()=>{
        const user = await axiosReq("Users/Profile");
        // console.log(555)
        // console.log(user)
        const cookies = new Cookies();
        cookies.set('ID',user.agency?.agencyId, { path: '/' })
        cookies.set('Name',user.agency?.name, { path: '/' })
return user;
      }
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
                        {
                          erUser?
<p>Please fill username</p>
                          :
                          null
                        }

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
                                 {
                          erPass?
<p>Please fill password</p>
                          :
                          null
                        }
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
                    {isShown ?
   <>
   <div
   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
 >
   <div className="relative w-[30%] my-5 mx-auto max-w-5xl">
    
     <div className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full p-6 bg-white outline-none focus:outline-none">
  
       <div className="flex items-centers justify-left  rounded-t border-b border-b-borderGray pb-2">
         
         
         <span className="mr-3 text-base font-bold font-IRsans text-black text-left">
        Notice
         </span>
      
       </div>
       
       <div className="relative flex-auto">
         <p className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
         Username or Password is incorrect !
         </p>
       </div>
       <div className="flex items-center justify-end  border-solid border-slate-200 rounded-b">
                      <button
                        className="text-white bg-green hover:shadow-greenShadow hover:bg-green shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold  px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleClick()}
                      >
                       Ok
                      </button>
                   
                    </div>
     </div>
   </div>
 </div>
 <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
 
  </>
  :
  null

      }
                </div>
            </div>
        </div>
    )
}

export default Login;