import React from 'react'
 import classNames from 'classnames/bind'
 import styles from '../Popper/Popper.module.scss'

 const cx = classNames.bind(styles)
 
export default function Wrapper({ children, className }) {
  return <div className={cx('wrapper', className)}>{children}</div>
}
