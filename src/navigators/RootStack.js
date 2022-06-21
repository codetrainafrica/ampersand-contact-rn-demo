import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../actions/authActions";
import Welcome from "../screens/Welcome";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import QRScanner from "../screens/QRScanner";
import Member from "../screens/Member";

const Stack = createStackNavigator();

const RootStack = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) dispatch(setUser(user));
      else setUser(null);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? "Home" : "Welcome"}
        screenOptions={{
          headerBackImage: () => (
            <Ionicons name="chevron-back-outline" size={30} color="#fff" />
          ),
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#f92b4c" },
          headerTitleStyle: {
            letterSpacing: 2,
          },
        }}
      >
        {!user ? (
          <>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: "#f4f5f0" },
              }}
            />
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: "Sign In",
              }}
            />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen
              name="QRScanner"
              component={QRScanner}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="MemberProfile" component={Member} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
