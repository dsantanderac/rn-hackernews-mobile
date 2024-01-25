# Hacker News Mobile

Hacker News Mobile is built using TypeScript and React Native.
It uses Metro, the JavaScript bundler for React Native to join the code and all its dependencies together.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm
- [Xcode 15](https://developer.apple.com/xcode)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Setup

First you have to clone the project, run:

 ```bash
git clone https://github.com/dsantanderac/rn-hackernews-mobile.git
 ```

This project uses React Native. For first time set up, inside the `/rn-hackernews-mobile` folder, run:

 ```bash
 npm install
 ```

This will install all necessary packages to build the app.

Now to run the app into a device run the following commands (with an emulator already started).

To generate and run Android:

```bash
npm run android
```

To generate and run iOS:

```bash
npm run ios
```

## Architecture

Source files are in /src

/data -- using the repository design pattern has the dataSource for the app (remote and local), and models

/domain -- there are the useCases with business logic to send to the presentation layer

/presentation/screens -- pages for the app and these contains their respective viewmodel

/presentation/components -- components used through the app

/navigation -- for specifying navigation for the app

/utils -- reusable helpers
