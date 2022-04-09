import { View, Text, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
import React from 'react';
import { baseStyle } from '../../styles/style';
import LineDivider from '../partials/LineDivider';
import { AntDesign } from '@expo/vector-icons';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView style={{backgroundColor:'white', paddingBottom:40}} showsVerticalScrollIndicator={false}>
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
                <LineDivider /> 
                {/* end of "Recommended for you" */}
                <View style={[baseStyle.container, baseStyle.column]}>
                    <Text style={baseStyle.header}>A Pop Culture Vulture's Shopping Guide</Text>
                    <View style={{width:'100%'}} >
                        <AntDesign name="arrowright" size={24} color="black" style={{alignSelf:'flex-end'}}  />
                    </View>
                    
                </View>
                <View style={baseStyle.container}>
                    <Text>If Rihanna Gave Me Her Credit Card This Is What I'd Buy</Text>
                </View>
                <ScrollView style={{ paddingStart: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={baseStyle.marginRightSm}>
                        <ImageBackground style={baseStyle.imageBig} source={{uri:'https://cdna.lystit.com/520/650/n/photos/mytheresa/6017de46/gucci-beige-Original-GG-Canvas-Baseball-Cap.jpeg'}}></ImageBackground>
                    </View>
                    <View style={baseStyle.boxProductSmall}>
                        <ImageBackground style={baseStyle.imageSmall} resizeMode="contain" source={{ uri: "https://cdna.lystit.com/200/250/tr/photos/cettire/63fd5f91/burberry-Black-Shield-Frame-Sunglasses.jpeg" }}>

                        </ImageBackground>
                        <Text style={baseStyle.productTitle}>GUCCI</Text>
                        <Text style={[baseStyle.greyText, baseStyle.marginBottomSm]}>Women's White Ace Bee Embroidered Sneakers</Text>
                        <Text style={baseStyle.fontBold}>$691</Text>
                    </View>
                    <View style={baseStyle.boxProductSmall}>
                        <ImageBackground style={baseStyle.imageSmall} resizeMode="contain" source={{ uri: "https://cdna.lystit.com/200/250/tr/photos/ruelala/2bc78df1/versace--Icon-Classic-Gent-Watch.jpeg" }}>

                        </ImageBackground>
                        <Text style={baseStyle.productTitle}>GUCCI</Text>
                        <Text style={[baseStyle.greyText, baseStyle.marginBottomSm]}>Women's White Ace Bee Embroidered Sneakers</Text>
                        <Text style={baseStyle.fontBold}>$691</Text>
                    </View>
                    <View style={baseStyle.boxProductSmall}>
                        <ImageBackground style={baseStyle.imageSmall} resizeMode="contain" source={{ uri: "https://cdna.lystit.com/200/250/tr/photos/mclabels/21d5fcd5/gucci-WHITE-Leather-Sneakers.jpeg" }}>

                        </ImageBackground>
                        <Text style={baseStyle.productTitle}>GUCCI</Text>
                        <Text style={[baseStyle.greyText, baseStyle.marginBottomSm]}>Women's White Ace Bee Embroidered Sneakers</Text>
                        <Text style={baseStyle.fontBold}>$691</Text>
                    </View>
                </ScrollView>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Home