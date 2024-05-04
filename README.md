# [open-meteo](https://open-meteo.com/en/docs/#:~:text=WMO%20Weather%20interpretation%20codes%20(WW)) wmo to ☀️

## Description

The `@akaguny/open-meteo-wmo-to-emoji` package provides a function, `openWeatherWMOToEmoji`, that translates World Meteorological Organization (WMO) weather codes into corresponding emojis. The package is available as an NPM module and is intended for use in web applications and other software projects.

## Installation


`npm install @akaguny/open-meteo-wmo-to-emoji`


## Usage

```
import { openWeatherWMOToEmoji } from '@akaguny/open-meteo-wmo-to-emoji';

const emoji = openWeatherWMOToEmoji(01); // ☀️
```

Input Format

The package accepts weather codes as numbers, corresponding to the WMO standard:

* 0 - Clear
* 1, 2, 3 - Mainly clear, partly cloudy, overcast
* 45, 48 - Fog and depositing rime fog
* 51, 53, 55 - Drizzle: Light, moderate, and dense intensity
* 56, 57 - Freezing Drizzle: Light and dense intensity
* 61, 63, 65 - Rain: Slight, moderate and heavy intensity
* 66, 67 - Freezing Rain: Light and heavy intensity
* 71, 73, 75 - Snow fall: Slight, moderate, and heavy intensity
* 77 - Snow grains
* 80, 81, 82 - Rain showers: Slight, moderate, and violent
* 85, 86 - Snow showers slight and heavy
* 95, 96, 99 - *Thunderstorm: Slight or moderate, with or without hail

## Requirements

The package has no dependencies and can be used in any environment that supports JavaScript.

## License

The package is distributed under the MIT license.


[def]: https://open-meteo.com

## Contributing

* build with `npm run build`
* publish with `npm run deploy`