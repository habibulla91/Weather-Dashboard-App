// src/components/weather/MainWeather.jsx
import WeatherIcon from "../ui/WeatherIcon.jsx";
// import weatherBg from "../../assets/weather-bg.jpg";

export default function MainWeather({ weather }) {
  if (!weather || !weather.current) {
  return null;
}
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        // backgroundImage: `url(${weatherBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text legibility, matches glass dashboard tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-950/35 via-base-950/15 to-base-950/65" />

      <div className="relative flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex items-center gap-5 sm:gap-6">
          <WeatherIcon icon={weather.current.condition.icon} className="h-16 w-16 drop-shadow-lg sm:h-20 sm:w-20" />

          <div>
            <p className="text-glow text-5xl font-extrabold text-white sm:text-6xl">
              {weather.current.temp_c}
              <span className="align-top text-3xl sm:text-4xl">°C</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">{weather.current.condition.text}</h2>
          <p className="mt-1 text-sm text-slate-300">Feels like {weather.current.feelslike_c}°C</p>
        </div>
      </div>
    </div>
  );
}
