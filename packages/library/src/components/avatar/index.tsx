import React from 'react'
import { View, Image } from 'remax/one'
import classNames from 'classnames';
// import './index.css'

interface Props {
    size?: 'large' | 'normal' | 'small'
    type?: 'circle' | 'radio'
    image?: string
    className?: string
}

export default function EggAvatar(props: Props) {

    const propsClassName = classNames(
        "egg-avatar", 
        props.className, 
        {[`egg-avatar--${props.type}`]: props.type},
        {[`egg-avatar--${props.size}`] : props.size}
    )

    return (
        <View
          className={propsClassName}
        >
            {
                props.image ? (
                    <Image className="avatar-image" src={props.image} />
                ) : ''
            }
        </View>
    )
}

EggAvatar.defaultProps = {
    size: 'normal',
    type: 'circle'
}