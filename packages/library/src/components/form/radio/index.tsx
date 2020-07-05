import React from "react"
import { View, Radio, RadioProps } from "remax/wechat";
import classNames from "classnames"
// import './index.css'

interface Props extends RadioProps {
    
}

export default function EggRadio (props: React.PropsWithChildren<Props>) {
    return (
        <View className="egg-radio">
            <Radio
                {...props}  // 偷下懒
            >
                {props.children}
            </Radio>
        </View>
    )
}