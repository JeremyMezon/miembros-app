import { StyleSheet, View,Text } from "react-native"
import MemberCard from "../components/MemberCard"

const Home = () => {

    return (
        <View style={styles.homeContainer}>
            <Text style={styles.title}>Members</Text>
            <View style={{flexDirection:"row",flex: 2,width: "100%",display: "flex",height: 50,
            borderColor:"blue",borderWidth:1}}>
                <View style={{flexDirection:"row"}}>
                <MemberCard />
                    
                </View>
                <View style={{flexDirection:"row"}}>
                <MemberCard />

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 600,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 30
    },
    homeContainer: {
        display: "flex",
        borderColor: "red",
        padding: 20,
        borderWidth: 1
    },


})

export default Home