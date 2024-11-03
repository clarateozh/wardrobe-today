import PropTypes from "prop-types";
import { useState } from "react";

export default function ClothingItem({ img, name }) {
  const [showTip, setShowTip] = useState(false);

  return (
    <span className="size-12">
      {!showTip &&
        <img
          src={img}
          alt={name}
          title={name}
          onClick={() => setShowTip(true)}
         
        />
      }
      {showTip && <div className="text-xs bg-orange-200 rounded-md shadow-md w-full h-full p-1 text-center"  onClick={() => setShowTip(false)}>{name}</div>}
    </span>
  );
}
ClothingItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
