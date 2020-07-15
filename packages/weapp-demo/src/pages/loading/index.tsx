import React from 'react';
import { EggLoading } from '@redchili/egg-ui';
import { View } from 'remax/one';
import './index.css'

export default function Tag() {

    return (
        <View>
            <EggLoading loading={false} type="box">
                <View  style={{ width: '400px', height: '400px', backgroundColor: '#FFCF5C'}}>内容内容</View>
            </EggLoading>
            <EggLoading loading type="box">
                <View  style={{ width: '400px', height: '400px', backgroundColor: '#0084F4'}}>内容内容</View>
            </EggLoading>
            {/* <EggLoading type="circle" /> */}
        </View>
    )
}