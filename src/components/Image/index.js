import {React,useState, forwardRef} from 'react'
import classNames from 'classnames'
import images from '../../assets/images'
import styles from './image.module.scss'

const Image = forwardRef(({src, alt, className, Fallback: customFallback = images.noImage,...props},ref) => {
  const [Fallback, setFallback] = useState('')
  const handleError = () => setFallback(customFallback)

  return (
   <img className={classNames(styles.wrapper,className)} {...props} ref={ref} src={Fallback || src} alt={alt} onError={handleError}/>
  )
})

export default Image
