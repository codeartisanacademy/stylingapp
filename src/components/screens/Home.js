import { View, Text, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import React from 'react';
import { baseStyle } from '../../styles/style';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView style={{backgroundColor:'white', paddingBottom:40}}>
                <View style={baseStyle.container}>
                    <Text style={baseStyle.header}>Recommended for you</Text>
                </View>
                <ScrollView style={{ paddingStart: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={baseStyle.boxProductSmall}>
                        <ImageBackground style={baseStyle.imageSmall} resizeMode="contain" source={{ uri: "https://cdna.lystit.com/200/250/tr/photos/mclabels/21d5fcd5/gucci-WHITE-Leather-Sneakers.jpeg" }}>

                        </ImageBackground>
                        <Text style={baseStyle.productTitle}>GUCCI</Text>
                        <Text style={[baseStyle.greyText, baseStyle.marginBottomSm]}>Women's White Ace Bee Embroidered Sneakers</Text>
                        <Text style={baseStyle.fontBold}>$691</Text>
                    </View>
                    <View style={baseStyle.boxProductSmall}>
                        <ImageBackground style={baseStyle.imageSmall} resizeMode="contain" source={{ uri: "https://cdna.lystit.com/200/250/tr/photos/ssense/832feb30/adidas-originals-COREBLACKCOREBLAC-Vegan-Leather-Stan-Smith-Sneakers.jpeg" }}>

                        </ImageBackground>
                        <Text style={baseStyle.productTitle}>adidas Original</Text>
                        <Text style={[baseStyle.greyText, baseStyle.marginBottomSm]}>Men's Black Vegan Leather Stan Smith Sneakers</Text>
                        <Text style={baseStyle.fontBold}>$111</Text>
                    </View>
                    <View style={baseStyle.boxProductSmall}>
                        <ImageBackground style={baseStyle.imageSmall} resizeMode="contain" source={{ uri: "https://cdna.lystit.com/200/250/tr/photos/stand-out/e966bee7/new-balance-TimberwolfAngora-574-Leather-Trainers.jpeg" }}>

                        </ImageBackground>
                        <Text style={baseStyle.productTitle}>New Balance</Text>
                        <Text style={[baseStyle.greyText, baseStyle.marginBottomSm]}>Men's Gray 574v3 Sneaker
</Text>
                        <View style={baseStyle.colView}>
                            <Text style={[baseStyle.fontBold, baseStyle.strikeThrough, baseStyle.marginRightSm]}>$111</Text>
                            <Text style={[baseStyle.fontBold, baseStyle.redColor]}>$86</Text>
                        </View>
                        
                    </View>
                    <View style={baseStyle.boxProductSmall}>
                        <ImageBackground style={baseStyle.imageSmall} resizeMode="contain" source={{ uri: "https://cdna.lystit.com/200/250/tr/photos/coltortiboutique/84183b66/veja-BiancoArancio-SNEAKERS-VEGANE-V-10.jpeg" }}>

                        </ImageBackground>
                        <Text style={baseStyle.productTitle}>Veja</Text>
                        <Text style={[baseStyle.greyText, baseStyle.marginBottomSm]}>Men's V-10 Vegan Leather Sneakers
</Text>
                        <View style={baseStyle.colView}>
                            <Text style={[baseStyle.fontBold, baseStyle.strikeThrough, baseStyle.marginRightSm]}>$124</Text>
                            <Text style={[baseStyle.fontBold, baseStyle.redColor]}>$73</Text>
                        </View>
                        
                    </View>
                    
                </ScrollView>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home