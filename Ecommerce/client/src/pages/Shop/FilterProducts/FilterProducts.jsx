import classNames  from 'classnames/bind'
import styles from './FilterProducts.module.scss'

const cx = classNames.bind(styles)


const FilterProducts = () => {
  return (
    <div className={cx('wrapper')}>
        <h3 className={cx('heading')}>Category</h3>
        <nav className={cx('navList')}>
          <li className={cx('navLink')}>All</li>
          <li className={cx('navLink')}>Men's</li>
          <li className={cx('navLink')}>Women's</li>
          <li className={cx('navLink')}>Kid's</li>
        </nav>
    </div>
  )
}

export default FilterProducts