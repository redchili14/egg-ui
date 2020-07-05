import React, { useState, useEffect } from "react"
import { View, Textarea, TextareaProps } from "remax/one";
import classNames from "classnames"
// import './index.css'

interface Props extends TextareaProps {
    
}

export default function EggTextarea (props: Props) {
    return (
        <View className="egg-textarea">
            <Textarea
                {...props}  // 偷下懒
            />
        </View>
    )
}