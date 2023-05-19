import { NotificationProps } from "@mantine/notifications";
import { IconCheck, IconExclamationMark, IconX } from "@tabler/icons-react";

export enum NotificationType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

type Notifications = Record<NotificationType, Partial<NotificationProps>>;

const iconSize = "1.1rem";

const notificationProps: Notifications = {
  success: {
    color: "teal",
    icon: <IconCheck size={iconSize} />,
  },
  error: {
    color: "red",
    icon: <IconX size={iconSize} />,
  },
  warning: {
    color: "yellow",
    icon: <IconExclamationMark size={iconSize} />,
  },
};

export function getNotificationProps(type: NotificationType, message: string):NotificationProps {
  const props = notificationProps[type];
  props.message = message;
  return props as NotificationProps;
}