import { View, Text } from 'react-native'
import React from 'react'
import { baseStyle } from '../../styles/style';

const Search = () => {
  return (
    <View style={baseStyle.container}>
        <Text style={baseStyle.header}>Search for something</Text>
    </View>
  )
}

export default Search