import PropTypes from "prop-types";

import imgGloves from "../assets/images/clothing/gloves.svg";
import imgJacket from "../assets/images/clothing/jacket.svg";
import imgPullover from "../assets/images/clothing/pullover.svg";
import imgRainboots from "../assets/images/clothing/rainboots.svg";
import imgRaincoat from "../assets/images/clothing/raincoat.svg";
import imgSandals from "../assets/images/clothing/sandals.svg";
import imgScarf from "../assets/images/clothing/scarf.svg";
import imgSunhat from "../assets/images/clothing/sunhat.svg";
import imgWinterboots from "../assets/images/clothing/winterboots.svg";
import imgWinterhat from "../assets/images/clothing/winterhat.svg";
import imgWinterjacket from "../assets/images/clothing/winterjacket.svg";

import ClothingItem from "./ClothingItem";
import {
  APP_CONSTANTS,
  CLOTHING_TEMP_TRIGGERS as TRIGGERS,
} from "../data/appConstants";

export default function WardrobeDisplay({ weather }) {
  const min_temp = Math.floor(
    Math.min(
      weather.apparent_temperature[+APP_CONSTANTS.bringUhr],
      weather.apparent_temperature[+APP_CONSTANTS.gartenUhr],
      weather.apparent_temperature[+APP_CONSTANTS.abholUhr]
    )
  );

  const max_temp = Math.floor(
    Math.max(
      weather.apparent_temperature[+APP_CONSTANTS.bringUhr],
      weather.apparent_temperature[+APP_CONSTANTS.gartenUhr],
      weather.apparent_temperature[+APP_CONSTANTS.abholUhr]
    )
  );

  const rain = Math.max(
    weather.rain[+APP_CONSTANTS.bringUhr],
    weather.rain[+APP_CONSTANTS.gartenUhr],
    weather.rain[+APP_CONSTANTS.abholUhr],
    weather.showers[+APP_CONSTANTS.bringUhr],
    weather.showers[+APP_CONSTANTS.gartenUhr],
    weather.showers[+APP_CONSTANTS.abholUhr]
  );

  const snowfall = Math.max(
    weather.snowfall[+APP_CONSTANTS.bringUhr],
    weather.snowfall[+APP_CONSTANTS.gartenUhr],
    weather.snowfall[+APP_CONSTANTS.abholUhr]
  );

  return (
    <div className="mt-16 ml-auto mr-auto w-4/5 flex flex-wrap gap-x-2 gap-y-2 justify-around">
      {min_temp <= TRIGGERS.pullover && (
        <ClothingItem img={imgPullover} name="Pullover" />
      )}
      {min_temp <= TRIGGERS.winterjacket ? (
        <ClothingItem img={imgWinterjacket} name="Winter Jacket" />
      ) : (
        min_temp <= TRIGGERS.jacket && (
          <ClothingItem img={imgJacket} name="Light Jacket" />
        )
      )}
      {rain > 0 && <ClothingItem img={imgRaincoat} name="Rain Coat" />}

      {(min_temp + max_temp)/2 <= TRIGGERS.gloves && (
        <ClothingItem img={imgGloves} name="Gloves" />
      )}
      {min_temp <= TRIGGERS.scarf && (
        <ClothingItem img={imgScarf} name="Scarf" />
      )}
      {min_temp <= TRIGGERS.winterhat && (
        <ClothingItem img={imgWinterhat} name="Winter Hat" />
      )}
      {min_temp >= TRIGGERS.sunhat && (
        <ClothingItem img={imgSunhat} name="Sun Hat" />
      )}

      {rain > 0 && (
        <ClothingItem img={imgRainboots} name="Rain Boots" />
      )}
      {((min_temp + max_temp)/2 <= TRIGGERS.winterboots || snowfall > 0) && (
        <ClothingItem img={imgWinterboots} name="Winter Boots" />
      )}
      {min_temp >= TRIGGERS.sandals && (
        <ClothingItem img={imgSandals} name="Sandals" />
      )}
    </div>
  );
}
WardrobeDisplay.propTypes = {
  weather: PropTypes.object.isRequired,
};
