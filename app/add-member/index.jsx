import GoBack from "../../components/GoBack";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import {useSearchParams} from 'expo-router'
import { useEffect, useState } from "react";
import { CreateMember, GetMembersById, UpdateMember } from "../../services/MembersService";

const AddMember = () => {
  const [memberData, setMemberData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    position: "",
  });

  const params = useSearchParams();

  const fillMemberData = (property, value) => {
    let data = { ...memberData };
    data[property] = value;
    setMemberData(data);
  };

  useEffect(()=>{
    if(params.id){
        GetMembersById(params.id).then(data => {
            setMemberData({
                name: data.name,
                description: data.description,
                position: data.position,
                imageUrl: data.imageUrl
            })
        })
    }
  },[])

  const {
    containerMember,
    containerTextMember,
    addMemberTitle,
    addMemberDescription,
    simpleInput,
    saveButton,
    saveButtonText,
  } = styles;

  return (
    <View style={containerMember}>
      <View style={{ marginTop: 30 }}>
        <GoBack />
      </View>
      <View>
        <View style={containerTextMember}>
          <Text style={addMemberTitle}>{params.title? params.title : "Want to be a member?"}</Text>
          <Text style={addMemberDescription}>
            You can be part of our group easily, just fill all the information
            and that's it!
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="What's your name?"
            onChangeText={(e) => fillMemberData("name", e)}
            style={simpleInput}
            value={memberData.name}
          />
          <TextInput
            placeholder="Tell me about you..."
            numberOfLines={4}
            maxLength={150}
            multiline={true}
            editable={true}
            value={memberData.description}
            style={simpleInput}
            onChangeText={(e) => fillMemberData("description", e)}
          />
          <TextInput
            placeholder="Your position? ex: leader"
            onChangeText={(e) => fillMemberData("position", e)}
            style={simpleInput}
            value={memberData.position}
          />
          <TextInput
            inputMode="url"
            onChangeText={(e) => fillMemberData("imageUrl", e)}
            placeholder="Your foto? ex:http://myphoto/me.jpeg... ?"
            style={simpleInput}
            value={memberData.imageUrl}
          />
        </View>
        <TouchableHighlight
          onPress={async () =>{
            if(params.id){
                await UpdateMember(params.id,memberData)
            }else{
                await CreateMember(memberData)
            }
        }}
        >
          <View style={saveButton}>
            <Text style={saveButtonText}>{params.btnText ? params.btnText : 'Join the group'}</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMember: {
    padding: 25,
  },
  containerTextMember: {
    marginTop: 40,
    marginBottom: 35,
  },
  addMemberTitle: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 10,
    color: "#4C955F",
  },
  addMemberDescription: {
    color: "#7E8780",
  },
  simpleInput: {
    paddingTop: 6,
    paddingBottom: 6,
    borderBottomColor: "#C4CCC6",
    borderBottomWidth: 1,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  saveButton: {
    padding: 15,
    backgroundColor: "#279A43",
    marginTop: 40,
    borderRadius: 50,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default AddMember;
