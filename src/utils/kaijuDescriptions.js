import Logo from "../assets/monster_weather_logo.png";

const kaiju = {
  Godzilla: {
    img: "https://wallpapers-clan.com/wp-content/uploads/2024/04/godzilla-fighting-in-city-desktop-wallpaper-preview.jpg",
    alt: "https://wallpapers-clan.com/ ",
    name: "Godzilla",
  },
  Snow_Godzilla: {
    img: "https://wallpaperdelight.com/wp-content/uploads/2024/07/A-wallpaper-featuring-Godzilla-tearing-through-a-wintry-scene-leaving-a-trail-of-ice-and-snow-in-its-path.jpg",
    alt: "https://wallpaperdelight.com/",
    name: "Snow Godzilla",
  },
  Ghidorah: {
    img: "https://i.redd.it/mlkj02877ec71.jpg",
    alt: "https://www.reddit.com/r/Monsterverse/comments/oo58zo/amazing_godzilla_king_of_the_monsters_japanese/",
    name: "King Ghidorah",
  },
  Mothra: {
    img: "https://wallpapers.com/images/hd/mothra-5398-x-3036-wallpaper-h1b6afygjx74c1sp.jpg",
    alt: "https://wallpapers.com/",
    name: "Mothra",
  },
  Chill_Day: {
    img: "https://wallpapercave.com/wp/wp10969543.jpg",
    alt: "https://wallpapercave.com/",
    name: "Chill Day",
  },
};

export function generateKaijuDescriptions(weatherCondition) {
  switch (weatherCondition) {
    case "Sunny":
    case "Partly cloudy":
    case "Partly Cloudy":
      return {
        description:
          "Godzilla reigns supreme as the scorching sun amplifies his fiery wrath. The horizon trembles under his footsteps as heatwaves distort the landscape.",
        icon: kaiju.Godzilla?.img || Logo,
        name: kaiju.Godzilla?.name || "Godzilla",
      };
    case "Cloudy":
    case "Overcast":
    case "Mist":
      return {
        description:
          "Mothra glides through the dense clouds, her wings stirring the air like a phantom of the storm. The skies dim under her watch, a fleeting balance between chaos and serenity.",
        icon: kaiju.Mothra?.img || Logo,
        name: kaiju.Mothra?.name || "Mothra",
      };
    case "Patchy rain possible":
    case "Light rain":
    case "Moderate rain":
    case "Heavy rain":
    case "Thundery outbreaks possible":
    case "Moderate or heavy rain with thunder":
      return {
        description:
          "The storm rages as King Ghidorah ascends, commanding the skies with lightning and fury. His thunderous roars crack the heavens, marking his dominion over the tempest.",
        icon: kaiju.Ghidorah?.img || Logo,
        name: kaiju.Ghidorah?.name || "King Ghidorah",
      };
    case "Fog":
    case "Patchy snow possible":
    case "Moderate or heavy snow with thunder":
      return {
        description:
          "Snow Godzilla emerges from the frozen wasteland, his icy breath chilling the air. The snowfall thickens as he moves, reshaping the land into a frozen battleground.",
        icon: kaiju.Snow_Godzilla?.img || Logo,
        name: kaiju.Snow_Godzilla?.name || "Snow Godzilla",
      };
    default:
      return {
        description:
          "The kaiju are dormant, but the atmosphere buzzes with anticipation. Brace yourself—something colossal is brewing on the horizon.",
        icon: kaiju.Chill_Day?.img || Logo,
        name: kaiju.Chill_Day?.name || "Chill Day",
      };
  }
}

export function generateKaijuForecast(forecastDays) {
  return forecastDays.map((day) => {
    const kaijuInfo = generateKaijuDescriptions(day.day.condition.text);
    return {
      date: day.date,
      condition: day.day.condition.text,
      tempature: day.day.avgtemp_f,
      feelsLike: day.day.avgtemp_f,
      kaijuDescription: kaijuInfo.description,
      icon: day.day.condition.icon,
      kaijuIcon: kaijuInfo.icon,
      kaijuName: kaijuInfo.name,
    };
  });
}
