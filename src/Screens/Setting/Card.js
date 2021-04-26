import * as React from 'react';
import { StyleSheet ,TouchableOpacity,Text} from 'react-native';
import { Card, Title, } from 'react-native-paper';
import { THEME } from '../../Constant';

const CardOption = ({title,img,onPress}) => (
  <Card style={styles.container} >
    <Card.Content>
      <Title style={{fontSize:18}}>{title}</Title>
    </Card.Content>
    <Card.Cover style={styles.image} source={img} />
    <Card.Actions>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text style={styles.txt}>Select</Text>
      </TouchableOpacity>
    </Card.Actions>
  </Card>
);

export default CardOption;

const styles=StyleSheet.create({
    container:{
        flex:1,
        borderWidth:2,
        borderColor:THEME.GRAY,
    },
    image:{
        borderRadius:100,
        resizeMode:'cover',
        width:140,
        height:140,
        alignSelf:'center'
    },
    btn:{
        height:30,
        width:"70%",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        borderColor:'gray',
        borderWidth:1.2
    },
    txt:{
        color:THEME.DARK_GRAY,
        //fontSize:15
    }
})