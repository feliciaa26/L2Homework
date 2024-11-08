import React from 'react';
import { View, Text, Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ name, description, icon, poster }) => {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.iconContainer}>
                <Icon name="sailboat" size={20} color="#98F5F9" />
                <Text style={styles.boatName}>{name}</Text>
            </View>
            <Text style={styles.boatDescription}>{description}</Text>
            <Image source={poster} style={styles.boatImage} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.header}>GetABoat - For Sale</Text>

            <Boat name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." poster={require('./img/sea_ray.jpg')} />
            <Boat name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." poster={require('./img/four_winns.jpg')} />
            <Boat name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." poster={require('./img/flipper.jpg')} />
            <Boat name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." poster={require('./img/princess.jpg')} />
            <Boat name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." poster={require('./img/bayliner.jpg')} />
            <Boat name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." poster={require('./img/fairline.jpg')} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightpink',
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#333',
    },
    boatContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    boatName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10
    },
    boatDescription: {
        fontSize: 15,
        color: 'grey',
        marginBottom: 10,
    },
    boatImage: {
        width: '100%',
        height: 200,
    },
});


export default AllBoats;


