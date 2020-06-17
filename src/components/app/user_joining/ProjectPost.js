import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { HEADER_TITLE_PADDING_LEFT, HEADER_TITLE_PADDING_TOP } from '../../../constants/styles/padding';

const ProjectPost = props => {
    return(
        <TouchableOpacity style={styles.postButton}>
            <View style={styles.container}>
                <View style={styles.postImageContainer}>
                    <Image source={require('../../../assets/images/space.jpg')} style={{height: null, width: null, flex: 1, borderRadius: 10}}/>
                </View>
                <View style={styles.postContentContainer}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>Blood Donation</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Deadline<Text style={{fontWeight: 'normal'}}> 20/6/2020</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProjectPost;

const styles = StyleSheet.create({
    container: {
        // borderColor: 'yellow', borderWidth: 2,
        height: 250,
        borderRadius: 10
    },
    postImageContainer:{
        flex: 1,
    },
    postContentContainer:{
        // borderColor: 'white', borderWidth: 2,
        position: 'absolute',
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    postButton:{
        marginBottom: HEADER_TITLE_PADDING_TOP,
        marginHorizontal: HEADER_TITLE_PADDING_LEFT,
        
    }

})