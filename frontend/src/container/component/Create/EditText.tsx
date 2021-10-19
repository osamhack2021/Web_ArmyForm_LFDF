import React from "react";

interface Idata {
  widgetType: string;
  index: number[];
  onChange: any;
  text: any;
}

const EditText = ({widgetType, index, onChange, text}: Idata) => {
  return (
    <textarea id={index.join("*")}
        className={widgetType}
        placeholder="값을 입력하세요"
        value={text}
        onChange={onChange} />
  );
};

export default EditText;