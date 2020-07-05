import React from "react"
import { View, RadioGroupProps, RadioGroup } from "remax/wechat";
// import classNames from "classnames"
// import './index.css'

interface Props extends RadioGroupProps {
    
}

export default function EggRadioGroup (props: React.PropsWithChildren<Props>) {
    return (
        <View className="egg-radio-group">
            <RadioGroup
                {...props}  // 偷下懒
            >
                {props.children}
            </RadioGroup>
        </View>
    )
}