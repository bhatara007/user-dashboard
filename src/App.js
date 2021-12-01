import logo from './logo.svg';
import './App.css';
import { FaRegUser } from "react-icons/fa";
import LineChartsusu from './components/LineChart';
import { FaRegHospital } from "react-icons/fa";
import { useState } from 'react'

function App() {


  return (
    <div className="App h-screen justify-center flex items-center bg-gray-200">
      <div className="flex flex-row animate-wiggle">
        <div className="h-full w-60 justify-center border-2 shadow-sm flex bg-white flex-1 m-1">
          <div className="flex flex-col items-center">
            <div className="bg-gray-400 h-40 w-40 rounded-full m-5 flex justify-center items-center">
              <FaRegUser className=" text-white text-7xl"></FaRegUser>
            </div>
            <p className="text-2xl font-bold">Name: Bhatara Chaemchan</p>
            <p className="mt-5 mb-10"> Current Location: Bangkok</p>
            <div className=" text-red-500 animate-fast-bounce">
              <img
                src="https://media.discordapp.net/attachments/913893455325978724/915602297772474458/unknown.png"
                className="rounded-full w-8 h-8 bg-cover cursor-pointer"
              />
              <p className="text-1xl"> Click me !!!!!!</p>
            </div>
          </div>
        </div>
        <div className="flex-1 m-1 space-y-1">
          <div className="flex space-x-1 h-1/5">
            <div className="w-36 h-full bg-white">
              <p className="mt-1"> Temp </p>
              <p className="mt-1 text-2xl font-semibold"> 34 c </p>
            </div>
            <div className="w-36 h-full bg-white">
              <p className="mt-1"> AQI (PM 2.5) </p>
              <p className="mt-1 text-2xl font-semibold"> 120 </p>
            </div>
            <div className="w-36 h-full bg-white">
              <p className="mt-1"> New Cases </p>
              <p className="mt-1 text-2xl font-semibold"> 312 </p>
            </div>
          </div>
          <div className=" h-4/5 pb-1">
            <div className=" h-full bg-white">
              <LineChartsusu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
