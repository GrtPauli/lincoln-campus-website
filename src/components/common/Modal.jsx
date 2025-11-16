import React from "react";
import { ConfigProvider, Modal } from "antd";

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
          fontFamily: "",
        },
      }}
    >
      <Modal
        {...props}
        open={open}
        centered={centered}
        width={width}
        onCancel={onDismiss}
        footer={null}
        wrapClassName={`luc-modal-wrap ${wrapClassName || ""}`}
        className="luc-modal"
      >
        {title && (
          <div className="bg-dark-prussian-blue w-full px-0 py-4 text-light-white">
            <h1 className="font-black text-xl -mt-4">{title}</h1>
          </div>
        )}

        <div className={`p-3 ${className || ""}`}>{children}</div>
      </Modal>
    </ConfigProvider>
  );
};
