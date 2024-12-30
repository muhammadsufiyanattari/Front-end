import React from "react";
import Hero from "../components/Hero";
import FlashTimer from "../components/FlashTimer";
// import Slider from '../components/Slider'
import CardListSlider from "../components/Slider";
import MyCountBox from "../components/MyCountBox";
import phone from "../assets/category/phone.png";
import headphone from "../assets/category/headPhone.png";
import computer from "../assets/category/computer.png";
import camera from "../assets/category/camera.png";
import boxgame from "../assets/category/boxgame.png";
import smartWatch from "../assets/category/smartWatch.png";
import Spiker from "../components/Spiker";
import Arrivel from "../components/Arrivel";
import OurProduct from "../components/OurProduct";
import { IoMdArrowUp } from "react-icons/io";
import { CardListSlider2 } from "../components/Slider2";
import { useSelector } from "react-redux";
import CardTotal from "./CardTotal";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { SekeletonCart } from "../components/SekeletonCart";
// ..
AOS.init({
 
  duration: 1300, // values from 0 to 3000, with step 50ms

});
function Home() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div
      id="mainhome"
      className={` ${
        darkMode ? "bg-neutral-800" : ""
      } transition-colors duration-500  flex flex-col justify-center `}
    >
      {/* Hero */}
      <Hero />
      <div className=" flex justify-start flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16  ">
        <FlashTimer />
        <CardListSlider />
      </div>
      <div
        className={`${
          darkMode ? "hidden" : "flex"
        } flex justify-start  flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0  `}
      >
        <MyCountBox name="Browse By Category" days="This Month" />
        {/* <Mini Boxes /> */}
        <div
          className={`${
            darkMode ? "bg- rounded mx-12 py-2" : ""
          } flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col mobile:flex-col gap-5 my-10 border-b-gray-100`}
        >
          <div className="flex gap-5">
          <div
            data-aos="flip-right"
            className=" sm:w-28 w-[100px] cursor-none"
          >
            <img src={phone} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="sm:w-28 w-[100px]  cursor-none"
          >
            <img src={computer} alt="" />
          </div>
          </div>
          <div className="flex gap-5">
          <div
            data-aos="flip-right"
                     className=" sm:w-28 w-[100px] cursor-none"
          >
            <img src={smartWatch} alt="" />
          </div>
          <div
            data-aos="flip-right"
                    className=" sm:w-28 w-[100px] cursor-none"
          >
            <img src={camera} alt="" />
          </div>
          </div>
          <div className="flex gap-5">
          <div
            data-aos="flip-right"
            className=" sm:w-28 w-[100px] cursor-none"          >
            <img src={headphone} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className=" sm:w-28 w-[100px] cursor-none"          >
            <img src={boxgame} alt="" />
          </div>
          </div>
        </div>
      </div>
      {/* <CardListSlider /> */}

      <div className=" flex justify-start  flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16 ">
        <MyCountBox name="Best Selling Products" days="This Month" />
        <CardListSlider2 />
      </div>
      
      {/* Spiker-Session */}
      <Spiker />
      {/* Arrival-Session  */}
      <OurProduct />

      <Arrivel />
      <div className="center  gap-[88px] my-24 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col mobile:flex-col ">
        <div
          data-aos="zoom-in"
          className="flex flex-col gap-6 justify-center items-center"
        >
          <div
            className={`${
              darkMode ? "bg-white" : ""
            }  bg-gray-400 rounded-full p-1 cursor-none`}
          >
            {" "}
            <div className="bg-black w-10 h-10 m-2 p-2 rounded-full">
              {" "}
              <img src="https://i.imghippo.com/files/YcS7785oW.png" alt="" />
            </div>
          </div>
          <div data-aos="zoom-in-right" className="center flex-col">
            <h2
              className={`${
                darkMode ? "text-white" : ""
              }  font-semibold text-xl text-black`}
            >
              FREE AND FAST DELIVERY
            </h2>
            <h3
              className={`${
                darkMode ? "text-white" : ""
              }  font-normal text-sm text-black`}
            >
              Free delivery for all orders over $140
            </h3>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col gap-6 justify-center items-center"
        >
          <div
            className={`${
              darkMode ? "bg-white" : ""
            }  bg-gray-400 rounded-full p-1 cursor-none`}
          >
            {" "}
            <div className="bg-black w-10 h-10 m-2 p-2 rounded-full">
              {" "}
              <img src="https://i.imghippo.com/files/xXrg4757YDE.png" alt="" />
            </div>
          </div>
          <div data-aos="zoom-in-right" className="center flex-col">
            <h2
              className={`${
                darkMode ? "text-white" : ""
              }  font-semibold text-xl text-black`}
            >
              24/7 CUSTOMER SERVICE
            </h2>
            <h3
              className={`${
                darkMode ? "text-white" : ""
              }  font-normal text-sm text-black`}
            >
              Friendly 24/7 customer support
            </h3>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col gap-6 justify-center items-center"
        >
          <div
            className={`${
              darkMode ? "bg-white" : ""
            }  bg-gray-400 rounded-full p-1 cursor-none`}
          >
            {" "}
            <div className="bg-black w-10 h-10 m-2 p-2 rounded-full">
              {" "}
              <img src="https://i.imghippo.com/files/tZFH3385.png" alt="" />
            </div>
          </div>
          <div data-aos="zoom-in-right" className="center flex-col">
            <h2
              className={`${
                darkMode ? "text-white" : ""
              }  font-semibold text-xl text-black`}
            >
              MONEY BACK GUARANTEE
            </h2>
            <h3
              className={`${
                darkMode ? "text-white" : ""
              }  font-normal text-sm text-black`}
            >
              We reurn money within 30 days
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end m-3 mx-8">
        <div className="bg-gray-200 p-2 rounded-full">
          <a
            href="#mainhome"
            // onClick={(e) => {
            //   e.preventDefault(); // Prevent default anchor behavior
            //   document.getElementById("mainhome").scrollIntoView({ behavior: "smooth" });
            // }}
          >
            <IoMdArrowUp className="text-2xl" />
          </a>
        </div>
      </div>

      {/* <div className="flex flex-row justify-end m-3 mx-8">
        {" "}
        <div className="bg-gray-200 p-2 rounded-full">
          <a href={"#mainhome"}>
            <IoMdArrowUp className="text-2xl" />
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
