import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleQuestion,faCircleXmark,faCoins,faEarthAsia,faEllipsisVertical,faGear,faKeyboard,faMagnifyingGlass,faSignOut,faSpinner,faUser,} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';


import styles from './Header.module.scss'
import images from '../../../../assets/images'

import Button from '../../../Button'
import Menu from '../../Popper/Menu'
import { UploadIcon } from '../../../Icons';
import Image from '../../../Image';
import Search  from '../Search';


const cx = classNames.bind(styles)
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  }
]
let currentUser = true
export default function Header() {
  const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle change language
        break
      default:
    }
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='logo' />
        </div>
<Search/>



       



        <div className={cx('actions')}>
          {currentUser ? (
           <>
           <Tippy target='tomo' content="Upload videos" placement='bottom'>
               <button className={cx('action-btn')}>
             <UploadIcon/>
               </button>
           </Tippy>
           </>
          ) : (
            <>
              <Button text >Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/775f1f16c090cec86d9e1f82fc1cf26e~c5_100x100.jpeg?x-expires=1653476400&x-signature=ejUFZmn3l35AupfCs8qqJN3DAqc%3D"
                                alt="erro images"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
        </div>
      </div>
    </div>
  )
}
