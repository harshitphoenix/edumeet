import { useTheme } from "@react-navigation/native";
import React from "react";
import {TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from ".";

const BackButton: React.FC<{navigation:any}>= ({ navigation }: any) => {
    const {colors} = useTheme()
    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            backfaceVisibility: "hidden",
            alignSelf:'flex-start'
        }
    })
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
            navigation.goBack();
            }}
        >
            <Icon name='BackArrow' size={30} color={colors.text} />
        </TouchableOpacity>
    );
}

export default BackButton;