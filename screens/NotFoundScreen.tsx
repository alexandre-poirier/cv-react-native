import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RootStackScreenProps } from "../types";

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("general.notFoundTitle")}</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={styles.linkText}>{t("general.goToHome")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
