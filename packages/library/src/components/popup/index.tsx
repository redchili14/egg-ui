import React, { useState, useEffect } from "react"
import { View } from "remax/one";
import classNames from "classnames"
// import './index.css'

interface Props {
    isOpened: boolean
    position?: 'bottom' | 'left' | 'top' | 'right'
    onClose?: Function
    square?: boolean
    maskClosable?: boolean
}

export default function EggPopup(props: React.PropsWithChildren<Props>) {
    const { 
        position, onClose, square, maskClosable
    } = props;
    const [_isOpened, set_isOpened] = useState(props.isOpened)
    const propsClassNames = classNames(
        "egg-popup", 
        { "egg-popup--active": _isOpened },
    )

    useEffect(() => {
		if (props.isOpened !== _isOpened) {
			set_isOpened(props.isOpened)
		} 
    }, [props.isOpened])
    
    const handleClose = () => {
        if (maskClosable && typeof onClose === "function") {
            onClose()
        }
    }

    const containerClassNames = classNames(
        'egg-action-sheet__container', 
        { [`${position}`]: position },
        { "egg-popup--square": square },
    )

    return (
        <View className={propsClassNames}>
            <View onTap={handleClose} className="egg-popup__overlay"></View>
            <View className={containerClassNames}>
                {props.children}
            </View>
        </View>
    )
}

EggPopup.defaultProps = {
    isOpened: false,
    position: 'bottom',
    square: false,
    maskClosable: true,
}