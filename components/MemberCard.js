import { View,Text,StyleSheet } from "react-native"
import {Image} from 'expo-image'


const MemberCard = () => {

    const {memberContainer,memberImage,memberName} = styles

    return (
        <View style={memberContainer}>
            <Image 
                style={memberImage}
                source={require("../assets/members/anonymous.png")}
                content-fit="cover"
                transition={1000} 
            />
            <Text style={memberName}>
                John Doe
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    memberContainer: {
        display: "flex",
        padding: 10,
        alignItems: "center",
        position: "relative",
        width: 100,
        flex: 1
    },
    memberImage: {
        width: 60,
        height: 60
    },
    memberName: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10
    }
})

export default MemberCard