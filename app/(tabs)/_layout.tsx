import { Tabs } from "expo-router";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { IconButton } from "react-native-paper";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "NAS APP",
            headerShown: true,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#0A1713" },
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "NAS APP",
            headerShown: true,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#0A1713" },
            tabBarStyle: { display: "none" },
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="preCare"
          options={{
            title: "NAS APP",
            headerShown: true,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#0A1713" },
            tabBarStyle: { display: "none" },
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="preBilling"
          options={{
            title: "NAS APP",
            headerShown: true,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#0A1713" },
            tabBarStyle: { display: "none" },
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
