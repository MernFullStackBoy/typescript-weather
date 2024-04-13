function Card(props: any) {
    return (
        <div className=" w-[350px] flex flex-col items-center h-[350px] bg-[#242424] mx-auto rounded-[30px] p-[20px] mt-[60px] ">
            <h1 className=" text-white text-[30px] font-semibold ">{props.city}, {props.country}</h1>
            <div className=" flex items-center ">
                <img src={props.href} alt="Icon" />
                <h1 className=" text-[white] font-bold text-[50px] ">{props.temp} ^</h1>
            </div>
            <div className=" flex items-center justify-around text-[20px] font-semibold w-[100%] ">
                <h1 className=" text-white ">{props.main}</h1>
                <p className=" text-[white] ">{props.desc}</p>
            </div>

            <div className=" text-[white] mt-[20px] font-semibold ">
                <h2 className=" text-center text-[30px] ">Wind</h2>
                <div className=" flex items-center gap-[30px] mt-[20px] w-[100%] ">
                    <h3>speed: {Math.trunc(props.speed)},</h3>
                    <h3>deg: {Math.trunc(props.deg)},</h3>
                    <h3>gust: {Math.trunc(props.gust)}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card