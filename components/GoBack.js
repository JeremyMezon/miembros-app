import {useRouter,Link} from 'expo-router'
import { StyleSheet,Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

const GoBack = () => {

    const {goBackText} = styles;

    return  (
        <View style={{alignItems:"center",flexDirection:"row"}}>
            <Link styles={goBackText} href="/">
                <Text styles={goBackText}>
                <Icon name="chevron-left" size={21} />    
                    Go Home
                </Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    goBackText: {
        color: "#4C955F",
        fontWeight: 600,
        paddingBottom: 3
    }
})

export default GoBack