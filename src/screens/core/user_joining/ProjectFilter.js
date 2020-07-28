/*
* Screen 2.
* Purpose: Select places, popularites and progresses,
* Function: {
    Screen02: Main (for now, everything is in this function)
}
* Contributors: {
    Hiển Long: 17 June
     Tiến: 25 July
}
*/

// {useState} is to control the state, whether it pop up or not. Modal is to create the pop-up.
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';

const ProjectFilter = props => {
  //This is to control whether the pop-up is open or not. Not sure how this even works, but it does anyway.
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  return (
    /*
    SafeAreaView covers screen2 and have a view covers 4 small others.
    The ImageBackGround is covered in the big View.
    View 1: Button is named "Địa Điểm"
    View 2: Button is named "Độ Phổ Biến"
    View 3: Button is named "Quá Trình"
    View 4: Button is named "Tìm dự án"
    */
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/images/screen2.png')}/>
        <View style={styles.title_1}>
          <Button
            color="blue"
            title="Địa Điểm"
            onPress={() => setModal1Open(true)}
          />
        </View>

        <View style={styles.title_2}>
          <Button
            color="blue"
            title="Độ Phổ Biến"
            onPress={() => setModal2Open(true)}
          />
        </View>

        <View style={styles.title_3}>
          <Button
            color="blue"
            title="Quá Trình"
            onPress={() => setModal3Open(true)}
          />
        </View>

        <View style={styles.title_4}>
          <Button
            color="red"
            title="Tìm dự án"
            onPress={() => props.navigation.navigate('ProjectList')}
          />
        </View>

        <Modal visible={modal1Open}>
        <View style={styles.container}>
          <TouchableOpacity>
          <Text style={styles.paragraph}> Ho Chi Minh city </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.paragraph}> Da Nang </Text>
            </TouchableOpacity>
            <TouchableOpacity>
          <Text style={styles.paragraph}> Ha Noi </Text>
          </TouchableOpacity>
          
          <Button
            //This is for closing the Modal
            onPress={() => setModal1Open(false)}
            title="Close this shit"
            color="dodgerblue"
          />
        </View>
      </Modal>

      <Modal visible={modal2Open}>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.paragraph}> Hiện tại có 100 người cách li </Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.paragraph}> Da Nang cách li 200 người </Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.paragraph}> Ha Noi giãn cách xã hội </Text>
          </TouchableOpacity>
          <Button
            //This is for closing the Modal
            onPress={() => setModal2Open(false)}
            title="Close this shit"
            color="dodgerblue"
          />
        </View>
      </Modal>

      <Modal visible={modal3Open}>
        <View style={styles.container}>
          <TouchableOpacity>
          <Text style={styles.paragraph}> 14 ngày cách li </Text>
          </TouchableOpacity>
         <TouchableOpacity>
         <Text style={styles.paragraph}> chiều 13h ngày 26/7 cách li xã hội </Text>
         </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.paragraph}> Đà Nẵng thất thủ </Text>
          </TouchableOpacity>
          <Button
            //This is for closing the Modal
            onPress={() => setModal3Open(false)}
            title="Close this shit"
            color="dodgerblue"
          />
        </View>
      </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginBottom:12
  },

  image: {
    resizeMode: 'contain',
    height: 320,
    width: 400,
  },

  title_1: {
    textAlign: 'center',
    marginVertical: 50,
    width: 150,
  },
  title_2: {
    textAlign: 'center',
    marginVertical: 30,
    width: 150,
  },
  title_3: {
    textAlign: 'center',
    marginVertical: 30,
    width: 150,
  },
  title_4: {
    textAlign: 'center',
    marginVertical: 40,
    width: 150,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color:'dodgerblue',
    fontWeight:'bold',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default ProjectFilter;