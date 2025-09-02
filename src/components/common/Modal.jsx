import React from "react";
import { ConfigProvider, Modal } from 'antd'

export const AppModal = ({
  open,
  title,
  children,
  onDismiss,
  centered = true,
  width,
  wrapClassName,
  className,
  ...props
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '',
        },
      }}
    >
      <Modal
        // zIndex={9999}
        {...props}
        open={open}
        centered={centered}
        width={width}
        // title={title}
        onCancel={onDismiss}
        footer={null}
        wrapClassName={wrapClassName ? wrapClassName : 'p-5'}
      >
        <div className="bg-dark-prussian-blue w-full px-0 py-4 text-light-white ">
          <h1 className="font-black text-xl -mt-4">{title}</h1>
        </div>
        <div className={`p-2 ${className}`}>{children}</div>
      </Modal>
    </ConfigProvider>
  )
}
