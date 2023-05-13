import LogoIcon from "component/icon/LogoIcon";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const FooterStyles = styled.div`
  margin-top: var(--margin-top);
  width: 100%;
  color: ${(prop) => prop.theme.textPrimary};
  h1 {
    color: white;
    font-size: 24px;
  }
  li,
  a {
    font-size: 19px;
    cursor: pointer;
    margin-top: 1px;
    &:hover {
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles className="text-[25px] bg-bgPrimary py-[20px]">
      <div className="flex justify-center w-full h-full">
        <div className="h-full w-[150px]">
          <NavLink to="/" className="w-[150px] h-[50px]">
            {/* <img src="/logo.png" className="w-full h-[50px] " alt="" />
            <LogoIcon></LogoIcon> */}
            <div className="flex flex-col items-center justify-between w-full h-full">
              {" "}
              <LogoIcon width={51} height={86}></LogoIcon>
              <span>TRANVANDAT</span>
            </div>
          </NavLink>
        </div>
        <div className="flex max-w-[480px] w-full justify-between mx-[30px]">
          <div>
            <ul className="text-start">
              <h1>Movies</h1>
              <li>Popular</li>
              <li>Trending</li>
              <li>Top Rated</li>
              <li>Now Playing</li>
            </ul>
          </div>
          <div>
            <ul className="text-start">
              <h1>Movies</h1>
              <li>Popular</li>
              <li>Trending</li>
              <li>Top Rated</li>
              <li>Now Playing</li>
            </ul>
          </div>
          <div>
            <ul className="text-start">
              <h1>Movies</h1>
              <li>Popular</li>
              <li>Trending</li>
              <li>Top Rated</li>
              <li>Now Playing</li>
            </ul>
          </div>
        </div>
        <div className="leading-[32px] flex justify-start items-end">
          <div>
            <h1>Contact</h1>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwTmCdFcDPvpJBrnvnDvNzrxwXJWHrsprGFGrDdbnCxnpwxPZxhkXSflXgwSXwLctCJsQ">
              21T1020285@husc.edu.vn
            </a>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
