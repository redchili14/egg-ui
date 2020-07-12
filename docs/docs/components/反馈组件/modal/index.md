---
  title: Modal
---

# Modal

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| className | 设置类名 | `boolean` | `false` |
| isOpened | 打开状态 | `boolean` | `false` |
| title | 标题 | `string` | - |
| content | 内容 | `string` | - |
| cancelText | 取消文字 | `string` | - |
| confirmText | 确认文字 | `string` | - |
| maskClosable | 是否点击蒙层关闭 | `boolean` | `true` |
| onAfterClose | 关闭后的回调 | `() => void` | - |
| onConfirm | 点击确认的回调 | `() => void` | - |
| onCancel | 点击取消的回调 | `() => void` | - |

## Demo

```jsx
import React, { useState, useEffect } from 'react';
import { 
  EggModal, EggModalHeader, EggModalContent, EggModalAction 
} from '@redchili/egg-ui';
import { View, Button } from 'remax/one';
import './index.css'

export default function modalDemo () {

  const [isOpened, setIsOpened] = useState(false)
  const [isOpened1, setIsOpened1] = useState(false)
  const [isOpened2, setIsOpened2] = useState(false)
  const [isOpened3, setIsOpened3] = useState(false)
  const [isOpened4, setIsOpened4] = useState(false)

  useEffect(() => {
    console.log(isOpened)
  }, [isOpened])

  const handleClick = () => {
    console.log('ddd')
    setIsOpened(true)
  }

  const handCancel = () => {

  }

  return (
    <View>
        <View className="modal_demo">
          <View className="tit">正常使用</View>
          <Button onTap={() => setIsOpened1(true)}>点击</Button>
          <EggModal
            isOpened={isOpened1}
            onAfterClose={() => setIsOpened1(false)}
          >
            <EggModalHeader>我是正常使用标题</EggModalHeader>
            <EggModalContent>我是正常使用内容</EggModalContent>
            <EggModalAction>
              <Button onTap={() => setIsOpened1(false)}>确认</Button>
              <Button>取消</Button>
            </EggModalAction>
          </EggModal>
        </View>
        <View className="modal_demo">
          <View className="tit">简化使用</View>
          <Button onTap={handleClick}>点击</Button>
          <EggModal
            isOpened={isOpened}
            title="我是标题"
            content="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
            confirmText="确认"
            cancelText="取消"
            onAfterClose={() => setIsOpened(false)}
            onCancel={() => setIsOpened(false)}
          />
        </View>
        <View className="modal_demo">
          <View className="tit">单个按钮</View>
          <Button onTap={() => setIsOpened2(true)}>点击</Button>
          <EggModal
            isOpened={isOpened2}
            title="我是标题"
            content="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
            confirmText="确认"
            onAfterClose={() => setIsOpened2(false)}
            onConfirm={() => setIsOpened2(false)}
          />
        </View>
        <View className="modal_demo">
          <View className="tit">无标题</View>
          <Button onTap={() => setIsOpened3(true)}>点击</Button>
          <EggModal
            isOpened={isOpened3}
            content="我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容"
            confirmText="确认"
            onAfterClose={() => setIsOpened3(false)}
            onConfirm={() => setIsOpened3(false)}
          />
        </View>
    </View>
  );
};

```
