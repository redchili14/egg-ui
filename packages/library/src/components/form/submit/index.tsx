import React, { useContext } from 'react';
import { Button } from 'remax/one';
import { FormContext } from '../context';
// import './index.css';

interface Props {
    className?: string;
    style?: Record<string, string>;
}

export default function EggSubmit(props: React.PropsWithChildren<Props>) {
    const { children, className, style } = props;
    const { onSubmit } = useContext(FormContext);

    // DONE: remax/one 文档有误，此版本不存在 htmlFor , 故自己绑定 onSubmit 方法来触发 form 父组件的 submit
    return <Button className={`egg-submit ${className}`} style={style} onTap={onSubmit}>{children}</Button>
}