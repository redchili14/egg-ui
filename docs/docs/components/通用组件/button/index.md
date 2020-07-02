---
  title: Button
---

# Button

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| type | 设置按钮类型 | `reverse` \| `default` \| `light` | - |
| className | 设置按钮类名 | boolean | `false` |
| shape | - | boolean | `false` |
| size | 设置按钮大小 | `small` \| `medium` \| `large` | - |
| disabled | 设置按钮禁用状态 | boolean | `false` |
| onClick | 点击按钮时的回调 | () => void | - |

## Demo

```jsx
  import React from 'react';
  import { EggButton } from '@redchili/egg-ui';

  export default () => (
    <div>
      <EggButton >提交</EggButton>
      <EggButton shape="round">提交</EggButton>
      <EggButton size="medium">提交</EggButton>
      <EggButton size="medium" shape="round">提交</EggButton>
      <EggButton size="small">提交</EggButton>
      <EggButton size="medium" type="light">提交</EggButton>
      <EggButton size="medium" type="reverse">提交</EggButton>
      <EggButton size="small" disable>提交</EggButton>
      <EggButton size="small" type="reverse" disable>提交</EggButton>
    </div>
  );
```
