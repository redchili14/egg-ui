---
  title: Popup
---

# Popup

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| className | 设置类名 | boolean | `false` |
| isOpened | 打开状态 | boolean | `false` |
| position | 弹出的未知 | `bottom` \| `left` \| `top` \| `right` \|
| square | 是否圆角 | boolean | `false` |
| maskClosable | 是否点击蒙层关闭 | boolean | `true` |
| onClose | 关闭时的回调 | () => void | - |

## Demo

```jsx
  import React, { useState } from "react"
  import { EggPopup } from "@redchili/egg-ui"
  import { View, Button } from "remax/one"
  import './index.css'

  export default function Popup() {
      const [isOpened, setIsOpened] = useState(false)
      const [isOpened1, setIsOpened1] = useState(false)
      const [isOpened2, setIsOpened2] = useState(false)
      const [isOpened3, setIsOpened3] = useState(false)
      const [isOpened4, setIsOpened4] = useState(false)

      
      return (
          <View>
              <View className="popup_demo">
                  <View className="tit">正常弹窗</View>
                  <Button onTap={() => setIsOpened(true)} >点击</Button>
                  <EggPopup onClose={() => setIsOpened(false)} isOpened={isOpened}>我是内容</EggPopup>
              </View>
              <View className="popup_demo">
                  <View className="tit">左边弹窗</View>
                  <Button onTap={() => setIsOpened1(true)} >点击</Button>
                  <EggPopup onClose={() => setIsOpened1(false)} isOpened={isOpened1} position="left" />
              </View>
              <View className="popup_demo">
                  <View className="tit">右边弹窗</View>
                  <Button onTap={() => setIsOpened2(true)} >点击</Button>
                  <EggPopup onClose={() => setIsOpened2(false)} isOpened={isOpened2} position="right" />
              </View>
              <View className="popup_demo">
                  <View className="tit">上边弹窗</View>
                  <Button onTap={() => setIsOpened3(true)} >点击</Button>
                  <EggPopup onClose={() => setIsOpened3(false)} isOpened={isOpened3} position="top" />
              </View>
              <View className="popup_demo">
                  <View className="tit">去掉圆角</View>
                  <Button onTap={() => setIsOpened4(true)} >点击</Button>
                  <EggPopup square onClose={() => setIsOpened4(false)} isOpened={isOpened4}>
                      <View style={{ height:'500rpx'}}>我是高度500的内容</View>
                  </EggPopup>
              </View>
          </View>
      )
  }
```
