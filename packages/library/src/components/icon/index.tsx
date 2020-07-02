import React from 'react'
import { View } from "remax/one";
import classNames from 'classnames';
// @ts-ignore
import * as eva from 'eva-icons';
import { EvaFillSvgType, EvaOutLineSvgType } from './types'
import hexToRgb from './hexToRgb'
import './index.css'

type animationType = 'zoom' | 'pulse' | 'shake' | 'flip'

interface Props {
    width?: number
    height?: number
    icon: EvaFillSvgType | EvaOutLineSvgType | string
    color?: string
    className?: string
    customizeStyle?: React.CSSProperties
    animation?: animationType | {
        type: animationType,
        infinite: boolean
    }
}

export default function EggIcon (prop : Props) {
    const { 
        width, height, color, className, customizeStyle, animation
    } = prop

    const classNameProps = classNames(
        'egg-icon', 
        className,
        {'eva-animation': animation},
        {'eva-infinite': typeof animation === "object" && animation.infinite},
        {[`eva-icon-${typeof animation === "string" ? animation : animation?.type}`]: animation},
    )

    return (
        <View>
            <View
            className={classNameProps}
            style={{
                width: `${width}px`,
                height: `${height || width}px`,
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="${hexToRgb(color || '#000')}" viewBox="0 0 24 24">${eva.icons[prop.icon].contents}</svg>')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                ...customizeStyle,
            }}
            />
        </View>
    )
}

EggIcon.defaultProps = {
    width: 36,
}