import React, { useState } from 'react';
import { View, Image } from 'remax/one';
import classNames from 'classnames';

interface Props {
    text?: string;
    img?: string;
    imgWidth?: string
    imgHeight?: string
    style?: React.CSSProperties
}

export default function Empty (props: Props) {

    return (
        <View className="egg-empty__">
            {
                props.img ? <Image src={props.img} /> : ''
            }
            {
                props.text ? <View>{props.text}</View> : ''
            }
        </View>
    )
}