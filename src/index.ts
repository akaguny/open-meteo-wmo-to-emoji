export function openWeatherWMOToEmoji(
  weatherCode: number = -1,
  daylite = true,
): { value: string; originalNumericCode: number; description: string } {
  switch (weatherCode) {
    case 0:
      if (daylite) {
        return {
          value: "☀️",
          originalNumericCode: 0,
          description: "Clear sky",
        };
      }
      if (!daylite) {
        return {
          value: "🌙",
          originalNumericCode: 0,
          description: "Clear sky",
        };
      }
    case 1:
      if (daylite) {
        return {
          value: "🌤️",
          originalNumericCode: 1,
          description: "Mainly clear",
        };
      }
      if (!daylite) {
        return {
          value: "🌤️🌙",
          originalNumericCode: 1,
          description: "Mainly clear",
        };
      }
    case 2:
      return {
        value: "☁️",
        originalNumericCode: 2,
        description: "Partly cloudy",
      };
    case 3:
      if (daylite) {
        return { value: "🌥️", originalNumericCode: 3, description: "Overcast" };
      }
      if (!daylite) {
        return {
          value: "☁️🌙",
          originalNumericCode: 3,
          description: "Overcast",
        };
      }
    case 45:
      return { value: "🌫️", originalNumericCode: 45, description: "Fog" };
    case 48:
      return {
        value: "🌫️❄️",
        originalNumericCode: 48,
        description: "Depositing rime fog",
      };
    case 51:
      return {
        value: "🌧️",
        originalNumericCode: 51,
        description: "Drizzle: Light",
      };
    case 53:
      return {
        value: "🌧️",
        originalNumericCode: 53,
        description: "Drizzle: Moderate",
      };
    case 55:
      return {
        value: "🌧️",
        originalNumericCode: 55,
        description: "Drizzle: Dense intensity",
      };
    case 56:
      return {
        value: "🌨️",
        originalNumericCode: 56,
        description: "Freezing Drizzle: Light",
      };
    case 57:
      return {
        value: "🌨️",
        originalNumericCode: 57,
        description: "Freezing Drizzle: Dense intensity",
      };
    case 61:
      return {
        value: "🌦️",
        originalNumericCode: 61,
        description: "Rain: Slight",
      };
    case 63:
      return {
        value: "🌧️",
        originalNumericCode: 63,
        description: "Rain: Moderate",
      };
    case 65:
      return {
        value: "🌧️",
        originalNumericCode: 65,
        description: "Rain: Heavy intensity",
      };
    case 66:
      return {
        value: "🌧️",
        originalNumericCode: 66,
        description: "Freezing Rain: Light",
      };
    case 67:
      return {
        value: "🌧️",
        originalNumericCode: 67,
        description: "Freezing Rain: Heavy intensity",
      };
    case 71:
      return {
        value: "🌨️",
        originalNumericCode: 71,
        description: "Snow fall: Slight",
      };
    case 73:
      return {
        value: "🌨️",
        originalNumericCode: 73,
        description: "Snow fall: Moderate",
      };
    case 75:
      return {
        value: "🌨️",
        originalNumericCode: 75,
        description: "Snow fall: Heavy intensity",
      };
    case 77:
      return {
        value: "🌨️",
        originalNumericCode: 77,
        description: "Snow grains",
      };
    case 80:
      return {
        value: "🌦️",
        originalNumericCode: 80,
        description: "Rain showers: Slight",
      };
    case 81:
      return {
        value: "🌧️🌧️",
        originalNumericCode: 81,
        description: "Rain showers: Moderate",
      };
    case 82:
      return {
        value: "🌧️🌧️🌧️",
        originalNumericCode: 82,
        description: "Rain showers: Violent",
      };
    case 85:
      return {
        value: "🌨️",
        originalNumericCode: 85,
        description: "Snow showers slight",
      };
    case 86:
      return {
        value: "🌨️🌨️",
        originalNumericCode: 86,
        description: "Snow showers heavy",
      };
    case 95:
      return {
        value: "🌩️",
        originalNumericCode: 95,
        description: "Thunderstorm: Slight or moderate",
      };
    case 96:
      return {
        value: "⛈️",
        originalNumericCode: 96,
        description: "Thunderstorm with slight hail",
      };
    case 99:
      return {
        value: "⛈️🌨️",
        originalNumericCode: 99,
        description: "Thunderstorm with heavy hail",
      };
    default:
      return {
        value: "🤷‍♂️",
        originalNumericCode: -1,
        description: "Unknown weather code",
      };
  }
}
