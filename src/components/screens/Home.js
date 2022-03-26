import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { baseStyle } from '../../styles/style';

const Home = () => {
  return (
      <>
        <View style={baseStyle.container}>
        <Text style={baseStyle.header}>Recommended for you</Text>
        </View>
        <ScrollView style={{paddingStart:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
                <Text>Nike</Text>
                <Text>Arch Logo</Text>
                <Text>$72</Text>
            </View>
            <View>
                <Text>Nike</Text>
                <Text>Arch Logo</Text>
                <Text>$72</Text>
            </View>
            <View>
                <Text>Nike</Text>
                <Text>Arch Logo</Text>
                <Text>$72</Text>
            </View>
            <View>
                <Text>Nike</Text>
                <Text>Arch Logo</Text>
                <Text>$72</Text>
            </View>
            <View>
                <Text>Nike</Text>
                <Text>Arch Logo</Text>
                <Text>$72</Text>
            </View>
            <View>
                <Text>Nike</Text>
                <Text>Arch Logo</Text>
                <Text>$72</Text>
            </View>
            <View>
                <Text>Nike</Text>
                <Text>Arch Logo</Text>
                <Text>$72</Text>
            </View>
        </ScrollView>
    </>
  )
}

export default Home