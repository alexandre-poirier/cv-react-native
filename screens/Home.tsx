import { useDeviceOrientation } from "@react-native-community/hooks";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { MonoText } from "../components/StyledText";
import { Text, View } from "../components/Themed";
import ToucheableLink from "../components/ToucheableLink";
import "../i18n";
import { RootTabScreenProps } from "../types";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  const { t } = useTranslation();
  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t("contact.firstname") + " " + t("contact.lastname")}
      </Text>
      <MonoText style={styles.contentText}>
        {t("experienceHistory.description")}
      </MonoText>
      <ToucheableLink
        url="https://github.com/alexandre-poirier/cv-react-native"
        text="https://github.com/alexandre-poirier/cv-react-native"
      ></ToucheableLink>
      <Text style={styles.contentText}>
        {t("general.clickBelowToContinue")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  contentText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "justify",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
