import React from 'react';
import { Input, InputProps, View, Label } from 'remax/one';
import classNames from 'classnames'
// import './index.css';
interface Props extends InputProps {
    name: string;
    className?: string;
		style?: Record<string, string>;
		title?: string
		editable?: boolean
		disabled?: boolean
		[key: string]: any
		required?: boolean
}

export default function EggInput(props: Props) {

		const {required, className, title , disabled, editable} = props;
		
		const containerCls = classNames('egg-input__container', {
      'egg-input--editable': editable,
      'egg-input--disabled': disabled
		})
	
		const maskCls = classNames('egg-input__mask', {
      'egg-input__mask--editable': editable,
      'egg-input__mask--disabled': disabled
    })

    return (
			<View className={`egg-input ${className}`} >
				<View className={containerCls}>
					<View className={maskCls} />
					{
						title && 
						(
							// Tips: 小程序 input 不支持点击 label 聚焦
							<Label htmlFor={props.name} className={`egg-input__title ${required &&
                'egg-input__title--required'}`}>{title}</Label>
						)
					}
					<Input
						id={props.name}
						{...props}
						className="egg-input__wxapp"
						// name={name} 
						// style={style}
						// onInput={props.onInput}
						// onBlur={props.onBlur}
						// onFocus={props.onFocus}
						// value={props.value}
						// type={props.type}
					/>
					{
						props.children && (
							<View className="egg-input__children">{props.children}</View>
						)
					}
				</View>
			</View>
		)
}