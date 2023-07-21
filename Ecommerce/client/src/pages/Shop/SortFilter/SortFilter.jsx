import classNames from 'classnames/bind'
import styles from './SortFilter.module.scss'

import {LuTable} from 'react-icons/lu'
import {HiMenuAlt2} from 'react-icons/hi'

const cx = classNames.bind(styles)


const SortFilter = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <LuTable className={cx('table')}/>
        <HiMenuAlt2 className={cx('menu')}/>
      </div>
      <div className={cx('right')}>
        <label>Price </label>
        <select>
          <option value="tangdan">Tăng dần</option>
          <option value="giamdan">Giảm dần</option>
        </select>
      </div>
    </div>
  )
}

export default SortFilter