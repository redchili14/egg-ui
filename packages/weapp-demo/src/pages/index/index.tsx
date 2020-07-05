import React from 'react';
import { View, Text, navigateTo, TapEvent } from 'remax/one';

import './index.css'

export default function Index() {

    const item = [
        {
            name: 'button',
            url: '/pages/button/index'
        },
        {
            name: 'avatar',
            url: '/pages/avatar/index'
        },
        {
            name: 'tag',
            url: '/pages/tag/index'
        },
        {
            name: 'icon',
            url: '/pages/icon/index'
        },
        {
            name: 'input',
            url: '/pages/input/index'
        },
        {
            name: 'popup',
            url: '/pages/popup/index'
        },
        {
            name: 'modal',
            url: '/pages/modal/index'
        },
        {
            name: 'radio',
            url: '/pages/radio/index'
        },
        {
            name: 'textarea',
            url: '/pages/textarea/index'
        },
    ]

    const handleClick = (e: TapEvent) => {
        const { url } = e.target.dataset;
        navigateTo({
            url,
        })
    }

    return (
        <View>
            <View className="logo"></View>
            <View className="title">
                Egg-UI 基于 Remax 实现的 UI 组件库
            </View>
            <View className="list">
                {
                    item.map(item => (
                        <View key={item.name} data-url={item.url} onTap={(e) => handleClick(e)} className="item">
                            <Text>{item.name}</Text>
                            <Text style={{color: '#ccc'}}>&gt;</Text>
                        </View>
                    ))
                }
               
            </View>
        </View>
    );
};
