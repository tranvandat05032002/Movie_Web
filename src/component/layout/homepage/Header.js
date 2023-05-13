import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext, useAuth } from "context/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import { dataCategory, dataItem } from "utils/const";
import MenuItem from "component/menuTippy/MenuItem";
import { AddIcon } from "component/icon/AddIcon";
import LanguageItem from "component/menuTippy/LanguageItem";
import Button from "component/button/Button";
import AvatarMaterial from "component/image/AvatarMaterial";
import SearchIcon from "component/icon/SearchIcon";
import SearchInput from "module/dashboard/SearchInput";
import TippyLayout from "component/Tippy/TippyLayout";
import { CloseIconSVG } from "component/icon/SVG";
import { SearchContext } from "context/search-context";
import LogoIcon from "component/icon/LogoIcon";
const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  top: 0%;
  left: 0%;
  z-index: 500;
  transition: 0.2s ease-in-out;
  height: var(--height-header);
  a {
    &:hover {
      color: white;
    }
  }
`;
const Header = ({ hideOnClick = false, visible }) => {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
  };
  const handleSignIn = () => {
    navigate("/sign-in");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleJoin = async () => {
    if (user && Object.keys(user).length !== 0) {
      signOut(auth);
      navigate("/sign-up");
    }
  };
  const { toggleSearch, setToggleSearch } = React.useContext(SearchContext);
  const toggleShowSearch = () => {
    setToggleSearch(!toggleSearch);
  };
  return (
    <HeaderStyles
      className={`bg-bgPrimary ${
        !visible && "translate-y-[-200%] transition-all"
      }`}
    >
      <div className="container flex items-center justify-between w-full p-[34px]  max-h-3">
        <div className="flex items-center justify-around  flex-nowrap max-w-[500px] w-[500px]">
          <NavLink to="/" className="w-[153px] h-[50px]">
            <div className="flex items-center justify-between w-full h-full">
              {" "}
              <LogoIcon width={41} height={76}></LogoIcon>
              <span>TRANVANDAT</span>
            </div>
          </NavLink>

          {dataCategory.length > 0 &&
            dataCategory.map((item) => (
              <MenuItem
                key={uuidv4()}
                hideOnClick={hideOnClick}
                item={item}
              ></MenuItem>
            ))}
          {toggleSearch ? (
            <CloseIconSVG
              width={30}
              height={30}
              className={"cursor-pointer"}
              onClick={toggleShowSearch}
            ></CloseIconSVG>
          ) : (
            <SearchIcon
              className="w-[30px] h-[30px] cursor-pointer"
              onClick={toggleShowSearch}
            ></SearchIcon>
          )}
        </div>
        <div className="flex items-center justify-around  flex-nowrap max-w-[400px] w-[400px]">
          <TippyLayout
            content={"Can't find a movie or TV show? Login to create it."}
            placement="bottom"
            delay={[0, 200]}
            maxWidth="200px"
          >
            <div className="w-[30px] h-[30px]">
              <img src={AddIcon} className="w-full h-full" alt="" />
            </div>
          </TippyLayout>

          {dataItem.length > 0 &&
            dataItem.map((item) => (
              <LanguageItem key={uuidv4()} item={item}></LanguageItem>
            ))}
          <button onClick={handleJoin}>join TMDB</button>
          {!user?.email ? (
            <>
              <Button
                to="/sign-in"
                kind="buttonSecondary"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button kind="buttonSecondary" onClick={handleSignUp}>
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Button kind="buttonSecondary" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          )}
          {Object.keys(user).length !== 0 && (
            <>
              <AvatarMaterial
                title={user?.photoURl}
                url={user?.photoURL}
              ></AvatarMaterial>
            </>
          )}
        </div>
      </div>
      <SearchInput
        hiddenButton={false}
        className={`${toggleSearch ? "opacity-[1]" : "hidden"} transition-all`}
      ></SearchInput>
    </HeaderStyles>
  );
};

export default Header;
