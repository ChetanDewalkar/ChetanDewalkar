import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const signInToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className>
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>

      <form className="absolute top-24 bg-black left-[480px] w-3/12 px-9 py-12 text-white bg-opacity-60 rounded-lg">
        <h1 className="font-bold py-2 text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            className="my-2 p-2  w-full bg-gray-500 rounded-sm"
            type="text"
            placeholder="Full Name"
          ></input>
        )}

        <input
          className="my-2 p-2  w-full bg-gray-500 rounded-sm"
          type="text"
          placeholder="Email Id"
        ></input>

        <input
          className="my-2 p-2 w-full  bg-gray-500 rounded-sm"
          type="text"
          placeholder="Password"
        ></input>

        <button
          className="py-2 bg-red-600 w-full mt-2 rounded-lg font-semibold"
          type="submit"
          placeholder="Submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-xs opacity-60 mt-5">
          <span onClick={signInToggle} className="cursor-pointer font-bold">
            {isSignInForm
              ? "New to netflix Sign Up now."
              : "Already a user Sign In here."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
