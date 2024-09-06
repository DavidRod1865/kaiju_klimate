import PropTypes from "prop-types";

const CurrentForecast = ({ weather }) => {
  return (
    <div className="flex flex-col items-center w-60 md:w-72 mt-60 p-2 border-slate-500 rounded-lg border-8 self-center m-8 bg-gradient-to-t from-blue-400/50 to-white-200/50 md:self-end">
      <img
        src={weather.current.condition.icon}
        alt="Weather Icon"
        className=" w-24 md:w-36"
      />
      <h2 className="text-4xl md:text-5xl text-white font-creepster text-outline-blue">
        {weather.location.name}
      </h2>
      <p className="text-lg md:text-2xl text-white text-outline-blue">{weather.current.condition.text}</p>
      <p className="text-md md:text-xl text-white text-outline-blue">Temperature: {weather.current.temp_f}°F</p>
      <p className="text-md md:text-xl text-white text-outline-blue">Feels like: {weather.current.feelslike_f}°F</p>
      <p className="text-md md:text-xl text-white text-outline-blue">
        {new Date(weather.location.localtime).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

CurrentForecast.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
      localtime: PropTypes.string.isRequired,
    }).isRequired,
    current: PropTypes.shape({
      temp_f: PropTypes.number.isRequired,
      feelslike_f: PropTypes.number.isRequired,
      condition: PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CurrentForecast;
