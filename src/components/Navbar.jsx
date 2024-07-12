// import React, { useEffect, useState } from "react";
// import logo from "../assets/logo.png";
// import { Link } from "react-scroll";
// import { FaXmark, FaBars } from "react-icons/fa6";
// import useTheme from "../contexts/theme";

// function ThemeBtn() {
//   const { themeMode, lightTheme, darkTheme } = useTheme();

//   // Function to handle the theme change based on checkbox state
//   const onChangeBtn = (e) => {
//     if (e.currentTarget.checked) darkTheme();
//     else lightTheme();
//   };

//   return (
//     <label className="relative inline-flex items-center cursor-pointer">
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         onChange={onChangeBtn}
//         checked={themeMode === "dark"} // Checked when the theme mode is dark
//       />
//       <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//     </label>
//   );
// }

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   // Toggle menu open state
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Handle scroll event to toggle sticky class
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) setIsSticky(true);
//       else setIsSticky(false);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItems = [
//     { link: "Home", path: "home" },
//     { link: "Service", path: "service" },
//     { link: "About", path: "about" },
//     { link: "Product", path: "product" },
//     { link: "Testimonials", path: "testimonials" },
//     { link: "FAQ", path: "faq" },
//   ];

//   return (
//     <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 dark:bg-neutralDGrey">
//       <nav
//         className={`py-4 lg:px-14 px-4 ${
//           isSticky
//             ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
//             : ""
//         }`}
//       >
//         <div className="flex justify-between items-center text-base gap-8">
//           <a
//             href=""
//             className="text-2xl font-semibold flex items-center space-x-3 "
//           >
//             <img
//               src={logo}
//               alt="companyLogo"
//               className="w-10 inline-block items-center"
//             />
//             <span className="text-[#263238]">NEXCENT</span>
//           </a>

//           {/* navItems for large devices */}
//           <ul className="md:flex space-x-12 hidden">
//             {navItems.map(({ link, path }) => (
//               <Link
//                 to={path}
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 key={path}
//                 className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
//               >
//                 {link}
//               </Link>
//             ))}
//           </ul>

//           {/* btn for large devices */}
//           <div className="space-x-12 hidden lg:flex items-center">
//             <a
//               href="/"
//               className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
//             >
//               Login
//             </a>
//             <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey ">
//               Sign Up
//             </button>
//             <ThemeBtn />
//           </div>

//           {/* mobileMenu */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-neutralDGrey focus:outline-none focus:text-gray-500"
//             >
//               {isMenuOpen ? (
//                 <FaXmark className="h-6 w-6 " />
//               ) : (
//                 <FaBars className="h-6 w-6 " />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* navItems for mobile */}
//         <div
//           className={`space-y-4 px-4 py-7 mt-16 bg-brandPrimary ${
//             isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
//           }`}
//         >
//           {navItems.map(({ link, path }) => (
//             <Link
//               key={path}
//               spy={true}
//               smooth={true}
//               offset={-100}
//               to={path}
//               className="block text-base text-white hover:text-brandPrimary first:font-medium"
//             >
//               {link}
//             </Link>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
// //

import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import useTheme from "../contexts/theme";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  // Function to handle the theme change based on checkbox state
  const onChangeBtn = (e) => {
    if (e.currentTarget.checked) darkTheme();
    else lightTheme();
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"} // Checked when the theme mode is dark
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu open state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to toggle sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonials", path: "testimonials" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 dark:bg-neutral-800">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white dark:bg-neutral-900 duration-300 dark:border-neutral-700"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="companyLogo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238] dark:text-white">NEXCENT</span>
          </a>

          {/* navItems for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray-900 hover:text-brandPrimary dark:text-gray-300 dark:hover:text-brandPrimary"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900 dark:text-gray-300 dark:hover:text-brandPrimary"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutral-800 dark:hover:bg-gray-300 dark:text-black">
              Sign Up
            </button>
            <ThemeBtn />
          </div>

          {/* mobileMenu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500 dark:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        {/* navItems for mobile */}
        <div
          className={`space-y-4 px-4 py-7 mt-16 bg-brandPrimary dark:bg-neutral-800 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
              to={path}
              className="block text-base text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-brandPrimary"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
