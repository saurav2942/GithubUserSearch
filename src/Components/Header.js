import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../utils/themeSlice";
import { changeStyle } from "../utils/styleSlice";
library.add(fas, faMoon, faSun);

const Header = () => {
  const themeType = useSelector((store) => store.theme.themeType);
  const col2 = useSelector((store) => store.style.col2);
  const [icon, setIcon] = useState("fa-moon");

  const dispatch = useDispatch();

  const handleClick = (currentTheme) => {
    if (currentTheme == "Dark") {
      setIcon("fa-sun");
      dispatch(
        changeTheme({
          themeType: "Light",
          bgTheme: "#141D2F",
          compTheme: "#1E2A47",
        })
      );
      dispatch(
        changeStyle({
          col1: "#ffffff",
          col2: "#ffffff",
          shadow: "#172554",
        })
      );
    } else {
      setIcon("fa-moon");
      dispatch(
        changeTheme({
          themeType: "Dark",
          bgTheme: "#F6F8FF",
          compTheme: "#FEFEFE",
        })
      );
      dispatch(
        changeStyle({
          col1: "#2B3442",
          col2: "#4B6A9B",
          shadow: "#cbd5e1",
        })
      );
    }
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold p-1" style={{ color: col2 }}>
        DevDetective
      </h1>
      <div className="flex justify-center items-center gap-3">
        <h3 className="font-bold uppercase text-sm" style={{ color: col2 }}>
          {themeType}
        </h3>
        <button onClick={() => handleClick(themeType)}>
          <FontAwesomeIcon
            className="text-2xl fill-darklight"
            icon={"fas " + icon}
            style={{ color: col2 }}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
