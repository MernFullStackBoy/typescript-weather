import { useRef, useState } from "react"
import useAxios from "./hooks/useAxios"
import Card from "./Card"
import { HashLoader } from "react-spinners"

function App() {

  const [country, setCounty] = useState<string>("Uzbekistan")

  const ref = useRef<any>()

  const { data, loading } = useAxios(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=96b947a45d33d7dc1c49af3203966408`)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setCounty(ref.current.value)
  }


  return (
    <form onSubmit={handleSubmit} className=" rounded-[20px] p-[20px] max-w-[500px] h-[100vh] bg-slate-900 mx-auto ">
      <div className=" flex justify-center items-center gap-3 ">
        <input
          ref={ref}
          type="text"
          className="w-[100%] text-white h-[50px] rounded-[20px] pl-[20px] font-semibold "
          placeholder="Enter country name"
        />
        <button className="btn w-[50px] h-[50px] btn-primary">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {loading && <HashLoader
        className=" mx-auto mt-[170px] "
        color="#eb08ab" size={100} />}
      {!loading && data.map((item: any, index: number) => (
        <Card
          key={index}
          href={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          temp={Math.trunc(item.main.temp)}
          city={item.name}
          country={item.sys.country}
          main={item.weather[0].main}
          desc={item.weather[0].description}
          speed={item.wind.speed}
          deg={item.wind.deg}
          gust={item.wind.gust}
        />
      ))}
    </form>
  )
}

export default App