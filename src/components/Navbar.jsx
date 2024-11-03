import PropTypes from "prop-types";

function returnDate(time) {
  const theTime = new Date(time);
  const timeString = theTime.toUTCString();
  const timeArray = timeString.split(" ");
  // Remove last 2 as those are time and GMT info
  timeArray.pop();
  timeArray.pop();

  const retStr = timeArray.map((part) => part + " ");
  return retStr;
}

export default function Navbar({ time }) {
  return (
    <header className="w-screen absolute left-0 top-0">
      <div className="bg-lime-900 text-white text-xl p-3">
        Kiga Wardrobe Today
      </div>
      <div className="bg-slate-300">{returnDate(time)} </div>
    </header>
  );
}
Navbar.propTypes = {
  time: PropTypes.object.isRequired,
};
