import { mutation } from "./_generated/server";

export const saveWeatherData = mutation(async ({ db }, weatherData) => {
  await db.insert("weather", weatherData);
});