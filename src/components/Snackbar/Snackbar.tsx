import React, { FC, useEffect, useState } from 'react'
import styles from './Snackbar.module.css'
import closeIcon from '../../assets/img/close-icon.svg'
import succesIcon from '../../assets/img/success-icon.svg'
import errorIcon from '../../assets/img/error-icon.svg'
import warningIcon from '../../assets/img/warning-icon.svg'


type SnackbarProps = {

    open: boolean,
    children: JSX.Element | JSX.Element[] ,
    timeout?: number,
    changeValue: (state: boolean) => void,
    view?: string
    
}

const Snackbar:FC<SnackbarProps> = ({open, children, timeout, changeValue, view}) => {


    const [diedAnim, setDiedAnim] = useState(false)
    
    const closeSnackbar = () => {
        setTimeout(() =>{
            setDiedAnim(true)
        }, 200)
        setTimeout(() =>{
            changeValue(false)
        },350)
    }
    type variantT = {
        color: string,
        icon: any
    }
    const variant = (): variantT => {
        switch (view) {
            case 'error':
                return {
                    color: '#eb5454',
                    icon: errorIcon
                }
            case 'warning':
                return{
                    color:'#ebe654',
                    icon: warningIcon
                }
            default:
                return {
                    color: '#77e65c',
                    icon: succesIcon
                }
        }
    }

    useEffect(() =>{

        const styleTimer = setTimeout(() =>{
            setDiedAnim(true)
        }, timeout? timeout - 200 : 2500 - 200)

        const timer = setTimeout(() => {
            changeValue(false)
    
        }, timeout || 2500)
        return () => {
            clearTimeout(timer)
            clearTimeout(styleTimer)
            setDiedAnim(false)
        }
    }, [changeValue, open, timeout])

    return (
       <>
        {
            open && <div
                        style={{backgroundColor: variant().color}}
                        className={`${styles.Snackbar} ${diedAnim && styles.died}`}
                    >

                        <img className={styles.icon} src={variant().icon} alt="" />

                        <div className={styles.children}>
                            {children}
                        </div>
                                
                        <img className={styles.close} onClick={closeSnackbar} src={closeIcon} alt="" />

                    </div>  
        }
       </>
      
    )
}

export default Snackbar