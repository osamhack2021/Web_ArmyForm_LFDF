import React from "react";

import Delete from "static/delete.png";

import EditText from "container/component/Create/EditText";

interface Idata {
  data: any;
  onChange: any;
  onDelete: any;
}

const EditableWidget = ({data, onChange, onDelete}: Idata) => {
  let id = data.index.join("*") + "*-1";
  return (
    <div className="editable_widget">
      <div className="toolbox">
        <select
          id={id}
          value={data.type}
          onChange={onChange}>
          
          <option value="title">제목</option>
          <option value="p">내용</option>
          <option value="input">텍스트 상자</option>
          <option value="select">선택 상자</option>
          <option value="checkbox">체크박스</option>
          <option value="radio">라디오</option>
        </select>
        <button className="flat" onClick={() => onDelete(data.index)}>
          <img src={Delete} alt="delete" />
        </button>
      </div>
      { data.elements.length <= 1 ?
        <EditText
          text={data.value}
          index={data.index}
          widgetType={data.type}
          onChange={onChange}
        />
        :
        data.elements.map((value: number, index: number) => {
          const indexData = [...(data.index)];
          indexData.push(index);

          if(true) {
            <EditText
              text={data.value}
              index={indexData}
              widgetType="title"
              onChange={onChange}
            />
          } else {
            <EditText
              text={value}
              index={indexData}
              widgetType={data.type}
              onChange={onChange}
            />
          }
        })
      }
    </div>
  );
};

export default EditableWidget;
