---
  title: Icon
---


# Icon

> Icon 使用的是[Eva Icon](https://akveo.github.io/eva-icons/#/)库

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| className | icon类名 | `string` | - |
| icon | [Eva Icon](https://akveo.github.io/eva-icons/#/) | `string` | - |
| width | icon宽度 | `number` | - |
| height | icon高度 | `number` | width宽度 |
| color | icon颜色 | `string` | `#000` |
| customizeStyle | icon额外样式 | `React.CSSProperties` | - |
| animation | 动画效果 | `zoom`  \| `pulse` \| `shake` \| `flip`  | - |

## Demo

```jsx
  import React from 'react';
  import { EggButton } from '@redchili/egg-ui';
  import { View } from "remax/one";

  export default () => (
    <View>
      <View className="icon-demo">
        <View className="tit">Icon 大小 - width</View>
        <View className="icons">
            <EggIcon width={32} icon="settings-2" />
            <EggIcon width={48} icon="phone-missed-outline" />
            <EggIcon width={64} icon="volume-off" />
        </View>
      </View>
      <View className="icon-demo">
        <View className="tit">Icon 颜色 - color</View>
        <View className="icons">
            <EggIcon color="#00C48C" width={32} icon="settings-2" />
            <EggIcon color="red" width={48} icon="phone-missed-outline" />
            <EggIcon color="#FFA26B" width={64} icon="volume-off" />
        </View>
      </View>
      <View className="icon-demo">
        <View className="tit" onTap={() => {
            setAnimation({
                type: 'shake',
                infinite: false
            })
        }}>Icon 动画 - css animation</View>
        <View className="icons">
            <EggIcon animation={animation} width={72} color="#3F3356" icon="external-link" />
            <EggIcon animation="zoom" width={72} color="#3F3356" icon="mic-outline" />
            <EggIcon animation={{ type: 'pulse', infinite: false }} width={72} color="#FFA26B" icon="alert-triangle-outline" />
            <EggIcon
                animation={{ type: "shake", infinite: true }}
                width={72} color="#FFA26B"
                icon="alert-triangle-outline"
            />
            <EggIcon
                animation={{ type: "pulse", infinite: false }}
                width={72}
                color="#FFA26B"
                icon="alert-triangle-outline"
                customizeStyle={{
                    animationIterationCount: 3
                }}
            />
        </View>
      </View>
    </View>
  );
```
