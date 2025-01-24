import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactDetails = ({ route }) => {
  // Desestruturando 'userId' dos parâmetros da navegação
  const { userId } = route.params || {}; // Se 'route.params' for undefined, 'userId' será undefined

  return (
    <View style={styles.container}>
      {userId ? (
        <Text>Detalhes do Contato com ID: {userId}</Text>
      ) : (
        <Text>Não foi possível carregar os detalhes.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContactDetails;
