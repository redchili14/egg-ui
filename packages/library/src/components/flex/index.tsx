import React from 'react'
import { View } from 'remax/one'
import classNames from 'classnames';
import { FlexPropsType } from './PropsType';
// import './index.css'

interface Props extends FlexPropsType {
    customizeStyle?: React.CSSProperties
    className?: string
    children: React.ReactNode | string
}

export default function Flex(props: Props) {

    const { 
        wrap,
        align,
        justify,
        children,
        direction,
        className,
        alignContent,
        customizeStyle,
    } = props;

    const classNameProps = 
        classNames('egg-flexbox', className, `align-${align}`, `justify-${justify}`, wrap, direction, alignContent ? `alignContent-${alignContent}` : '')

    return (
        <View style={customizeStyle} className={classNameProps}>
            {children}
        </View>
    )
}

Flex.defaultProps = {
    align: 'center',
    justify: 'start',
    // wrap: 'nowrap',
    // direction: 'row',
    // alignContent: 'start'
}