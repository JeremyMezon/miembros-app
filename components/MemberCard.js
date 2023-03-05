import { View,Text } from "react-native"
import {Image} from 'expo-image'


const MemberCard = () => {
    return (
        <View>
            <Image 
                style={memberImage}
                source="../assets/members/anonymous.png"
                content-fit="cover"
                transition={1000} 
            />
            <Text style={memberName}>
                John Doe
            </Text>
        </View>
    )
}