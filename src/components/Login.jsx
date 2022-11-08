import React from "react";
import MainSide from "../misc/MainSide";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeField, setActiveField] = useState("");

  const login = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <div className="flex h-screen">
          <MainSide />
          <div className="mt-20 ml-20">
            <div>
              <h1 className="text-4xl font-bold">Welcome Back!</h1>
              <p className="opacity-50 mt-2 text-xs">
                Please Enter your details
              </p>
            </div>
            <form className="mt-8">
              <div>
                <label
                  htmlFor="email"
                  className={`text-xs block mb-1 ${
                    activeField === "email" && "text-[#6360AB]"
                  }`}
                >
                  Email Address
                </label>
                <input
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField("")}
                  className={`w-full border focus:border-[#6360AB] focus:border-2 rounded-[4px] py-1 pl-2 pr-10 outline-none `}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                />
              </div>
              <div className="mt-4 mb-2">
                <label
                  htmlFor="password"
                  className={`text-xs ${
                    activeField === "password" && "text-[#6360AB]"
                  }`}
                >
                  Password
                </label>
                <div className="relative flex">
                  <input
                    onFocus={() => setActiveField("password")}
                    onBlur={() => setActiveField("")}
                    className={`w-full border focus:border-[#6360AB] focus:border-2 rounded-[4px] py-1 pl-2 pr-10 outline-none `}
                    type={showPwd ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute right-4  h-full flex  items-center">
                    {showPwd ? (
                      <AiOutlineEye onClick={() => setShowPwd(!showPwd)} />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={() => setShowPwd(!showPwd)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex text-xs justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="Remember me"
                    id="Remember me"
                    value="Remember me"
                  />
                  <label className="ml-1 text-[#32324D]" htmlFor="Remember me">
                    Remember me
                  </label>
                </div>
                <p className="text-[#6360AB]">Forgot Password?</p>
              </div>
              <input
                className="w-full rounded-md mx-auto py-2 bg-[#6360AB] text-white mt-6"
                type="submit"
                name="login"
                id="login"
                value="Login"
                onClick={login}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
