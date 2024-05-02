import { MdOutlineSettings, MdLogout } from "react-icons/md";

const State = () => {
  return (
    <>
      <header>
        <a href="/config">
          <MdOutlineSettings />
        </a>
        <a href="/login">
          <MdLogout />
        </a>
      </header>
      <h1>Estados</h1>
    </>
  );
};

export default State;
