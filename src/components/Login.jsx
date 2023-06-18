// import React, { useState } from "react";
// import { account } from "../appwrite/appwriteConfig";
// import { useNavigate, Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// function Login() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     email: " ",
//     password: " ",
//   });
//   const loginUser = async (e) => {
//     e.preventDefault();
//     console.log(user);
//     try {
//       const loggedUser= await account.createEmailSession(user.email, user.password);
//       navigate("/profile");
//       console.log(loggedUser);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleEmail = (e) => {
//     setUser({ ...user, email: e.target.value });
//   };

//   const handlePassword = (e) => {
//     setUser({ ...user, password: e.target.value });
//   };
//   return (
//     <section className="loginSignupBackground">
//       <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
//         <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
//           <div className="flex justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               version="1.1"
//               viewBox="0 0 673 371"
//               width="100"
//               height="100"
//             >
//               <path
//                 fill="#754220"
//                 d="   M 387.18 113.21   C 370.24 107.29 348.52 106.33 331.76 113.36   C 312.10 121.60 301.02 139.45 296.96 159.98   C 289.86 195.84 292.78 251.66 331.87 270.24   C 349.13 278.45 369.92 278.36 388.05 272.44   A 1.15 1.13 -5.0 0 0 388.83 271.52   L 393.93 234.82   A 0.96 0.93 -85.2 0 1 394.88 233.99   L 409.18 234.39   A 0.53 0.51 -89.4 0 1 409.68 234.92   L 409.65 283.82   A 0.75 0.74 -11.2 0 1 409.18 284.51   C 350.67 308.44 273.04 295.36 257.14 224.20   C 245.15 170.49 266.71 109.08 324.27 93.30   C 351.90 85.72 383.37 89.63 409.47 100.15   A 1.34 1.32 12.7 0 1 410.30 101.45   L 407.91 147.77   A 1.03 1.00 0.6 0 1 406.92 148.72   L 393.98 149.07   A 1.31 1.28 -4.1 0 1 392.65 147.95   L 388.70 115.11   A 2.30 2.29 -83.9 0 0 387.18 113.21   Z"
//               />
//               <path
//                 fill="#754220"
//                 d="   M 83.55 274.29   L 104.88 278.59   A 0.62 0.61 5.8 0 1 105.38 279.19   L 105.45 290.96   A 0.56 0.54 -0.0 0 1 104.89 291.50   L 39.58 291.50   A 0.55 0.54 0.0 0 1 39.03 290.96   L 39.02 279.66   A 0.87 0.85 -5.8 0 1 39.72 278.82   L 61.24 274.42   A 0.62 0.60 84.2 0 0 61.72 273.82   L 61.74 124.01   Q 61.74 121.87 60.59 120.28   L 50.12 105.77   Q 48.80 103.94 48.83 102.33   L 48.98 94.07   A 0.94 0.87 -0.4 0 1 49.89 93.22   L 84.18 92.31   A 0.96 0.90 70.1 0 1 84.97 92.71   Q 130.30 153.98 175.65 215.19   C 179.72 220.69 183.67 226.95 187.66 232.64   Q 189.65 235.47 189.49 232.02   C 187.70 191.99 188.22 151.90 188.26 111.92   A 0.99 0.97 7.3 0 0 187.52 110.98   L 170.74 106.50   A 1.00 0.97 -82.9 0 1 170.02 105.54   L 170.00 93.98   A 0.71 0.70 -0.0 0 1 170.71 93.28   L 230.29 92.93   A 1.46 1.42 0.7 0 1 231.76 94.40   L 231.44 105.73   A 0.68 0.68 -4.9 0 1 230.90 106.37   L 210.65 110.58   A 1.76 1.71 -6.0 0 0 209.25 112.26   L 209.25 291.02   A 0.77 0.75 88.0 0 1 208.55 291.79   L 195.38 292.80   A 2.87 2.72 68.2 0 1 192.97 291.69   Q 146.44 231.67 100.36 171.91   Q 91.59 160.54 83.67 148.56   Q 82.49 146.78 82.50 148.91   L 83.06 273.70   A 0.62 0.62 5.3 0 0 83.55 274.29   Z"
//               />
//               <path
//                 fill="#754220"
//                 d="   M 500.73 275.51   L 520.73 278.67   A 0.60 0.59 -86.0 0 1 521.22 279.25   L 521.48 290.93   A 0.55 0.53 89.0 0 1 520.95 291.50   L 443.90 291.50   A 1.13 1.12 0.0 0 1 442.77 290.38   L 442.77 279.56   A 0.88 0.83 -5.9 0 1 443.48 278.74   L 459.83 275.43   A 0.86 0.83 84.2 0 0 460.49 274.59   L 460.48 110.42   A 0.62 0.61 -84.3 0 0 459.99 109.81   L 443.52 106.50   A 0.80 0.72 6.6 0 1 442.87 105.77   L 442.99 93.84   A 0.55 0.50 -0.6 0 1 443.53 93.34   Q 482.55 92.66 521.49 93.55   C 554.56 94.30 590.95 109.78 591.83 148.30   C 592.40 173.56 580.84 195.13 556.50 204.09   A 0.90 0.89 -26.8 0 0 556.06 205.42   Q 577.41 237.64 599.16 269.58   C 603.82 276.41 606.92 278.38 615.19 279.31   A 0.79 0.72 3.9 0 1 615.89 280.04   L 615.76 290.88   A 0.74 0.64 -8.5 0 1 615.22 291.51   C 595.63 297.34 572.33 294.99 560.56 276.20   Q 541.47 245.74 522.77 215.51   A 2.66 2.65 74.0 0 0 520.52 214.26   L 500.56 214.25   A 0.55 0.55 0.0 0 0 500.01 214.80   L 500.00 274.65   A 0.87 0.86 -85.8 0 0 500.73 275.51   Z   M 499.95 183.99   C 499.94 187.40 499.40 191.75 500.27 195.88   A 0.66 0.65 -3.9 0 0 500.88 196.40   C 512.79 197.12 527.01 195.59 536.53 188.79   C 549.08 179.84 553.93 162.82 552.10 148.00   C 550.09 131.67 540.80 118.61 524.68 113.86   C 517.46 111.73 508.45 111.57 500.49 111.77   A 0.52 0.52 -0.6 0 0 499.98 112.29   Q 500.06 148.12 499.95 183.99   Z"
//               />
//             </svg>
//           </div>
//           <h1 className="text-center text-2xl font-bold leading-tight text-black">
//             Sign in to your account
//           </h1>
//           <p className="mt-2 text-center text-sm text-gray-600 ">
//             Don&apos;t have an account?{" "}
//             <Link
//               to="/signup"
//               className="font-semibold text-cyan-700 transition-all duration-200 hover:underline"
//             >
//               Create a free account
//             </Link>
//           </p>
//           <form action="#" method="POST" className="mt-8">
//             <div className="space-y-5">
//               <div>
//                 <label
//                   htmlFor="email-login"
//                   className="text-base font-medium text-gray-900"
//                 >
//                   {" "}
//                   Email address{" "}
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                     type="email"
//                     id="email-login"
//                     placeholder="Email"
//                     autoComplete="email"
//                     required
//                     onClick={handleEmail}
//                     // onClick={(e) => {
//                     //   setUser({ ...user, email: e.target.value });
//                     // }}
//                   ></input>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label
//                     htmlFor="password"
//                     className="text-base font-medium text-gray-900"
//                   >
//                     {" "}
//                     Password{" "}
//                   </label>
//                   <Link to="/recoveryPw"
//                     className="text-sm font-semibold text-cyan-700  hover:underline"
//                   >
//                     {" "}
//                     Forgot password?{" "}
//                   </Link>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                     type="password"
//                     placeholder="Password"
//                     id="password"
//                     autoComplete="current-password"
//                     required
//                     onClick={handlePassword}
//                     // onClick={(e) => {
//                     //   setUser({ ...user, password: e.target.value });
//                     // }}
//                   ></input>
//                 </div>
//               </div>
//               <div>
//                 <button
//                   type="button"
//                   className="inline-flex w-full items-center justify-center rounded-md bg-yellow-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-yellow-950"
//                   onClick={loginUser}
//                 >
//                   Login <ArrowRight className="ml-2" size={16} />
//                 </button>
//               </div>
//             </div>
//           </form>
//           <div className="mt-3 space-y-3">
//             <button
//               type="button"
//               className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
//             >
//               <span className="mr-2 inline-block">
//                 <svg
//                   className="h-6 w-6 text-rose-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
//                 </svg>
//               </span>
//               Sign in with Google
//             </button>
//             <button
//               type="button"
//               className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
//             >
//               <span className="mr-2 inline-block">
//                 <svg
//                   className="h-6 w-6 text-[#2563EB]"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
//                 </svg>
//               </span>
//               Sign in with Facebook
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;



