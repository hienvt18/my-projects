import classNames  from 'classnames/bind';
import styles from "./Header.module.scss"

import avatar from '../../../assets/images/avatar.png'
import logo from '../../../assets/images/logo.png'
import { BiMenu, BiShoppingBag } from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom';

import { useContext, useState } from 'react';
import { StateContext } from '../../../store/StateProvider';

import app from '../../../firebase/firebase.config'
import { GoogleAuthProvider, getAuth, signInWithPopup  } from "firebase/auth"

const cx = classNames.bind(styles);

const menuList = [
  {
    title: "Home",
    to: "/"
  },
  {
    title: "Shop",
    to: "/shop"
  },
  {
    title: "About",
    to: "/about"
  },
  {
    title: "Contact",
    to: "/contact"
  },
  {
    title: "Blog",
    to: "/blog"
  },
]




const Header = () => {
  const { state } = useContext(StateContext);
  const { totalItems, user } = state;
  const [open, setOpen] = useState(false)


  const { setUser } = useContext(StateContext)

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider(app)

  const handleLogin = async() => {
      const {user: { providerData }} = await signInWithPopup(auth, provider)
      setUser(providerData[0])
      localStorage.setItem('user', JSON.stringify(providerData[0]))
  }


  return (
    <div className={cx('wrapper')}>
      {/* Left header */}
      <div className={cx('left')}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      {/* Middle Header */}
      <div className={cx('middle')}>
        <nav className={cx('navList')}>
            {menuList.length > 0 && menuList.map((item,index) => (
              <NavLink to={item.to}  key={index} className={cx('navLink')} activeclassname={cx('active')}  >
                  {item.title}
              </NavLink>
            ))}
        </nav>
      </div>
      {/* Right header */}
      <div className={cx('right')}>
        {/* Action */}
        <div className={cx('actions')}>
          <Link to="cart">
            <BiShoppingBag className={cx('btnCart')}/>
            <span className={cx('quantity')}>{totalItems}</span>
          </Link> 
            <img className={cx('avatar')} src={user ? user.photoURL : avatar} alt="" onClick={handleLogin} />
        </div>

        {/* Menu Responsive */}
        <div onClick={() => setOpen(!open)}>
          {open ? (
          <AiOutlineClose className={cx('dropMenu')}/>
          ): (<BiMenu className={cx('dropMenu')}/>)}
        </div>
      </div>

    {/* Menu Mobile */}
      {open && (
        <div className={cx('menuMoblie')} onClick={() => setOpen(false)}>
          <nav className={cx('dropList')}>
              {menuList.length > 0 && menuList.map((item,index) => (
                  <NavLink to={item.to}  key={index} className={cx('dropLink')} activeclassname={cx('active')}  >
                      {item.title}
                  </NavLink>
              ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default Header