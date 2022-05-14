import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { baseStyle } from '../../styles/style';
import { FontAwesome } from '@expo/vector-icons';

const Detail = () => {

  const images = [
    "https://cdna.lystit.com/520/650/n/photos/mytheresa/09aa1bc4/polo-ralph-lauren-white-Court-Leather-Sneakers.jpeg",
    "https://cdna.lystit.com/520/650/n/photos/mytheresa/565d0e13/polo-ralph-lauren-white-Court-Leather-Sneakers.jpeg",
    "https://cdna.lystit.com/520/650/n/photos/mytheresa/307643b4/polo-ralph-lauren-white-Court-Leather-Sneakers.jpeg",
    "https://cdna.lystit.com/520/650/n/photos/mytheresa/f4992012/polo-ralph-lauren-white-Baskets-Court-en-cuir.jpeg"
  ]

  return (
    <View>
      <SliderBox images={images} sliderBoxHeight={400} />
      <View style={[baseStyle.container, baseStyle.colView]}>
          <View>
            <Text style={baseStyle.productTitle}>NIKE</Text>
            <Text>Air Max Dawn</Text>
          </View>
          <View>
            <FontAwesome name="heart-o" size={24} color="black" />
          </View>
      </View>
    </View>
  )
}

export default Detail