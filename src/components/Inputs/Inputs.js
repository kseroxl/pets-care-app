import React, { createRef, useState } from "react";
import "./Inputs.css";

export const onDateChange = (e) => {
  let date = e.target.value;
  if (date.length > 1 && date.length < 3 && date.split("/").length < 3)
    e.target.value += "/";
  if (date.length > 4 && date.length < 6 && date.split("/").length < 3)
    e.target.value += "/";

  const dates = date.split("/");
  let dd = dates[0];
  console.log(dates, dd);
  if (dates[0].length > 2) {
    dates[0] = dates[0].substring(0, 2);
    dates[1] = dd.substring(2, dd.length);
  }

  let mm = dates[1];
  if (dates[1] && dates[1].length > 2) {
    dates[1] = dates[1].substring(0, 2);
    dates[2] += mm.substring(2, mm.length);
  }

  e.target.value = dates.join("/");

  // let firstSlash = date.indexOf("/") !== -1 ? date.indexOf("/") : 2;
  // let secondSlash = date.indexOf("/", 3) !== -1 ? date.indexOf("/", 3) : 3;
  // console.log(firstSlash, secondSlash);

  // let dd =
  //   date.length > 1
  //     ? date.substring(0, 2) + "/"
  //     : date.substring(0, date.length);
  // let mm =
  //   date.length > 3
  //     ? date.substring(2, 4) + "/"
  //     : date.length > 2
  //     ? date.substring(2, date.length)
  //     : "";

  // let yyyy = date.length > 4 ? date.substring(4, date.length) : "";
  // return (e.target.value = dd + mm + yyyy);

  // if (!valueIsNaN) {
  //   var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  // } else {
  //   setError("Please enter date in numbers");
  // }
};

export const validateDateFormat = (date) => {
  console.log("validation");
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;
  if (date.match(dateformat)) {
    return "";
  } else return "Invalid data type";
};

const Input = (props) => {
  const style = {
    background: `url(./icons/${props.icon}) no-repeat`,
    backgroundPosition:
      props.className.indexOf("search-bar") === -1 ? "100% 50%" : "98% 50%",
  };
  return (
    <div className={`input ${props.className}`}>
      {props.label && <label className="small grey-text">{props.label}</label>}
      <input {...props} style={style} />
    </div>
  );
};

const Password = (props) => {
  const ref = createRef();
  const [focused, setFocused] = useState(false);

  const handleMouseDown = (event) => {
    setFocused(true);
  };

  const handleMouseUp = (event) => {
    setFocused(false);
  };

  return (
    <div className={`input password ${props.className}`}>
      {props.label && <label className="small grey-text">{props.label}</label>}
      <input
        {...props}
        ref={ref}
        type={focused ? "text" : "password"}
        className={focused ? "password-on" : "password-off"}
      />
      <span onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}></span>
    </div>
  );
};

const Select = (props) => {
  const style = {
    background: `url(./icons/${props.icon}) no-repeat`,
    backgroundPosition: "100% 50%",
  };
  const ref = createRef();

  const handleChange = (label) => {
    var selectedOption = ref.current.options[ref.current.selectedIndex].value;
    props.onChange(label, selectedOption.toUpperCase());
  };

  return (
    <div className={`input ${props.class}`}>
      {props.label && <label>{props.label}</label>}
      <select
        ref={ref}
        className="pointer"
        style={style}
        onChange={() => handleChange(props.id)}
      >
        {props.options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export { Input, Password, Select };
