import SortPicker from "./SortPicker";
import ShowInOrder from "./ShowInOrder";

const SortAndOrder = (props) => {
  return (
    <div className="sort-and-order">
      <ShowInOrder
        setShowLowToHigh={props.setShowLowToHigh}
        showLowToHigh={props.showLowToHigh}
      />
      <SortPicker setSortType={props.setSortType} />
    </div>
  );
};

export default SortAndOrder;
