import React, { useState } from "react"
import classNames from "classnames"
import { View } from "remax/one"
// import './index.css'

interface Props {
    className?: string
    circle?: boolean
    disable?: boolean
    name?: string
    active?: boolean
    size?: 'small' | 'normal'
    onClick?: Function
    customStyle?: React.CSSProperties
}

export default function EggTag(props: React.PropsWithChildren<Props>) {
    const { size, circle, disable, active, onClick, customStyle } = props

    const [_active, set_active] = useState<boolean>(active || false)

    const propsClassNames = classNames(
        "egg-tag",
        {[`egg-tag--${size}`]: size},
        {'egg-tag--active': _active},
        {'egg-tag--disable': disable},
        {'egg-tag--circle': circle}
    )

    const handleClick = () => {
        if (!disable) {
            set_active(!_active)
            if (typeof onClick === "function") {
                onClick({
                    name: props.name,
                    active: !_active,
                })
            }
        }
    }

    return (
        <View onTap={handleClick} className={propsClassNames} style={customStyle}>{props.children}</View>
    )
}

EggTag.defaultProps = {
    size: 'normal',
    disable: false,
    active: false,
    circle: false,
    name: '',
}