import React, { useState, useEffect } from "react"
import { View, Button } from "remax/one";
import classNames from "classnames"
import EggModalHeader from "./header"
import EggModalContent from "./content"
import EggModalAction from "./action"
// import './index.css'

interface Props {
	isOpened: boolean
	title?: string
	content?: string
	cancelText?: string
	confirmText?: string
	onConfirm?: Function // 点击确认
	onCancel?: Function // 点击取消
	className?: string
	onAfterClose?:Function // 关闭后的回调
	maskClosable?: boolean // 是否点击遮罩关闭
}

export default function EggModal(props: React.PropsWithChildren<Props>) {
	const { 
		title, content, cancelText, confirmText, maskClosable, onAfterClose,
		onConfirm, onCancel
	} = props
	const [_isOpened, set_isOpened] = useState(props.isOpened)
	const propsClassName = classNames('egg-modal', props.className, { "egg-modal--active": _isOpened })

	useEffect(() => {
		if (props.isOpened !== _isOpened) {
			set_isOpened(props.isOpened)
		} 
	}, [props.isOpened])

	const handleClosle = () => {
		if (typeof onAfterClose === "function") {
			onAfterClose()
		}
	}

	const handleConfirm = (event: Event) => {
		if (typeof onConfirm === "function") {
			onConfirm(event)
		}
	}

	const handleCancel = (event: Event) => {
		if (typeof onCancel === "function") {
			onCancel(event)
		}
	}

	// 点击遮罩层
	const clickMask = () => {
		if (maskClosable) {
			set_isOpened(false)
			handleClosle()
		}
	}


	if (title || content) { // 判断是否简化版
		const hasRenderAction = confirmText || cancelText // 判断是否有底部按钮

		return (
			<View className={propsClassName}>
				<View onTap={clickMask} className="egg-modal__overlay" />
				<View className="egg-modal__container">
					{
						title && (
							<EggModalHeader>{title}</EggModalHeader>
						)
					}
					{
						content && (
							<EggModalContent>{content}</EggModalContent>
						)
					}
					{hasRenderAction && (
						<EggModalAction>
							{cancelText && (
								<Button onTap={(event : any) => handleCancel(event)}>{cancelText}</Button>
							)}
							{confirmText && (
								<Button onTap={(event : any) => handleConfirm(event)}>{confirmText}</Button>
							)}
						</EggModalAction>
					)}
				</View>
			</View>
		)
	}

	return (
		<View className={propsClassName} >
			<View onTap={clickMask} className="egg-modal__overlay" />
			<View className="egg-modal__container">{props.children}</View>
		</View>
	)
}

EggModal.defaultProps = {
	maskClosable: true,
	isOpened: false,
}