import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ContactItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => {
        // Passando userId para a tela de detalhes
        navigation.navigate('ContactDetails', { userId: item.id });
      }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ContactItem;
