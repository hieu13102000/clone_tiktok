import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'; // different import path!

import { Wrapper as PopperWrapper } from '../../Popper'
import styles from './Header.module.scss'
import images from '../../../../assets/images'
import AccountItem from '../../../AccountItem'

const cx = classNames.bind(styles)

export default function Header() {
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0)
  }, [])
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='logo' />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
             <h4 className={cx('search-title')}>
               Accounts
             </h4>
             <AccountItem/>
             <AccountItem/>
             <AccountItem/>
             <AccountItem/>
            </PopperWrapper>
              </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder='Search accounts and videos' spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>

        </div>
      </div>
    </div>
  )
}
