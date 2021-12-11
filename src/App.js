import logo from './logo.svg';
import './App.css';
import { FaRegUser } from "react-icons/fa";
import LineChartsusu from './components/LineChart';
import { FaRegHospital } from "react-icons/fa";
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const URL = "https://suchon-tracker-server.herokuapp.com/";

  const [aqi, setAqi] = useState("");
  const [hospital, setHospital] = useState([]);
  const [temp, setTemp] = useState("");
  const [current, setCurrent] = useState("");
  const [card, setCard] = useState(false);
  const [location, setLocation] = useState("");
  const [humidity, setHumidity] = useState("");
  


  const [covid, setCovid] = useState("");

  const getCovid = async () => {
      const { data } = await axios.get(
        URL + "data/covid/current?name=urn"
      );
      console.log(data[0])
      setCovid(data[0].new_case);
    };
  
  const getLocation = async () => {
      const { data } = await axios.get(URL + "data/province/current?name=urn");
      setLocation(data[0].province);
    };


  const getAqi = async () => {
    const { data } = await axios.get(URL + "data/aqi/current?name=urn");
    setAqi(data[0].aqi)
  }

  const getTemp = async () => {
    const { data } = await axios.get(URL + "data/temp/?name=urn");
    setCurrent(data[data.length-1].temp)
    setTemp(data)
  }

  const getHostpital = async () => {
      const { data } = await axios.get(URL + "data/hospital?name=urn");
      setHospital(data);
  }

  const getHumanity = async () => {
    const { data } = await axios.get(URL + "data/humidity/current?name=urn");
    console.log(data)
    setHumidity(data[0].humidity)
  }

  const clickHandle = () => {
    getHostpital()
    console.log(card)
    setCard(!card)
  }


  useEffect(() => {
    getHumanity();
    getAqi()
    getTemp()
    getCovid()
    getLocation()
  }, [])

    useEffect(() => {
      getHostpital();
    }, [location]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getTemp()
      getAqi();
      getTemp();
      getCovid();
      getLocation();
      getHumanity();
    }, 2000);

    return () => clearInterval(intervalId); //This is important
  }, []);



  return (
    <div className="App h-screen justify-center flex pt-10 bg-gray-200">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="h-full w-60 justify-center border-2 shadow-sm flex bg-white flex-1">
            <div className="flex flex-col items-center">
              {/* <div className="bg-gray-400 h-40 w-40 rounded-full m-5 flex justify-center items-center">
                <FaRegUser className=" text-white text-7xl"></FaRegUser>
              </div> */}
              <img
                src="https://cdn.discordapp.com/attachments/913893455325978724/915706793265623130/unknown.png"
                className="w-40 h-40 rounded-full m-5"
              />
              <p className="text-2xl font-bold">User: ToeylnwZa007</p>
              <p className="mt-5 mb-5"> Current Location: {location}</p>
              {current > 36 ? (
                <div className=" text-red-500 m-1 flex flex-col items-center animate-fast-bounce">
                  <FaRegHospital className="text-7xl animate-spin"></FaRegHospital>
                  <button
                    className="text-1xl hover:scale-150"
                    onClick={() => clickHandle()}
                  >
                    Click me !!!!!!
                  </button>
                </div>
              ) : (
                <div></div>
              )}
              <div className="h-12">

              </div>
            </div>
          </div>
          <div className="flex-1 ml-1 space-y-1">
            <div className="flex space-x-1 h-1/5">
              {current > 36 ? (
                <div className="w-36 h-full bg-white">
                  <p className="mt-1"> Temp </p>
                  <p className="mt-1 text-2xl font-semibold text-red-600">
                    {" "}
                    {current} c{" "}
                  </p>
                </div>
              ) : (
                <div className="w-36 h-full bg-white">
                  <p className="mt-1"> Temp </p>
                  <p className="mt-1 text-2xl font-semibold"> {current} c </p>
                </div>
              )}
              <div className="w-36 h-full bg-white">
                <p className="mt-1"> Humanity </p>
                <p className="mt-1 text-2xl font-semibold"> {humidity} RH%</p>
              </div>
              <div className="w-36 h-full bg-white">
                <p className="mt-1"> AQI (PM 2.5) </p>
                <p className="mt-1 text-2xl font-semibold"> {aqi} µg./m </p>
              </div>
              <div className="w-36 h-full bg-white">
                <p className="mt-1"> New Covid </p>
                <p className="mt-1 text-2xl font-semibold"> {covid} cases </p>
              </div>
            </div>
            <div className=" h-4/5 pb-1">
              <div className=" h-full bg-white">
                <LineChartsusu data={temp} />
              </div>
            </div>
          </div>
        </div>
        {card && hospital ? (
          <div
            className="h-100 bg-white w-full m-1 flex flex-col items-center 
          space-y-3 justify-center animate-wiggle mt-3 pb-4"
          >
            <p className="text-3xl font-bold mt-4"> Hospital:</p>
            <p className="text-2xl"> (nearby 5km.)</p>
            {hospital.map((hos, index) => {
              return (
                <div className=" w-64 space-y-1">
                  <p className="text-xl font-semibold">
                    {index + 1}: {hos.name}
                  </p>
                  <p> TEL: {hos.formatted_phone_number} </p>
                  <hr></hr>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
