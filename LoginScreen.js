import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const JobizzComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.jobizzText}>Jobizz</Text>
      <Text style={styles.welcomeText}>Welcome back 👋</Text>
      <Text style={styles.loginText}>Let's log in. Apply for jobs!</Text>
      <View style={styles.textBoxContainer}>
        <TextInput style={styles.textBox} placeholder="Name" />
        <TextInput style={styles.textBox} placeholder="Email" />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.lineContainer}>
        <View style={styles.leftLine}></View>
        <Text style={styles.continueText}>Or continue with</Text>
        <View style={styles.rightLine}></View>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="apple" size={56} color="#000" style={styles.icon} />
        <Icon name="google" size={56} color="#DB4437" style={styles.icon} />
        <Icon name="facebook" size={56} color="#3b5998" style={styles.icon} />
      </View>
      <Text style={styles.registerText}>
        Don't have an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 106,
    left: 24,
  },
  jobizzText: {
    fontSize: 22, // Font size of 22px
    color: '#356899', // Text color
    fontWeight: '600', // Font weight of 600
    lineHeight: 33, // Line height of 33px
    letterSpacing: -0.44, // -2% letter spacing (equivalent in px)
    textAlign: 'left', // Left align the text
    marginBottom: 41, // Adjusted margin to align with the welcomeText
  },
  welcomeText: {
    width: 207,
    height: 34,
    fontWeight: '600', // Font weight of 600
    fontSize: 24, // Font size of 24px
    lineHeight: 33.6, // Line height of 33.6px
    letterSpacing: -0.36, // -1.5% letter spacing (equivalent in px)
    color: '#0d0d26', // Text color
    textAlign: 'left', // Left align the text
    position: 'absolute',
    top: 41, // Adjust to align the top of both texts
    left: 0,
    
  },
  loginText: {
    width: 170,
    height: 22,
    fontWeight: '400', // Font weight of 400
    fontSize: 14, // Font size of 14px
    lineHeight: 22.4, // Line height of 22.4px
    letterSpacing: -0.14, // -1% letter spacing (equivalent in px)
    color: '#0d0d26', // Text color
    opacity: 0.4, // Opacity of 40%
    textAlign: 'left', // Left align the text
    marginBottom: 60, // Adjusted margin to provide spacing before textBox
  },
  textBoxContainer: {
    width: '100%', // Ensures container takes full width
  },
  textBox: {
    width: 335, // Width of 327px
    height: 52, // Height of 52px
    borderRadius: 10, // Border radius of 10px
    borderWidth: 1, // Border width of 1px
    borderColor: '#AFB0B6', // Border color
    padding: 10, // Padding inside the text box
    marginBottom: 10, // Spacing between text boxes
    
  },
  loginButton: {
    width: 335, // Width of 327px
    height: 58, // Height of 58px
    borderRadius: 5, // Border radius of 5px
    backgroundColor: '#356899', // Button color
    justifyContent: 'center', // Center the text inside
    alignItems: 'center', // Center the text inside
    paddingVertical: 16, // Vertical padding
    paddingHorizontal: 48, // Horizontal padding
    marginTop: 20, // Margin top to provide spacing from the text boxes
    marginBottom: 50,
  },
  loginButtonText: {
    color: '#FFFFFF', // Text color
    fontSize: 18, // Font size
    fontWeight: '600', // Font weight
  },
  lineContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center',
    marginTop: 20, // Margin top to provide spacing from the login button
  },
  leftLine: {
    width: 98, // Width of the left line
    height: 0.5, // Border height
    backgroundColor: '#AFB0B6', // Line color
  },
  continueText: {
    width: 99,
    height: 16,
    fontWeight: '400', // Font weight of 400
    fontSize: 13, // Font size of 13px
    lineHeight: 16.44, // Line height of 16.44px
    color: '#AFB0B6', // Text color
    textAlign: 'center', // Center align the text
    marginHorizontal: 10, // Margin to ensure space between the lines and text
  },
  rightLine: {
    width: 98, // Width of the right line
    height: 0.5, // Border height
    backgroundColor: '#AFB0B6', // Line color
  },
  iconContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center',
    justifyContent: 'space-around', // Space between icons
    marginTop: 60, // Margin top to provide spacing from the text
    marginBottom:60,
  },
  icon: {
    marginHorizontal: 10, // Reduce space between icons
  },
  appleIcon: {
    width: 26,
    height: 26,
  },
  googleIcon: {
    width: 28,
    height: 28,
  },
  facebookIcon: {
    width: 8,
    height: 8,
  },
  registerContainer: {
    alignSelf: 'center', // Center align the entire text component
    marginTop: 40, // Margin top to provide spacing from the icons
  },
  registerText: {
    fontWeight: '400', // Font weight of 400
    fontSize: 14, // Font size of 14px
    lineHeight: 17.71, // Line height of 17.71px
    textAlign: 'center', // Center align the text
    color: '#AFB0B6', // Text color for "Don't have an account?"
  },
  registerLink: {
    color: '#356899', // Text color for "Register"
  },
});

export default JobizzComponent;
