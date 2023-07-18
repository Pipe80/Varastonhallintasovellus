## Install

Download from download page: [page](https://developer.android.com/tools/releases/platform-tools). ADB is available for Mac, Windows and Linux.

Unzip to any location. Make sure to remember this location.

Go to the location where you unzipped the package and open terminal there. You can start using ADB - Android Debug Bridge!

## Backend running in localhost

If you have a phone connected with USB and your backend running in localhost your phone won't be able to reach your backend. With one simple command you can make your backend visible to your phone:

```
  adb reverse tcp:<your backend port> tcp:<desired port>
```

If you have a backend running in port 3000 and you wan't it to remain in port 3000 in your phone:

```
  adb reverse tcp:3000 tcp:3000
```