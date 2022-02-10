import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavBarStyled = styled.nav`
  background-color: pink;
  height: 10vh;

  > ul {
    list-style: none;

    > li {
      display: inline-block;
      padding: 15px;
      border: 1px solid black;
      &:hover {
        cursor: pointer;
        background-color: white;
      }
    }
  }

  .active {
    cursor: pointer;
    background-color: white;
  }
`;

export const NavBar = () => {
  const navigation = useNavigate();
  const { pathname } = useLocation();

  const splitLocation = pathname.split("/");

  // const getOnClick = (page) => () => navigation(page)
  return (
    <NavBarStyled>
      <ul>
        <li
          className={splitLocation[1] === "" ? "active" : ""}
          onClick={() => navigation("/")}
        >
          Home
        </li>
        <li
          className={splitLocation[1] === "pilots" ? "active" : ""}
          onClick={() => navigation("/pilots")}
        >
          Pilots
        </li>
        <li
          className={splitLocation[1] === "starships" ? "active" : ""}
          onClick={() => navigation("/starships")}
        >
          Starships
        </li>
      </ul>
    </NavBarStyled>
  );
};
