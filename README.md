<h1 align="center">Word Puzzle Game</h1>

[![Platform](https://img.shields.io/badge/Platform-React%20Native-brightgreen)](https://reactnative.dev/docs/getting-started)


## **Getting Started**

This section has the information about how to get get started with the Word Puzzle Game

## **App Demo**

<p align="center">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss0.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss1.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss2.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss3.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss4.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss5.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss6.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss7.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss8.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss9.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss10.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss11.png" alt="logo">
<img width="180" height="300" src="https://github.com/vikassharma96/word_puzzle/blob/main/images/ss12.png" alt="logo">
</p>

## **Prerequisites**

To Begin with the development you will need:

- **Git**
- **Node**
- **VS Code**
- **XCode**
- **Android Studio**
- **React Native**

## **To run the App**

1. Clone the repository [word-puzzle](https://github.com/vikassharma96/word_puzzle) - `git clone https://github.com/vikassharma96/word_puzzle.git`
2. Execute `npm install`
3. Execute `cd ios && pod install`
4. Start the backend server - `cd backend && node index.js`
4. Start Metro Bundler `npx react-native start` 
5. Execute `npx react-native run-[android/ios]`
6. To run the test cases `npm test` it will also generate the coverage report

## **How the app is structured**

- components
  - Contains custom component for Button, Label, Loader e.t.c
- views
  - Contains ui screens of the app
- contexts
  - Contains theme and user contexts for global data sharing
- config
  - Contains environment configuration which could later be replaced with env files
- assets
  - Contains images and fonts for the app
- api
  - Contains api files to fetch data from backend
- hooks
  - Contains custom hooks for API and theme
- navigation
  - Contains navigation files and screen routes
- styles
  - Contains custom styles and default styles
- types
  - Contains type defination for models
- utils
  - Contains constants and utility files

## Build and Deployment steps for Android
  - Configure App
    - Create an app icon using `https://www.appicon.co/` or any other website and add it in as `ic_launcher` in drawable
    - Change the package name and applicationId in `AndroidManifest.xml` to something uniquely identifies app on the device and in the Google PlayStore.
  - Generate release build
    - Create a signing key using Android Sutudio menu `Build -> Generate Signed Build/Apk` or using the command `keytool -genkey -v -keystore release-key.keystore -alias key-alias -keyalg RSA -keysize 2048 -validity 10000`
    - In the app level build.gradle file in android project directory, add the following code to add build configuration for debug and release build 
        ```
      signingConfigs {
          release {
            storeFile file('release-key.keystore')
            storePassword '******'
            keyAlias 'key-alias'
            keyPassword '******'
          }
      }
      buildTypes {
          debug { 
            ...
          }
          release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
          }
      }
        ```
  - Build the App
    - Run the following command `npx react-native run-android --variant=release` to create release build or use android studio build varient tool window
  - Upload app to PlayStore
    - Create a developer account on the [Google Play Console](https://play.google.com/console/) website
    - Create a new app listing and upload apk or app bundle created from android studio build menu to make Google use of app bundle to generate and serve optimized APKs for each users device configuration
    - Fill out the app meta information like app name, version, release notes e.t.c
    - Submit app for review and wait for google play team to review the app and then publish the app

## Build and Deployment steps for iOS
  - Configure App
    - Create an app icon using `https://www.appicon.co/` or any other website and add it to `AppIcon` image set
    - Open project in Xcode select the project target and from general tab change the bundle identifier to something uniquely identifies app on the device and in the AppStore.
  - Generate release build and build the app
    - Set up a developer account with Apple and create distribution certificates and provisioning profiles. The steps can be found in the [official documentation for deploying iOS apps](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution)
    - In Xcode, select `Product` from the menu and then select `Archive` of the app
    - Select `Distribute App` and follow the prompts to create an app store provisioning profile
  - Upload app to AppStore
    - In the App Store Connect section of the Apple Developer website, create a new app listing and upload the generated app archive
    - Fill out the app meta infomation and other details of the app
    - Submit the app for review and wait for AppStore review team to review the app and then publish the app

## **Built With**

- [React](https://reactjs.org/) - Open-source JavaScript library for building user interfaces
- [React Native](https://reactnative.dev/) - Cross platform mobile app development framework
- [React Navigation](https://reactnavigation.org/) - React native navigation library
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) - React native testing library
