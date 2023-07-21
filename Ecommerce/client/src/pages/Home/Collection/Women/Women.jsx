import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import women1 from '../../../../assets/images/women1.jpg'
import women2 from '../../../../assets/images/women2.jpg'
import women3 from '../../../../assets/images/women3.jpg'

import classNames  from 'classnames/bind'
import styles from './Women.module.scss'
import {AiFillStar} from 'react-icons/ai'

const cx = classNames.bind(styles);

const womenCollection = [
  {
    images: women1,
    name: "Spring Collection",
    price: "120,000"
  },
  {
    images: women2,
    name: "Classic Spring",
    price: "120.00"
  },
  {
    images: women3,
    name: "Classic Dress",
    price: "45.000"
  },
  {
    images: women1,
    name: "Classic Dress",
    price: "45.000"
  },
]


const Women = () => {
  return (
    <div className={cx('wrapper')}>
    <h3 className={cx('heading')}>Women's Latest</h3>
    <p className={cx('title')}>Details to details is what makes Hexashop different from the other themes</p>
    <div className="products">
      <Swiper
         // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={window.innerWidth >= 768 ? 3 : 1} 
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
      >
        {womenCollection.length > 0 && womenCollection.map((item,index) => (
          <SwiperSlide key={index}>
            <div className={cx('listItems')}>
              <img className={cx('images')} src={item.images} alt="" />
              <div className={cx('content')}>
                <div className={cx('text')}>
                  <p className={cx('name')}>{item.name}</p>
                  <p className={cx('price')}>${item.price}</p>
                </div>
                <div className={cx('rate')}>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
              </div>
              <button className={cx('btnCart')}>Add To Cart</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  </div>
  )
  
}

export default Women