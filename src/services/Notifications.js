import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';

class Notifications {
  constructor() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        // console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios', // Firebase not setup

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: false,
        sound: false,
      },
    });

    PushNotification.createChannel(
      {
        channelId: 'document_created', // (required)
        channelName: 'Document created notifications', // (required)
        channelDescription: 'Document created by other users',
      },
      () => {},
    );
  }

  sendNotification(notification) {
    PushNotification.localNotification({
      channelId: 'document_created',
      title: 'New document created by ' + notification.UserName,
      message: notification.DocumentTitle,
    });
  }
}

export default new Notifications();