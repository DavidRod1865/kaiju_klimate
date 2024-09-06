import { SignIn } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";
import Home from "./components/ui/Home";
import Logo from "./assets/monster_weather_logo.png";
import "./index.css";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-fixed bg-[url('https://wallpapercat.com/w/full/f/a/9/176969-1920x1200-desktop-hd-clouds-wallpaper.jpg')]">
      <Unauthenticated>
        <img src={Logo} alt="Kaiju Logo" className="w-72 mb-3" />
        <h1 className="font-creepster text-4xl text-cyan-500 text-outline-blue mb-4">
          Kaiju Klimate
        </h1>
        <SignIn />
      </Unauthenticated>
      <Authenticated>
        <Home />
      </Authenticated>
    </div>
  );
}
