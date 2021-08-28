import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { Text } from "./Themed";

export default function ToucheableLink({
  url,
  text,
  style,
}: {
  url: string;
  text: string;
  style?: any;
}) {
  return (
    <TouchableOpacity onPress={(event) => handleHelpPress(event, url)}>
      <Text
        style={style ? style : styles.helpLinkText}
        lightColor={Colors.light.tint}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

function handleHelpPress(event: GestureResponderEvent, url: string) {
  WebBrowser.openBrowserAsync(url);
}

const styles = StyleSheet.create({
  helpLinkText: {
    fontSize: 14,
  },
});
