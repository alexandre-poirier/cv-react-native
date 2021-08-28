import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  Collapse,
  CollapseBody,
  CollapseHeader,
} from "accordion-collapse-react-native";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet } from "react-native";
import { BoldText } from "../components/StyledBoldText";
import { ItalicText } from "../components/StyledItalicText";
import { MonoText } from "../components/StyledText";
import { View } from "../components/Themed";
import ToucheableLink from "../components/ToucheableLink";
import "../i18n";
import { RootTabScreenProps } from "../types";
import { commonStyles } from "./CVStyles";

export default function ScrollCV({ navigation }: RootTabScreenProps<"TabTwo">) {
  const { t } = useTranslation();
  const { landscape } = useDeviceOrientation();

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={commonStyles.container}>
        <BoldText style={commonStyles.firstName}>
          {t("contact.firstname") + " " + t("contact.lastname")}
        </BoldText>
        <MonoText style={commonStyles.content}>{t("contact.title")}</MonoText>
        <MonoText style={commonStyles.content}>
          {t("general.pressToOpenCollapsingSections")}
        </MonoText>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.collapseHeader}>
            <BoldText style={commonStyles.titleRibbon}>
              {t("generalInformationTitles.contact")}
            </BoldText>
          </CollapseHeader>
          <CollapseBody>
            <MonoText style={commonStyles.contentTitle}>
              {t("contact.emailTitle")}
            </MonoText>
            <MonoText style={commonStyles.content}>
              {t("contact.email")}
            </MonoText>
            <MonoText style={commonStyles.contentTitle}>
              {t("contact.linkedInTitle")}
            </MonoText>
            <MonoText style={commonStyles.contentBreak}>
              <ToucheableLink
                url={t("contact.linkedIn")}
                text={t("contact.linkedIn")}
              ></ToucheableLink>
            </MonoText>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.collapseHeader}>
            <BoldText style={commonStyles.titleRibbon}>
              {t("generalInformationTitles.languages")}
            </BoldText>
          </CollapseHeader>
          <CollapseBody>
            <View style={commonStyles.ratedContentContainer}>
              <BoldText style={commonStyles.contentTitle}>
                {t("languages.language2")}
              </BoldText>
              <View style={commonStyles.contentLeftSectionRating}>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fiveStars")}
                </MonoText>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fiveStarsDescription")}
                </MonoText>
              </View>
            </View>
            <View style={commonStyles.ratedContentContainerWithTopSpacing}>
              <BoldText style={commonStyles.contentTitle}>
                {t("languages.language1")}
              </BoldText>
              <View style={commonStyles.contentLeftSectionRating}>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStars")}
                </MonoText>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStarsDescription")}
                </MonoText>
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.collapseHeader}>
            <BoldText style={commonStyles.titleRibbon}>
              {t("generalInformationTitles.skills")}
            </BoldText>
          </CollapseHeader>
          <CollapseBody>
            <View style={commonStyles.ratedContentContainer}>
              <MonoText style={commonStyles.smallContent}>
                {t("skills.skill1")}
              </MonoText>
              <View style={commonStyles.contentLeftSectionRating}>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStars")}
                </MonoText>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStarsDescription")}
                </MonoText>
              </View>
            </View>
            <View style={commonStyles.ratedContentContainerWithTopSpacing}>
              <MonoText style={commonStyles.smallContent}>
                {t("skills.skill2")}
              </MonoText>
              <View style={commonStyles.contentLeftSectionRating}>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStars")}
                </MonoText>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStarsDescription")}
                </MonoText>
              </View>
            </View>
            <View style={commonStyles.ratedContentContainerWithTopSpacing}>
              <MonoText style={commonStyles.smallContent}>
                {t("skills.skill3")}
              </MonoText>
              <View style={commonStyles.contentLeftSectionRating}>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStars")}
                </MonoText>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStarsDescription")}
                </MonoText>
              </View>
            </View>
            <View style={commonStyles.ratedContentContainerWithTopSpacing}>
              <MonoText style={commonStyles.smallContent}>
                {t("skills.skill4")}
              </MonoText>
              <View style={commonStyles.contentLeftSectionRating}>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.threeStars")}
                </MonoText>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.threeStarsDescription")}
                </MonoText>
              </View>
            </View>
            <View style={commonStyles.ratedContentContainerWithTopSpacing}>
              <MonoText style={commonStyles.smallContent}>
                {t("skills.skill5")}
              </MonoText>
              <View style={commonStyles.contentLeftSectionRating}>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.threeStars")}
                </MonoText>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.threeStarsDescription")}
                </MonoText>
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.collapseHeader}>
            <BoldText style={commonStyles.titleRibbon}>
              {t("generalInformationTitles.softwares")}
            </BoldText>
          </CollapseHeader>
          <CollapseBody>
            <View style={commonStyles.ratedContentContainerWithTopSpacing}>
              <MonoText style={commonStyles.smallContent}>
                {t("softwares.software")}
              </MonoText>
              <View style={commonStyles.contentLeftSectionRating}>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStars")}
                </MonoText>
                <MonoText style={commonStyles.smallContent}>
                  {t("ratings.fourStarsDescription")}
                </MonoText>
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.collapseHeader}>
            <BoldText style={commonStyles.titleRibbon}>
              {t("experienceHistory.workHistoryTitle")}
            </BoldText>
          </CollapseHeader>
          <CollapseBody>
            <View style={commonStyles.rightTable}>
              <View style={commonStyles.rightTableRow}>
                <MonoText style={commonStyles.leftColumn}>
                  {t("experienceHistory.date1")}
                </MonoText>
                <View style={commonStyles.rightColumn}>
                  <BoldText style={commonStyles.contentTitle}>
                    {t("experienceHistory.workTitle1")}
                  </BoldText>
                  <ItalicText style={commonStyles.italicTitle}>
                    {t("experienceHistory.workItalicTitle1")}
                  </ItalicText>
                  <MonoText style={commonStyles.smallContent}>
                    <MonoText>{t("experienceHistory.work1Item1")}</MonoText>
                    <MonoText>{t("experienceHistory.work1Item2")}</MonoText>
                    <MonoText>{t("experienceHistory.work1Item3")}</MonoText>
                    <MonoText>{t("experienceHistory.work1Item4")}</MonoText>
                    <MonoText>{t("experienceHistory.work1Item5")}</MonoText>
                    <MonoText>{t("experienceHistory.work1Item6")}</MonoText>
                    <MonoText>{t("experienceHistory.work1Item7")}</MonoText>
                    <MonoText>{t("experienceHistory.work1Item8")}</MonoText>
                  </MonoText>
                </View>
              </View>
              <View style={commonStyles.rightTableRow}>
                <MonoText style={commonStyles.leftColumn}>
                  {t("experienceHistory.date2")}
                </MonoText>
                <View style={commonStyles.rightColumn}>
                  <BoldText style={commonStyles.contentTitle}>
                    {t("experienceHistory.workTitle2")}
                  </BoldText>
                  <ItalicText style={commonStyles.italicTitle}>
                    {t("experienceHistory.workItalicTitle2")}
                  </ItalicText>
                  <MonoText style={commonStyles.smallContent}>
                    <MonoText>{t("experienceHistory.work2Item1")}</MonoText>
                    <MonoText>{t("experienceHistory.work2Item2")}</MonoText>
                    <MonoText>{t("experienceHistory.work2Item3")}</MonoText>
                    <MonoText>{t("experienceHistory.work2Item4")}</MonoText>
                    <MonoText>{t("experienceHistory.work2Item5")}</MonoText>
                    <MonoText>{t("experienceHistory.work2Item6")}</MonoText>
                    <MonoText>{t("experienceHistory.work2Item7")}</MonoText>
                    <MonoText>{t("experienceHistory.work2Item8")}</MonoText>
                  </MonoText>
                </View>
              </View>
              <View style={commonStyles.rightTableRow}>
                <MonoText style={commonStyles.leftColumn}>
                  {t("experienceHistory.date3")}
                </MonoText>
                <View style={commonStyles.rightColumn}>
                  <BoldText style={commonStyles.contentTitle}>
                    {t("experienceHistory.workTitle3")}
                  </BoldText>
                  <ItalicText style={commonStyles.italicTitle}>
                    {t("experienceHistory.workItalicTitle3")}
                  </ItalicText>
                  <MonoText style={commonStyles.smallContent}>
                    <MonoText>{t("experienceHistory.work3Item1")}</MonoText>
                    <MonoText>{t("experienceHistory.work3Item2")}</MonoText>
                    <MonoText>{t("experienceHistory.work3Item3")}</MonoText>
                  </MonoText>
                </View>
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.collapseHeader}>
            <BoldText style={commonStyles.titleRibbon}>
              {t("experienceHistory.educationSectionTitle")}
            </BoldText>
          </CollapseHeader>
          <CollapseBody>
            <View style={commonStyles.rightTable}>
              <View style={commonStyles.rightTableRow}>
                <MonoText style={commonStyles.leftColumn}>
                  {t("experienceHistory.date4")}
                </MonoText>
                <View style={commonStyles.rightColumn}>
                  <BoldText style={commonStyles.contentTitle}>
                    {t("experienceHistory.educationTitle1")}
                  </BoldText>
                  <ItalicText style={commonStyles.italicTitle}>
                    {t("experienceHistory.educationItalicTitle1")}
                  </ItalicText>
                </View>
              </View>
              <View style={commonStyles.rightTableRow}>
                <MonoText style={commonStyles.leftColumn}>
                  {t("experienceHistory.date5")}
                </MonoText>
                <View style={commonStyles.rightColumn}>
                  <BoldText style={commonStyles.contentTitle}>
                    {t("experienceHistory.educationTitle2")}
                  </BoldText>
                  <ItalicText style={commonStyles.italicTitle}>
                    {t("experienceHistory.educationItalicTitle2")}
                  </ItalicText>
                  <MonoText style={commonStyles.smallContent}>
                    {t("experienceHistory.educationTitle2Description")}
                  </MonoText>
                </View>
              </View>
            </View>
          </CollapseBody>
        </Collapse>

        <Collapse style={styles.collapse}>
          <CollapseHeader style={styles.collapseHeader}>
            <MonoText style={commonStyles.titleRibbon}>
              {t("experienceHistory.freelanceProjectTitle")}
            </MonoText>
          </CollapseHeader>
          <CollapseBody>
            <ToucheableLink
              url="https://assurancespierreleduc.com/"
              text={"https://assurancespierreleduc.com/"}
            ></ToucheableLink>
            <MonoText style={commonStyles.smallContentPadded}>
              {t("experienceHistory.freeLanceProject")}
            </MonoText>
          </CollapseBody>
        </Collapse>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  collapse: { width: "100%" },
  collapseHeader: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
});
