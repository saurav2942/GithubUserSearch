const img = new URL("../Assets/icon.png", import.meta.url);
import { useSelector } from "react-redux";

const Body = () => {
  const compTheme = useSelector((store) => store.theme.compTheme);
  const bgTheme = useSelector((store) => store.theme.bgTheme);
  const col1 = useSelector((store) => store.style.col1);
  const col2 = useSelector((store) => store.style.col2);
  const user = useSelector((store) => store.user.userData);
  const shadow = useSelector((store) => store.style.shadow);
  // console.log(shadow);

  // Using Date() constructor
  let date = new Date(user?.created_at);
  date = date.toDateString();
  date = date.split(" ");
  date[0] = "Joined";
  date = date.join(" ");

  return (
    <div
      className="flex items-center justify-between relative py-5 px-2 md:px-10 rounded-2xl shadow-xl"
      style={{
        backgroundColor: compTheme,
        boxShadow: `0px 0px 30px ${shadow}`,
      }}
    >
      <div className="w-full md:ml-[10rem]">
        <div className="flex justify-between mb-3">
          <img
            src={user?.avatar_url}
            className="md:absolute md:top-5 md:left-8 top-0 left-0 relative w-[7rem] rounded-full p-2 mr-3"
          ></img>
          <div className="w-full flex flex-col md:flex-row justify-center md:justify-between">
            <div>
              <h1 className="text-[1.5rem] font-bold" style={{ color: col1 }}>
                {user?.name}
              </h1>
              <a
                href={user?.html_url ? user?.html_url : "#"}
                className="text-darkBlue underline min-w-full"
              >
                {"@" + user?.login}
              </a>
            </div>
            <h3 className="md:pt-2" style={{ color: col2 }}>
              {date}
            </h3>
          </div>
        </div>
        <p style={{ color: col2 }}>
          {user?.bio ? user?.bio : "No Bio Available"}
        </p>
        <div
          className="flex items-center justify-center px-5 py-3 rounded-lg my-5"
          style={{ backgroundColor: bgTheme }}
        >
          <div className="w-[32%]">
            <h3 className="mb-2 text-xs" style={{ color: col2 }}>
              Repos
            </h3>
            <h1 className="text-dark font-bold text-lg" style={{ color: col1 }}>
              {user?.public_repos}
            </h1>
          </div>
          <div className="w-[32%]">
            <h3 className="mb-2 text-xs" style={{ color: col2 }}>
              Followers
            </h3>
            <h1 className="text-dark font-bold text-lg" style={{ color: col1 }}>
              {user?.followers}
            </h1>
          </div>
          <div className="w-[32%]">
            <h3 className="mb-2 text-xs" style={{ color: col2 }}>
              Following
            </h3>
            <h1 className="text-dark font-bold text-lg" style={{ color: col1 }}>
              {user?.following}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Location */}
          <div className="flex gap-2 items-center py-2" style={{ color: col2 }}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="15"
                viewBox="0 0 384 512"
              >
                <path
                  fill={col2}
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </div>
            <p>{user?.location ? user?.location : "Not Available"}</p>
          </div>
          {/* website */}
          <div className="flex gap-2 items-center" style={{ color: col2 }}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="22"
                viewBox="0 0 640 512"
              >
                <path
                  fill={col2}
                  d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                />
              </svg>
            </div>
            <div className="truncate">
              <a className="underline" href={user?.blog ? user?.blog : "#"}>
                {user?.blog ? user?.blog : "Not Available"}
              </a>
            </div>
          </div>
          {/* Twitter */}
          <div className="flex gap-2 items-center py-2" style={{ color: col2 }}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill={col2}
                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                />
              </svg>
            </div>
            <a
              className="underline"
              href={
                user?.twitter_username
                  ? "https://twitter.com/" + user?.twitter_username
                  : "#"
              }
            >
              {user?.twitter_username
                ? user?.twitter_username
                : "Not Available"}
            </a>
          </div>
          {/* company */}
          <div className="flex gap-2 items-center py-2" style={{ color: col2 }}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="16"
                viewBox="0 0 384 512"
              >
                <path
                  fill={col2}
                  d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"
                />
              </svg>
            </div>
            <p>{user?.company ? user?.company : "Not Available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
