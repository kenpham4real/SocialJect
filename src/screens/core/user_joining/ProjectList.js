import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { HEADER_TITLE_PADDING_LEFT, HEADER_TITLE_PADDING_TOP } from '../../../constants/styles/padding'
import { HEADER_TITLE_SIZE } from '../../../constants/styles/fontSize';

import ProjectPost from '../../../components/app/user_joining/ProjectPost'

const ProjectList = props => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Chúng mình có vài thứ cho bạn đây</Text>
            </View>
            <View style={styles.projectList}>
                <FlatList
                    data={[1,2,3,4,5,6,7,8]}
                    keyExtractor={item => item}
                    renderItem={itemData => {
                        return(
                            <ProjectPost/>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header:{
        // borderColor: 'black', borderWidth: 1,
        paddingLeft: HEADER_TITLE_PADDING_LEFT,
        paddingTop: HEADER_TITLE_PADDING_TOP
    },
    headerTitle:{
        fontSize: HEADER_TITLE_SIZE,
        fontWeight: 'bold'
    },
    projectList:{
        marginTop: 20
    },
    postButton:{
        marginBottom: HEADER_TITLE_PADDING_TOP,
        marginHorizontal: HEADER_TITLE_PADDING_LEFT,
        // borderRadius: 10
    }
})


export default ProjectList;