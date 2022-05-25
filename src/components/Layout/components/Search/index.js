import { useEffect, useState,useRef } from "react";
import classNames from "classnames/bind";
import styles from './Search.module.scss'
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper'
import AccountItem from '../../../AccountItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
export default function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(true)
  const [loading, setLoading] = useState(false)
  const imputRef =useRef()
  useEffect(() => {
    if(!searchValue){
      setSearchResult([])
      return ;
    }
    setLoading(true)
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
    .then(res=> res.json())
    .then((res)=>{
      setSearchResult(res.data)
      setLoading(false)
    })
    .catch(()=>{
      setLoading(false)
    })
  }, [searchValue]);
  const handleHiddenResults = ()=> {
    setShowResults(false)
  }
  // xoá từ khoá tìm kiếm
  const handleClear = ()=> {
    setSearchValue('')
    setSearchResult([])
    imputRef.current.focus()
    console.log(setSearchResult);
  }
  return (
    <HeadlessTippy
      interactive
      visible={showResults && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>
              Accounts
            </h4>
            {searchResult.map((result)=>
             <AccountItem key={result.id} data={result}/>
            )}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHiddenResults}
    >
      <div className={cx('search')}>
        <input ref={imputRef} value={searchValue} type="text" placeholder='Search accounts and videos' spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)} 
          onFocus={()=>setShowResults(true)}/>
        {!!searchValue && !loading &&
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        }
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>

  )
}


