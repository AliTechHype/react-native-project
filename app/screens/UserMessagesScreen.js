import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableHighlight,
  Keyboard,
  FlatList,
} from "react-native";
import moment from "moment";

const Chat = ({ navigation }) => {
  const scrollViewRef = useRef(null);
  const inputRef = useRef(null);

  const [newMessage, setNewMessage] = useState("");
  const [user] = useState({ id: 1 });
  const [messages, setMessages] = useState([
    {
      user_id: 1,
      content: "Hello World!",
      created_at: new Date(),
    },
    {
      user_id: 2,
      content: "World isn't here, please leave a message.",
      created_at: new Date(),
    },
  ]);

  const onCancel = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      user_id: user.id,
      content: newMessage,
      created_at: new Date(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
  };

  const renderRow = ({ item }) => {
    const isMe = item.user_id === user.id;
    return (
      <View style={[styles.messageRow, isMe && styles.meRow]}>
        <TouchableHighlight
          underlayColor="#dddddd"
          style={[styles.messageContent, isMe && styles.me]}
        >
          <View>
            <Text style={styles.message}>{item.content}</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.messageDate}>
          {moment(item.created_at).fromNow()}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      ref={scrollViewRef}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        data={messages}
        renderItem={renderRow}
        keyExtractor={(_, index) => index.toString()}
        style={styles.listView}
        scrollEnabled={false}
      />
      <TextInput
        style={styles.newInput}
        value={newMessage}
        placeholder="Message..."
        returnKeyType="send"
        ref={inputRef}
        onFocus={() => {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }}
        onBlur={() => scrollViewRef.current?.scrollTo({ y: 0 })}
        onChangeText={setNewMessage}
        onSubmitEditing={sendMessage}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  listView: {
    padding: 10,
  },
  newInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    padding: 10,
    height: 50,
  },
  messageRow: {
    alignItems: "flex-start",
    marginBottom: 5,
  },
  meRow: {
    alignItems: "flex-end",
  },
  messageContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ebebeb",
  },
  me: {
    alignItems: "flex-end",
    backgroundColor: "#d2fffd",
  },
  message: {
    fontSize: 16,
    color: "#888",
  },
  messageDate: {
    fontSize: 12,
    color: "#656565",
    padding: 2,
  },
});

export default Chat;
