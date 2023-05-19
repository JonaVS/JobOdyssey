import { NotificationProps } from "@mantine/notifications";
import { IconCheck, IconExclamationMark, IconX } from "@tabler/icons-react";

export enum NotificationType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

type Notifications = Record<NotificationType, NotificationProps>;

const iconSize = "1.1rem";

const notificationProps: Notifications = {
  success: {
    color: "teal",
    message: "Default success message",
    icon: <IconCheck size={iconSize} />,
  },
  error: {
    color: "red",
    message: "Default error message",
    icon: <IconX size={iconSize} />,
  },
  warning: {
    color: "yellow",
    message: "Default warning message",
    icon: <IconExclamationMark size={iconSize} />,
  },
};

export function getNotificationProps(type: NotificationType, message?: string) {
  const props = notificationProps[type];
  props.message = message;
  return props;
}