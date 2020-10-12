import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const styles = StyleSheet.create({
  container: {},
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    color: "black",
  },
});

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const DashboardTile = ({ item }) => (
  <View style={styles.container}>
    <Card style={styles.card}>
      <Card.Title
        title={item.name}
        subtitle={"Card Subtitle"}
        // left={LeftContent}
      />
      {/* <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </Card>
  </View>
);

export default DashboardTile;
