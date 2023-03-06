import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  TouchableHighlight,
} from "react-native";
import MemberCard from "../components/MemberCard";
import Icon from "react-native-vector-icons/AntDesign";
import { GetMembers } from "../services/MembersService";

const Home = () => {
  const router = useRouter();
  const goTo = () => {
    router.push({
      pathname: "member/",
      params: { name: "Jeremy Mezon" },
    });
  };
  const data = [
    {
      name: "Jeremy Mezon",
    },
    {
      name: "Rafael Ogando",
    },
    // {
    //     name: "John Doe"
    // }
  ];

  const algo = async () => await GetMembers();
  console.log(algo);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Members</Text>
      </View>
      <View style={styles.membersList}>
        {data.length ? (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={{ flex: 1 }}>
                <Pressable onPress={goTo} /*onLongPress={}*/>
                  <MemberCard name={item.name} />
                </Pressable>
              </View>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <Text style={{ textAlign: "center" }}>{`No members yet :(`}</Text>
        )}
      </View>
      <TouchableHighlight
        style={styles.bottomPosition}
        onPress={() => {
          router.push("/add-member");
        }}
      >
        <View style={styles.addMemberButton}>
          <Icon
            name="plus"
            size={21}
            style={{ paddingRight: 10 }}
            color="white"
          />
          <Text style={styles.addMemberText}>Add Member</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  titleContainer: {
    width: "100%",
    borderBottomColor: "#4C955F",
    borderBottomWidth: 3,
  },
  homeContainer: {
    display: "flex",
    position: "relative",
    height: "100%",
  },
  membersList: {
    justifyContent: "center",
    height: "100%",
  },
  bottomPosition: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  addMemberButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#4C955F",
  },
  addMemberText: {
    textAlign: "center",
    color: "white",
    fontSize: 21,
    fontWeight: 600,
  },
});

export default Home;
