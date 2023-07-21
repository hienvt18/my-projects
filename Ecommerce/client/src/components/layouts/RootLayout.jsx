import { Outlet } from "react-router-dom"
import classNames  from 'classnames/bind'
import styles from './RootLayout.module.scss'
import Footer from "./Footer"
import Header from "./Header"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles)


const RootLayout = () => {
  return (
    <>
      <div className={cx('wrapper')}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
      <ToastContainer/>
    </>
  )
}

export default RootLayout