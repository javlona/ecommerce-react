import React, {useState} from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiCartAlt } from "react-icons/bi";
import { CgProfile } from 'react-icons/cg'
import { Menu, Dropdown, Button as Btn, Drawer } from 'antd';
import Button from "../../components/Button";
import HeaderSty from "./style";
import Input from "../../components/Input";
import { Wrapper } from "../../style";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authReducer";
import axios from "../../utils/axios";
import { searchReducer } from "../../store/products";

function Header() {
  const user = useSelector(state => state.auth.token);
  const products = useSelector((state) => state.products);

  const cartItems = 2;
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const searchQueryHandler = (e) => { setQuery(e.target.value) }

  //call redux function
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchReducer(query))
    console.log(products)
  }

  const logoutHandler = () => {
    dispatch(logout());
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const menuProfile = (
    <Menu>
      <Menu.Item>
        <Link to={"/profile"}>My profile</Link>
      </Menu.Item>
      <Menu.Item>
        <p onClick={logoutHandler}>Logout</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderSty>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <div className="header__top">
        <Wrapper display='flex' jc='space-between' ai='center'>
          <h3 className="header__top-msg">Free Delivery</h3>
          <div className="header__top-links">
            {user ? (
              <Dropdown overlay={menuProfile} placement="bottom" arrow>
                <Btn><CgProfile /></Btn>
              </Dropdown>
            ) : (
              <Link to={"/sign-in"}>Sign in</Link>
            )}
            <div className="header__top-lang">Language</div>
            <div className="header__top-currency">USD</div>
          </div>
        </Wrapper>
      </div>
      <div className="header__nav">
        <Wrapper display='flex' jc='space-between' ai='center'>
        <div className="header__nav-logo"><Link to='/'>online store</Link></div>
        <div className="header__nav-links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <div className="header__nav-actions">
          <form onSubmit={ searchHandler }>
            <Input
              className="header__input"
              onChange={ searchQueryHandler }
              type="search"
              name="search"
              placeholder="Search"
            />
            <button className="header__search-button">
              <BiSearch />
            </button>
            <Dropdown overlay={menu} trigger={['click']}>
              <a onClick={e => e.preventDefault()}>
                click me
              </a>
            </Dropdown>
          </form>
          <Button
            title="item(s)"
            type="secondary"
            icon={<BiCartAlt />}
            data={cartItems}
            onClick={showDrawer}
          />
        </div>
        </Wrapper>
      </div>
    </HeaderSty>
  );
}

export default Header;
