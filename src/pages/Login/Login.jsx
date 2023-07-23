import React, {useState} from "react";
import Eye from "../../assets/icon/eye";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/icon/logo.svg"


const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {

        setPasswordShown(!passwordShown);
      };
    return (
        // <div
        //     className="w-full h-screen bg-gradient-to-r from-[#008a5c] to-[#54df97] pt-24">
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
                        className="block appearance-none  w-full bg-white text-[#000] border border-borderGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>

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
                            placeholder="example@gmail.com"/>
                        <button onClick={togglePassword}>
                            <Eye/>
                        </button>
                    </div>
                    <Link to={'/'} className="pb-2 font-semibold text-[#000] text-sm border-b border-dashed border-green hover:text-green">
                        Forget Password?
                    </Link>
                    <button className="w-full h-[50px] rounded-lg shadow-grayShadow font-bold bg-gradient-to-r from-[#54df97] to-[#008a5c] text-white mt-5 hover:bg-green transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100  duration-500">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;