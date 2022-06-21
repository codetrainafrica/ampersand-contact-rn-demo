import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { auth } from "../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated, setUser } from "../actions/authActions";
import Welcome from "../screens/Welcome";
import GetStarted from "../screens/GetStarted";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import QRScanner from "../screens/QRScanner";
import Member from "../screens/Member";
import { TouchableOpacity, Text, View } from "react-native";

const Stack = createStackNavigator();

const RootStack = () => {
  const { user, authenticated } = useSelector(({ user, authenticated }) => ({
    user,
    authenticated,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
        dispatch(setAuthenticated(false));
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user && authenticated ? "Home" : "Welcome"}
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
        {user && authenticated ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerRight: () => (
                  <TouchableOpacity style={{ paddingHorizontal: 16 }}>
                    <Ionicons name="person-outline" size={24} color="#fff" />
                  </TouchableOpacity>
                ),
                headerTitle: () => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="ampersand"
                      size={40}
                      color="#fff"
                    />
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      Ampersand
                    </Text>
                  </View>
                ),
              }}
            />

            <Stack.Screen
              name="QRScanner"
              component={QRScanner}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="MemberProfile" component={Member} />
          </>
        ) : (
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
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
