App Component (App.js):

The App component is the root component of the app.
It contains a NavigationContainer from @react-navigation/native, which is used to wrap your app's navigation structure.
Inside the NavigationContainer, there is a StackNavigator from @react-navigation/stack, which manages the stack-based navigation in your app.
The StackNavigator contains two screens: 'Login' and 'Home', each mapped to their respective components (LoginScreen and HomeScreen).
LoginScreen Component (LoginScreen.js):

The LoginScreen component is a functional component that represents the login screen of the app.
It contains various UI elements such as text, input fields, buttons, and icons to create a login form.
The component uses React Navigation's navigation prop to navigate to the 'Home' screen when the login button is pressed.
HomeScreen Component (HomeScreen.js):

The HomeScreen component is a functional component that represents the home screen of the app.
It displays a simple message, "Home Screen", in the center of the screen using a Text component.
This screen is navigated to from the 'Login' screen when the user successfully logs in.
![WhatsApp Image 2024-06-19 at 23 08 05_245a1d41](https://github.com/DevSavante/rn-assignment4-11029581/assets/151789625/2a9d7184-605e-496b-98b9-71731b421e0a)
