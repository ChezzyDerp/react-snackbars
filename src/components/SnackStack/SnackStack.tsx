import React, { FC, useMemo } from 'react'
import styles from './SnackStack.module.css'


type SnackStackProps = {
  children: JSX.Element | JSX.Element[],
  max?: number
}


const SnackStack:FC<SnackStackProps> = ({children, max}) => {

  const childs = useMemo(() =>{
    if( Array.isArray(children)){
      return  [...children].splice(0, max || 5).map((child, index) => {
        return React.cloneElement(child, {...child.props, key: index})
      })
    }
    return children

  },[children, max])

  return (
    <div className={styles.SnackStack}>

      {childs}
           
    </div>
  )
}

export default SnackStack