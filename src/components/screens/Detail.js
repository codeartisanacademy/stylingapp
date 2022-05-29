import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { baseStyle } from '../../styles/style';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

const Detail = () => {
  const [open, setOpen] = useState(false);

  const images = [
    "https://cdna.lystit.com/520/650/n/photos/mytheresa/09aa1bc4/polo-ralph-lauren-white-Court-Leather-Sneakers.jpeg",
    "https://cdna.lystit.com/520/650/n/photos/mytheresa/565d0e13/polo-ralph-lauren-white-Court-Leather-Sneakers.jpeg",
    "https://cdna.lystit.com/520/650/n/photos/mytheresa/307643b4/polo-ralph-lauren-white-Court-Leather-Sneakers.jpeg",
    "https://cdna.lystit.com/520/650/n/photos/mytheresa/f4992012/polo-ralph-lauren-white-Baskets-Court-en-cuir.jpeg"
  ]

  return (
    <ScrollView>
      <SliderBox images={images} sliderBoxHeight={400} />
      <View style={[baseStyle.container, baseStyle.colView]}>
          <View style={{width:'90%'}}>
            <Text style={baseStyle.productTitle}>NIKE</Text>
            <Text>Air Max Dawn</Text>
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesome name="heart-o" size={24} color="black" />
            </TouchableOpacity>
          </View>
      </View>
      <View style={baseStyle.container}>
          <Text style={baseStyle.bigNumber}>$129</Text>
          <Text>from Scot</Text>

          <View style={{marginTop:20}}>
            <DropDownPicker
              open={open}
              setOpen={setOpen}
              items={
                [
                  {
                    label: '9',
                    value: 9
                  },
                  {
                    label: '10',
                    value: 10
                  }
                ]
              }
              
            />
            <TouchableOpacity style={[{marginTop:10, backgroundColor:'black', padding:10}]}>
              <Text style={{color:'white', alignSelf:'center', fontSize:18}}>Visit</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={[baseStyle.container]}>
              <Text style={baseStyle.titleText}>SHOP SIMILAR</Text>
              <View style={baseStyle.colView}>
                <View style={{width:'50%', backgroundColor:'white', borderRightWidth:1, borderRightColor:'#cecece', padding:10}}>
                    <Image source={{uri:'https://cdna.lystit.com/200/250/tr/photos/tessabit/cdf07910/nike--Air-Max-95-Kj-Sneakers.jpeg'}} style={{width:'98%', 'height':160, 'marginBottom':10}} />
                    <Text style={baseStyle.productTitle}>NIKE</Text>
                    <Text>Air Max Dawn</Text>
                    <Text>$129</Text>
                </View>
                <View style={{width:'50%', backgroundColor:'white',padding:10}}>
                  <Image source={{uri:'https://cdna.lystit.com/200/250/tr/photos/tessabit/cdf07910/nike--Air-Max-95-Kj-Sneakers.jpeg'}} style={{width:'98%', 'height':160, 'marginBottom':10}} />
                      <Text style={baseStyle.productTitle}>NIKE</Text>
                      <Text>Air Max Dawn</Text>
                      <Text>$129</Text>
                </View>
              </View>
      </View>
    </ScrollView>
  )
}

export default Detail