import React, { useState } from 'react';
import { Button } from 'remax/one';

import classNames from 'classnames';

// import './index.css';

export type ButtonSize = 'large' | "medium" | "small";

interface Props {
    children: React.ReactNode | string
    size?: ButtonSize,
    className?: string,
    disable?: boolean,
    shape?: 'round',
    type?: 'light' | 'default' | "reverse"
    onClick?: () => void
}

export default function EggButton(props: Props) {

    const { children, size = 'large', className = '', onClick, disable = false, type = 'default', shape = "" } = props;

    const [hover, setHover] = useState<string>('');

    const classNameProp = classNames('egg-button', className, size, type, hover, shape, { 'disable': disable });

    const handleClick = () => {
        if (!disable) {
            setHover('heartBeat');
            onClick && onClick();
            const timer = setTimeout(() => {
                setHover('');
                clearTimeout(timer);
            }, 400);
        }
    }

    return <Button className={classNameProp} onTap={handleClick}>{children}</Button>

}