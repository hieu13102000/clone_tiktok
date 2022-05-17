import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

export default function AccountItem() {
    return (
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6908884d456906059d4818698a7ad42a~c5_100x100.jpeg?x-expires=1652976000&x-signature=TnMDrqRqcKNo3r8IScOnruhk0d4%3D' alt='hhh' />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span> Nguyen van a</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}> Nguyen van a</span>
                </div>
            </div>
    )
}
