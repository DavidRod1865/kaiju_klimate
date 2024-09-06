const WeeklyForecast = (forecast) => {

  return (
    <div className="flex relative z-10">
      {forecast.forecast.map((day) => (
        <div
          key={day.date}
          className="m-2 p-3 flex flex-col items-center border-yellow-300 bg-black border-2 text-white"
        >
          <div className="relative w-36 h-36 group">
            <img
              src={day.kaijuIcon}
              alt="Kaiju Icon"
              className="w-36 h-36 object-cover overflow-hidden"
            />
            <img
              src={day.icon}
              alt="Weather Icon"
              className="w-20 absolute bottom-0 left-0 z-50 bg-black bg-opacity-50"
            />

            <div className="absolute inset-0 flex items-top justify-center bg-black bg-opacity-80 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-center">{day.kaijuName} Incoming!</span>
            </div>
          </div>
          <h2 className="text-sm">
            {new Date(day.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </h2>
          <h2 className="text-sm">{day.condition}</h2>
          <p className="text-sm">Temperature: {day.temperature}°F</p>
          <p className="text-sm">Feels like: {day.feelsLike}°F</p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
