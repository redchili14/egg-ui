import React from 'react'
import { View } from 'remax/one'
import classNames from 'classnames'
import BallSpin from './ball-spin'
import LineSpin from './line-spin'

import "./min.css"
import "./index.css"


interface Props {
    type: 'box' | 'circle'
    loading: boolean
    loadingText?: string
}


export default function EggLoading(props: React.PropsWithChildren<Props>) {
    const { type, loadingText, loading } = props;

    const typeClassNames = classNames(
        { [`${type}-loading`]: type },
    )

    const propsIconClassName = classNames(
        'loading--icon',
        { 'loading--show-text': Boolean(loadingText) },
        { 'show-loading': loading },
        { 'hidden-loading': !loading },
    )

    return (
        <View className="egg-loading">
            {/* <BallSpin /> */}
            {/* <LineSpin /> */}
            <View className="load-container">
                <View className={propsIconClassName}>
                    <View className="icon-container icon">
                        <BallSpin />
                    </View>
                    {
                        loadingText ? (
                            <View className="loading--text">{loadingText}</View>
                        ) : ''
                    }
                </View>
                {props.children ? (
                    <View className={`loading-children ${loading ? 'show' : 'hidden'}`}>
                        {props.children}
                    </View>
                ) : ''}
            </View>
        </View>

    )
}

EggLoading.defaultProps = {
    type: 'circle'
}