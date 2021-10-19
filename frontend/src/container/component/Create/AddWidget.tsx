import React from "react";

import Plus from "static/plus.png";

interface Iprops {
  clickFunc: any;
}

const AddWidget = ({clickFunc}: Iprops) => {
  return (
    <div className="add_widget">
      <button className="add" onClick={clickFunc}>
        <img src={Plus} alt="plus" />
      </button>
    </div>
  );
};

export default AddWidget;