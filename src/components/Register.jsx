import React, { useState } from "react";
import MainSide from "../misc/MainSide";

const Register = () => {
  const [activeField, setActiveField] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex h-screen ">
        <MainSide />
        <div className="mt-20 ml-20  ">
          <div>
            <h1 className="text-4xl font-bold">Begin your journey</h1>
            <p className="opacity-50 mt-2 text-xs">
              Get started with the best platform for design{" "}
            </p>
          </div>
          <form className="mt-8">
            <div className="my-4 flex w-full justify-between">
              <div>
                <label
                  className={`text-xs block mb-1 ${
                    activeField === "first-name" && "text-[#6360AB]"
                  }`}
                  htmlFor="firstName"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  onFocus={() => setActiveField("first-name")}
                  onBlur={() => setActiveField("")}
                  className={`w-full border focus:border-[#6360AB] focus:border-2 rounded-[4px] py-1 pl-2 pr-10 outline-none `}
                />
              </div>
              <div className="ml-4">
                <label
                  className={`text-xs block mb-1 ${
                    activeField === "last-name" && "text-[#6360AB]"
                  }`}
                  htmlFor="lastName"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  onFocus={() => setActiveField("last-name")}
                  onBlur={() => setActiveField("")}
                  className={`w-full border focus:border-[#6360AB] focus:border-2 rounded-[4px] py-1 pl-2 pr-10 outline-none `}
                />
              </div>
            </div>
            <div className="flex ">
              <div>
                <label
                  htmlFor="email"
                  className={`text-xs block mb-1 ${
                    activeField === "email" && "text-[#6360AB]"
                  }`}
                >
                  Email Address*
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
              <div className="ml-4">
                <label
                  htmlFor="phone"
                  className={`text-xs block mb-1 ${
                    activeField === "email" && "text-[#6360AB]"
                  }`}
                >
                  Phone Number*
                </label>
                <input
                  onFocus={() => setActiveField("phNum")}
                  onBlur={() => setActiveField("")}
                  className={`w-full border focus:border-[#6360AB] focus:border-2 rounded-[4px] py-1 pl-2 pr-10 outline-none `}
                  type="tel"
                  name="phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="phone"
                />
              </div>
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
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex text-xs items-center">
              <input
                type="checkbox"
                name="Remember me"
                id="Remember me"
                value="Remember me"
              />
              <label className="ml-1 text-[#32324D]" htmlFor="Remember me">
                By signing up, you agree to our{" "}
                <span className="text-[#6360AB]">
                  {" "}
                  User Agreement, Terms of Service, & Privacy Policy
                </span>
              </label>
            </div>
            <input
              className="w-1/2 rounded-md mx-auto py-2 bg-[#6360AB] text-white mt-6"
              type="submit"
              name="login"
              id="login"
              value="Login"
              onClick={register}
            />
          </form>
          <div>
            <p className="text-[#32324D]">Already have an account?</p>
            <p className="text-[#6360AB]">Log In</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
