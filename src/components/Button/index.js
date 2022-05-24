import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)

export default function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    small = false,
    large = false,
    disabled = false,
    children,
    leftIcon,
    rightIcon,
    onClick,
     ...passProps }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }
    if (disabled){
        Object.keys(props).forEach(key =>{
            if ( key.startsWith('on')&& typeof[key]=== 'function')
            {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to
        Comp = Link
    }
    else if (href) {
        props.href = href
        Comp = 'a'

    }
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        small,
        large,
        disabled,
        leftIcon,
        rightIcon,

    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className = {cx('icon')}>{leftIcon}</span>}
            <span  className={cx('title')}>{children}</span>
            {rightIcon && <span className = {cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}
