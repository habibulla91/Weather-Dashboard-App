
export async function getWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=2331c0809f144e07a67164823262706&q=${city}&aqi=yes`
  );

   const data = await response.json();

   console.log(data);
  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  return data;
}