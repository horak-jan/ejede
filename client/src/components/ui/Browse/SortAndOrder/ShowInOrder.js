import { useState } from "react";

const ShowInOrder = (props) => {
  const { showLowToHigh, setShowLowToHigh } = props;
  const [highToLow, setHighToLow] = useState(true);

  const toggleHighToLow = (highToLow, showLowToHigh) => {
    setHighToLow(!highToLow);
    setShowLowToHigh(!showLowToHigh);
  };

  return (
    <div className="show-in-order">
      {/* cars shown high to low? */}
      {highToLow == true ? (
        // show low to high button
        <button onClick={() => toggleHighToLow(highToLow, showLowToHigh)}>
          Od nejvyšší
        </button>
      ) : (
        // or show high to low
        <button onClick={() => toggleHighToLow(highToLow, showLowToHigh)}>
          Od nejnižší
        </button>
      )}
    </div>
  );
};

export default ShowInOrder;
