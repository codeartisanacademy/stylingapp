import {View, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { baseStyle } from '../../styles/style';

const BoxHeader = (props)=>{
    const {title} = props;
  return (
      <View style={[baseStyle.container, baseStyle.column]}>
          <Text style={baseStyle.header}>{title}</Text>
          <View style={{ width: '100%'}} >
              <AntDesign name="arrowright" size={24} color="black" style={{ alignSelf: 'flex-end' }} />
          </View>
      </View>
  )
}

export default BoxHeader