import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import ContactItem from '../components/ContactItem'; // Corrija o caminho conforme necessário

export default function Home({ navigation }) {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getContactsAPI = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            alert('Falha ao carregar contatos.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getContactsAPI();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <FlatList
                    data={contacts}
                    renderItem={({ item }) => (
                        <ContactItem
                            item={item}
                            navigation={navigation} // Passando navegação para o item
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
