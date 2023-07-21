import classNames  from 'classnames/bind'
import styles from './Shop.module.scss'

import FilterProducts from './FilterProducts'
import SortFilter from './SortFilter'
import ProductList from './ProductList'

const cx = classNames.bind(styles);

const Shop = () => {
  return (
    <div className={cx('wrapper')}>
     <div className={cx('container')}>
      <div>
          <FilterProducts/>
        </div>

        <div>
          <SortFilter/>
          <ProductList/>
      </div>
     </div>
    </div>
  )
}

export default Shop