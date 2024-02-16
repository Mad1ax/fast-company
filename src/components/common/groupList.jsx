import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {

    // console.log('items',typeof(items));
    // console.log(Object.keys(items));
  // console.log(onItemSelect);
  //   console.log(items.doctor.name);
  if (!Array.isArray(items)) {
  return (
    <>
      <ul className="list-group">
        {Object.keys(items).map((profession) => (
          <li
            className={
              "list-group-item" +
              (items[profession] === selectedItem ? " active" : "")
            }
            key={items[profession][valueProperty]}
            onClick={() => onItemSelect(items[profession])}
            role="button"
          >
            {items[profession][contentProperty]}
          </li>
        ))}
      </ul>
    </>
  );
}
return (
    <>
      <ul className="list-group">
        {items.map((profession) => (
            // console.log(profession[valueProperty])
          <li
            className={
              "list-group-item" +
              (profession === selectedItem ? " active" : "")
            }
            key={profession[valueProperty]}
            onClick={() => onItemSelect(profession)}
            role="button"
          >
            {profession[contentProperty]}
          </li>
        ))}
      </ul>
    </>
  );


};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
};
export default GroupList;
