import React from 'react'
import classNames from 'classnames/bind';
import Button from '../../../Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

export default function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  })
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

