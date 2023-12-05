import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(fas, faMagnifyingGlass);
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../utils/userSlice";
import { USER_URL } from "../config";

const Search = () => {
  const compCol = useSelector((store) => store.theme.compTheme);
  const col2 = useSelector((store) => store.style.col2);
  const shadow = useSelector((store) => store.style.shadow);

  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const handleClick = async () => {
    if (searchText) {
      callApi(searchText);
      setSearchText("");
    }
  };

  const HandleEnter = async (e) => {
    e.preventDefault();
    if (e.key == "Enter" && searchText) {
      callApi(searchText);
      setSearchText("");
    }
  };

  async function callApi(username) {
    const res = await fetch(USER_URL + username);
    const userData = await res.json();
    if (!userData?.message) {
      dispatch(searchUser({ username, userData }));
      setError("");
    } else {
      console.log(userData);
      setError("No User Found!");
    }
  }

  useEffect(() => {
    callApi("saurav2942");
  }, []);

  return (
    <div
      className="relative flex items-center py-3 px-3 rounded-2xl my-8 shadow-xl"
      style={{ backgroundColor: compCol, boxShadow: `0px 0px 30px ${shadow}` }}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        className="text-xl mx-2 text-lightBlue"
      />
      <input
        value={searchText}
        type="search"
        placeholder="Enter a Github Username...."
        className="w-[60%] appearance-none focus:outline-none placeholder:text-darklight placeholder:tracking-[1px] mr-[21%]"
        style={{ backgroundColor: "transparent", color: col2 }}
        onChange={(e) => {
          setSearchText(e.target.value);
          setError("");
        }}
        onKeyUp={(e) => HandleEnter(e)}
      ></input>
      {error && !searchText ? (
        <p className="absolute right-[20%] text-[#dc2626]">{error}</p>
      ) : (
        ""
      )}
      <button
        className="bg-darkBlue hover:bg-lightBlue text-light px-6 py-3 text-sm font-bold rounded-lg"
        onClick={() => {
          handleClick();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
