import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LocationLoading = ({ onLocationFound }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadingGif = [
    "https://i.pinimg.com/originals/28/57/16/285716ce4271f4bd9cf8c6a7ae30879f.gif",
    "https://media1.giphy.com/media/hRwpDnvt6lMFSx5J0h/source.gif",
    "https://media.giphy.com/media/l41Ybd4Yc4zXw7QRO/giphy.gif?cid=ecf05e47npzu4wp1wslqzwjrh9hvgns3sd9ybibt7m8628iy&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://i.redd.it/vmp639fnm7bc1.gif",
    "https://media2.giphy.com/media/UuSkQODaKEY1FJiuQB/giphy.gif?cid=6c09b952ht09drtu37yetb9wezqm2v9rmgl4sc2v2c0wf38r&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://i.makeagif.com/media/6-28-2020/XLQ_GH.gif",
    "https://giffiles.alphacoders.com/212/212134.gif",
    "https://media0.giphy.com/media/dAzaMATbe4CebYrKnV/giphy.gif?cid=6c09b9528smjnz1d3javmyqmjfhq9fwcryjpwrfudcdvysjm&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://i.redd.it/dlfou5rz71dc1.gif",
    "https://64.media.tumblr.com/c1d36eaf88ee242f58b1e27826c1260a/tumblr_ow815b6LrX1wzw0ebo2_500.gifv",
  ];

  const randomGif = loadingGif[Math.floor(Math.random() * loadingGif.length)];

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      if (loading) {
        const defaultLocation = { latitude: 40.7128, longitude: -74.0060 };
        setLocation(defaultLocation);
        onLocationFound(defaultLocation);
        setLoading(false);
        console.warn("Geolocation timed out, defaulting to New York City.");
      }
    }, 30000);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(timeoutId);
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        onLocationFound({ latitude, longitude });
        setLoading(false);
      },
      (err) => {
        clearTimeout(timeoutId);
        setError("Unable to retrieve your location.");
        setLoading(false);
        console.error("Geolocation error:", err);
      }
    );

    return () => clearTimeout(timeoutId);
  }, [onLocationFound, loading]);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center font-creepster text-5xl text-cyan-500 text-outline-blue">
        <p className="text-center">Searching for Location</p>
        <img
          className="w-80 m-5"
          src={randomGif}
          alt="Godzilla Stomp"
        />
        <p className="text-center">Monster Weather Incoming</p>
      </div>
    );
  }

  return null;
};

LocationLoading.propTypes = {
  onLocationFound: PropTypes.func.isRequired,
};

export default LocationLoading;