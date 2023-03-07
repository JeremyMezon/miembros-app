import { Image } from "expo-image"
import {useRouter} from 'expo-router'
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import {useSearchParams} from 'expo-router';
import GoBack from "../../components/GoBack";
import Icon  from "react-native-vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { DeleteMember, GetMembersById } from "../../services/MembersService";

const MembersDetails = () => {
    
    const [member,setMember] = useState({
        name: "",
        description: "",
        imageUrl: "",
        position: ""
    })
    const router = useRouter();
    const {container,avatarContainer,back,avatarImage,memberName,descriptionContainer,description,buttonsContainer,editButton,deleteButton} = styles
    const {name,id} = useSearchParams();
    const deleteMember = () => {
        DeleteMember(id).then(data => {
            if(data){
                router.push("/");
            }
        })
    }

    const updateMember = () => {
        router.push({pathname: "/add-member",params:{
            id:id,
            title: "Wanna update your info?",
            btnText: "Update My Info"
        }})
    }

    useEffect(()=>{
        GetMembersById(id).then(data => setMember(data))
    },[])

    return (
        <View style={container}>
            <View style={back}>
                <GoBack />
            </View>
            <View style={avatarContainer}>
                <Image style={avatarImage} source={{uri: member.imageUrl ? member.imageUrl : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}} />
                <Text style={memberName}>{member.name}</Text>
            </View>
            <View style={descriptionContainer}>
                <Text style={description}>
                    {member.description}
                </Text>
            </View>
            <View style={buttonsContainer}>
                <TouchableHighlight onPress={()=>{updateMember()}}>
                    <View style={editButton}>
                        <Icon name="edit" size={14} color="white" />
                        <Text style={{color: "white",marginLeft: 5}}>Modificar Datos</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>{deleteMember()}}>
                    <View style={deleteButton}>
                        <Icon name="delete" size={14} />
                        <Text style={{marginLeft: 5}}>Eliminar Miembro</Text>
                    </View>
                </TouchableHighlight>
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
        marginTop: 50,
        marginBottom: 25,
        alignItems: "center"
    },
    avatarImage: {
        overflow: "hidden",
        width: 100,
        height: 100,
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
        textAlign: "justify"
    },
    buttonsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40,
    },
    editButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#4C955F",
        width: "100%",
        borderRadius: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30
    },
    deleteButton: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#4C955F",
        borderWidth: 1,
        borderRadius: 50,
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30
    }

})

export default MembersDetails