import React from 'react'
import Header from '../../Layout/components/Header'
import styles from '../../Layout/DefaultLayout/DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import Sidebar from './Sidebar'

const cx = classNames.bind(styles)

export default function DefaultLayout({children}) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className = {cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          {children}
        </div>
      </div>

    </div>
  )
}
