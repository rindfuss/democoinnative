# Demo Coin Native
This is a React Native learning project based on a tutorial by [Jeff Gu Kang](https://github.com/JeffGuKang) at 
[https://reactnativeexample.com/react-native-tutorial-show-me-the-coin-2019/](https://reactnativeexample.com/react-native-tutorial-show-me-the-coin-2019/).

I worked through the tutorial and then implemented the following changes:
-   Converted the author's class-based code to use hooks instead.
-   Created "MorphBall" component, a circle that shrinks and grows using CSS animation and is used as a placeholder component while waiting for the API to return data.
-   Added splash screens on iOS and Android to avoid white RN screen that appears during app loading:
    - Started with the following tutorial [https://medium.com/@appstud/add-a-splash-screen-to-a-react-native-app-810492e773f9](https://medium.com/@appstud/add-a-splash-screen-to-a-react-native-app-810492e773f9), which makes use of the react-native-splash-screen package.
    - I set splash screen to change from a bitcoin image to a photo of a dog to illustrate the startup process:
        1) Android / iOS displays a splash screen (the bitcoin image).
        2) React native loads its javascript during which there's normally a white screen with green loading status bar at top. The dog image is displayed during this time by Android- and iOS specific code that runs after the Android/iOS splash screen disapears. In my example, changing the dog image to the bitcoin image would make it appear to the user that there's just one startup splash screen.
        3) React native displays the App component, which in this case hides the dog image when the App component.
-   Modified what the tutorial did when tapping on a price quote. The tutorial opened a YouTube page in a web view. I modified the code to open a different website based on the type of coin for Bitcoin, Ethereum, XRP, or EOS. The websites that open are somewhat random and other coin types default to the YouTube link provided in the tutorial.
-   Created a simple backend website with heroku (see bitcoin.php in the php folder) as an API-simulator since the API the tutorial used no longer functions.


> Written with [StackEdit](https://stackedit.io/).