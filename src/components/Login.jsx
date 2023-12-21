import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Incomplete Details");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z0-9@]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, one number, and no special characters except @."
      );
      return;
    }
    alert("Successfully Loged In, See Console for Details");
    console.log("Logged in with:", { email, password });
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img
                className="w-full h-30 m-1 rounded-lg"
                src="data:image/png;base64,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"
                alt="logo"
              />
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    className="bg-gray-50 border border-gray-300 m-1 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                  />
                </div>
                <div className="flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 m-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                  <button
                    className="text-gray-400 text-s flex-1"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <button
                  type="button"
                  className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className="w-full underline text-sm font-light text-gray-500 dark:text-gray-400 m-1">
                  Forgot Password?{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
