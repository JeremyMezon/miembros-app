import { Image } from "expo-image"
import { Pressable, StyleSheet, Text, View } from "react-native"
import {useSearchParams,Link} from 'expo-router';
import GoBack from "../../components/GoBack";

const MembersDetails = () => {

    const {name} = useSearchParams()
    const {container,avatarContainer,back,avatarImage,memberName,descriptionContainer,description} = styles

    return (
        <View style={container}>
            <View style={back}>
                <GoBack />
            </View>
            <View style={avatarContainer}>
                {/* <Image style={avatarImage} source={''} /> */}
                <Text style={memberName}>{name}</Text>
            </View>
            <View style={descriptionContainer}>
                <Text style={description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet error sequi aspernatur, est, consequuntur quisquam blanditiis impedit quidem possimus ipsam nesciunt rerum magni at. Fugit perspiciatis velit corrupti reiciendis ad?
                </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    back: {
        marginTop: 20,
        marginLeft: 10
    },
    avatarContainer: {
        marginTop: 100,
        marginBottom: 25,
        alignItems: "center"
    },
    avatarImage: {
        overflow: "hidden",
        width: 80,
        height: 80,
        borderRadius: 100,
        marginBottom: 15
    },
    memberName: {
        fontSize: 24,
        fontWeight: 600,
        textAlign: "center",
    },
    descriptionContainer: {
        padding: 15,
    },
    description: {
        fontSize: 16,
    }

})

export default MembersDetails