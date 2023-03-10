import GoBack from "../../components/GoBack"
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"
import { useState } from "react"


const AddMember = () => {

    const [memberData,setMemberData] = useState({
        name: "",
        description: "",
        imageUrl:"",
        position: ""
    })

    console.log("Data: ",memberData)

    const fillMemberData = (property,value) => {
        let data = {...memberData};
        data[property] = value;
        setMemberData(data)
    }

    const {containerMember,containerTextMember,addMemberTitle,addMemberDescription,simpleInput,saveButton,saveButtonText} = styles

    return (
        <View style={containerMember}>
            <View style={{marginTop: 30}}>
                <GoBack />
            </View>
            <View >
                <View style={containerTextMember}>
                    <Text style={addMemberTitle}>
                        Want to be a member?
                    </Text>
                    <Text style={addMemberDescription}>
                        You can be part of our group easily, just fill all the information and that's it!
                    </Text>
                </View>
                <View>
                    <TextInput placeholder="What's your name?" onChangeText={e => fillMemberData("name",e)} style={simpleInput} />
                    <TextInput 
                        placeholder="Tell me about you..." 
                        numberOfLines={4} 
                        maxLength={150}
                        multiline={true}
                        editable={true} 
                        style={simpleInput} 
                        onChangeText={e => fillMemberData("description",e)}
                    />
                    <TextInput placeholder="Your position? ex: leader" onChangeText={e => fillMemberData("position",e)} style={simpleInput} />
                    <TextInput inputMode="url" onChangeText={e => fillMemberData("imageUrl",e)} placeholder="Your foto? ex:http://myphoto/me.jpeg... ?" style={simpleInput} />
                </View>
                    <TouchableHighlight>
                        <View style={saveButton}>
                            <Text style={saveButtonText}>
                                Join the group
                            </Text>
                        </View>
                    </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMember: {
        padding: 25
    },
    containerTextMember: {
        marginTop: 40,
        marginBottom: 35
    },
    addMemberTitle: {
        fontSize: 32,
        fontWeight: 700,
        marginBottom: 10,
        color: "#4C955F"
    },
    addMemberDescription: {
        color: '#7E8780',
    },
    simpleInput: {
        paddingTop: 6,
        paddingBottom:6,
        borderBottomColor: "#C4CCC6",
        borderBottomWidth: 1,
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
    },
    saveButton: {
        padding: 15,
        backgroundColor: "#279A43",
        marginTop: 40,
        borderRadius: 50
    },
    saveButtonText:{
        color: "white",
        fontSize: 16,
        fontWeight: 600,
        textAlign: "center",
        textTransform: "uppercase"
    }
})

export default AddMember