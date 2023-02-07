import { StyleSheet, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  useMemo } from "react";

const Rating = ({ rating }) => {

    const starCounter = useMemo(() => {
        const starLevel = rating / 2
        let renderStar = []
        for (let i = 1; i <= 5; i++) {
            let iconName = 'star-o'
            if ((i <= starLevel) || (i === 5 && starLevel > 4.5)) {
                iconName = 'star'
            }
            renderStar.push(<FontAwesome key={i} name={iconName} size={20} color="yellow" />)
        }
        return renderStar
    }, [rating])

    return <View style={styles.searchContainer}>
        {starCounter}
    </View>
}

const styles = StyleSheet.create({
    searchContainer: {
        justifyContent: 'space-between',
        width: 120,
        alignItems: "center",
        flexDirection: 'row',
    }
})

export default Rating