// BREAK: clean, short and sweet

import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: " ",
    password: " ",
  });
  const handleChange = (event) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };
  const loginUser = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const loggedUser= await account.createEmailSession(user.email, user.password);
      navigate("/profile");
      console.log(loggedUser);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleEmail = (e) => {
  //   setUser({ ...user, email: e.target.value });
  // };

  // const handlePassword = (e) => {
  //   setUser({ ...user, password: e.target.value });
  // };
  return (
    <section className="loginSignupBackground">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 673 371"
              width="100"
              height="100"
            >
              <path
                fill="#754220"
                d="   M 387.18 113.21   C 370.24 107.29 348.52 106.33 331.76 113.36   C 312.10 121.60 301.02 139.45 296.96 159.98   C 289.86 195.84 292.78 251.66 331.87 270.24   C 349.13 278.45 369.92 278.36 388.05 272.44   A 1.15 1.13 -5.0 0 0 388.83 271.52   L 393.93 234.82   A 0.96 0.93 -85.2 0 1 394.88 233.99   L 409.18 234.39   A 0.53 0.51 -89.4 0 1 409.68 234.92   L 409.65 283.82   A 0.75 0.74 -11.2 0 1 409.18 284.51   C 350.67 308.44 273.04 295.36 257.14 224.20   C 245.15 170.49 266.71 109.08 324.27 93.30   C 351.90 85.72 383.37 89.63 409.47 100.15   A 1.34 1.32 12.7 0 1 410.30 101.45   L 407.91 147.77   A 1.03 1.00 0.6 0 1 406.92 148.72   L 393.98 149.07   A 1.31 1.28 -4.1 0 1 392.65 147.95   L 388.70 115.11   A 2.30 2.29 -83.9 0 0 387.18 113.21   Z"
              />
              <path
                fill="#754220"
                d="   M 83.55 274.29   L 104.88 278.59   A 0.62 0.61 5.8 0 1 105.38 279.19   L 105.45 290.96   A 0.56 0.54 -0.0 0 1 104.89 291.50   L 39.58 291.50   A 0.55 0.54 0.0 0 1 39.03 290.96   L 39.02 279.66   A 0.87 0.85 -5.8 0 1 39.72 278.82   L 61.24 274.42   A 0.62 0.60 84.2 0 0 61.72 273.82   L 61.74 124.01   Q 61.74 121.87 60.59 120.28   L 50.12 105.77   Q 48.80 103.94 48.83 102.33   L 48.98 94.07   A 0.94 0.87 -0.4 0 1 49.89 93.22   L 84.18 92.31   A 0.96 0.90 70.1 0 1 84.97 92.71   Q 130.30 153.98 175.65 215.19   C 179.72 220.69 183.67 226.95 187.66 232.64   Q 189.65 235.47 189.49 232.02   C 187.70 191.99 188.22 151.90 188.26 111.92   A 0.99 0.97 7.3 0 0 187.52 110.98   L 170.74 106.50   A 1.00 0.97 -82.9 0 1 170.02 105.54   L 170.00 93.98   A 0.71 0.70 -0.0 0 1 170.71 93.28   L 230.29 92.93   A 1.46 1.42 0.7 0 1 231.76 94.40   L 231.44 105.73   A 0.68 0.68 -4.9 0 1 230.90 106.37   L 210.65 110.58   A 1.76 1.71 -6.0 0 0 209.25 112.26   L 209.25 291.02   A 0.77 0.75 88.0 0 1 208.55 291.79   L 195.38 292.80   A 2.87 2.72 68.2 0 1 192.97 291.69   Q 146.44 231.67 100.36 171.91   Q 91.59 160.54 83.67 148.56   Q 82.49 146.78 82.50 148.91   L 83.06 273.70   A 0.62 0.62 5.3 0 0 83.55 274.29   Z"
              />
              <path
                fill="#754220"
                d="   M 500.73 275.51   L 520.73 278.67   A 0.60 0.59 -86.0 0 1 521.22 279.25   L 521.48 290.93   A 0.55 0.53 89.0 0 1 520.95 291.50   L 443.90 291.50   A 1.13 1.12 0.0 0 1 442.77 290.38   L 442.77 279.56   A 0.88 0.83 -5.9 0 1 443.48 278.74   L 459.83 275.43   A 0.86 0.83 84.2 0 0 460.49 274.59   L 460.48 110.42   A 0.62 0.61 -84.3 0 0 459.99 109.81   L 443.52 106.50   A 0.80 0.72 6.6 0 1 442.87 105.77   L 442.99 93.84   A 0.55 0.50 -0.6 0 1 443.53 93.34   Q 482.55 92.66 521.49 93.55   C 554.56 94.30 590.95 109.78 591.83 148.30   C 592.40 173.56 580.84 195.13 556.50 204.09   A 0.90 0.89 -26.8 0 0 556.06 205.42   Q 577.41 237.64 599.16 269.58   C 603.82 276.41 606.92 278.38 615.19 279.31   A 0.79 0.72 3.9 0 1 615.89 280.04   L 615.76 290.88   A 0.74 0.64 -8.5 0 1 615.22 291.51   C 595.63 297.34 572.33 294.99 560.56 276.20   Q 541.47 245.74 522.77 215.51   A 2.66 2.65 74.0 0 0 520.52 214.26   L 500.56 214.25   A 0.55 0.55 0.0 0 0 500.01 214.80   L 500.00 274.65   A 0.87 0.86 -85.8 0 0 500.73 275.51   Z   M 499.95 183.99   C 499.94 187.40 499.40 191.75 500.27 195.88   A 0.66 0.65 -3.9 0 0 500.88 196.40   C 512.79 197.12 527.01 195.59 536.53 188.79   C 549.08 179.84 553.93 162.82 552.10 148.00   C 550.09 131.67 540.80 118.61 524.68 113.86   C 517.46 111.73 508.45 111.57 500.49 111.77   A 0.52 0.52 -0.6 0 0 499.98 112.29   Q 500.06 148.12 499.95 183.99   Z"
              />
            </svg>
          </div>
          <h1 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-cyan-700 transition-all duration-200 hover:underline"
            >
              Create a free account
            </Link>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email-login"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    id="email-login"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    // value={user.email}
                    required
                    onClick={handleChange}
                    // onClick={(e) => {
                    //   setUser({ ...user, email: e.target.value });
                    // }}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <Link to="/recoveryPw"
                    className="text-sm font-semibold text-cyan-700  hover:underline"
                  >
                    {" "}
                    Forgot password?{" "}
                  </Link>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    // value={user.password}
                    required
                    onClick={handleChange}
                    // onClick={(e) => {
                    //   setUser({ ...user, password: e.target.value });
                    // }}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-yellow-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-yellow-950"
                  onClick={loginUser}
                >
                  Login <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
