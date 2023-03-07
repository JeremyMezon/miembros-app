import { View,Text,StyleSheet } from "react-native"
import {Image} from 'expo-image'


const MemberCard = ({name,image}) => {

    const {memberContainer,memberImage,memberName} = styles;

    return (
        <View style={memberContainer}>
            <Image 
                style={memberImage}
                source={image ? {uri:image} : require("../assets/members/anonymous.png")}
                content-fit="cover"
                transition={1000} 
            />
            <Text style={memberName}>
                {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    memberContainer: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        alignItems: "center",
    },
    memberImage: {
        borderRadius: 50,
        overflow: "hidden",
        width: 70,
        height: 70
    },
    memberName: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10
    }
})

export default MemberCard