import { View, Text, ScrollView, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { baseStyle } from '../../styles/style';
import LineDivider from '../partials/LineDivider';
import BoxHeader from '../partials/BoxHeader';
import { AntDesign } from '@expo/vector-icons';

const Home = ({navigation}) => {
    const handlePress = ()=>{
        navigation.navigate("Detail");
    }
    return (
        <SafeAreaView>
            <ScrollView style={{backgroundColor:'white', paddingBottom:40}} showsVerticalScrollIndicator={false}>
            <BoxHeader title="Recommended For You" />
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

                <BoxHeader title="A Pop Culture Vulture's Shopping Guide" />
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
                {/* end of the box */}

                <LineDivider />

                <View>
                    <TouchableOpacity style={baseStyle.buttonStyle}>
                        <Text>SHOP NOW</Text>
                    </TouchableOpacity>
                </View>

                <BoxHeader title="The Hottest Sneakers In The World This Week" />

                <TouchableOpacity onPress={handlePress}>
                <View style={[baseStyle.colView, baseStyle.container]}>
                    <View width={40}>
                        <Text style={baseStyle.bigNumber}>1</Text>
                    </View>
                    <View width={80}>
                        <Image style={baseStyle.imageThumbnailSm} source={{uri:'https://cdna.lystit.com/200/250/tr/photos/ruelala/18f2851b/christian-louboutin-Green-Louis-Junior-Spikes-Orlato-Suede-Sneaker.jpeg'}} />
                    </View>
                    <View width={140}>
                        <View>
                            <Text style={baseStyle.productTitle}>ADIDAS ORIGINALS</Text>
                            <Text>Gazelle Sneakers Multi - Gray </Text>
                            <Text>$350</Text>
                        </View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    <View width={40}>
                        <AntDesign name="hearto" size={24} color="black" style={{alignSelf:'center'}} />
                    </View>
                    <View width={40}>
                        <Text style={[baseStyle.bigNumber, {alignSelf:'flex-end'}]}>6</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <View style={[baseStyle.colView, baseStyle.container]}>
                    <View width={40}>
                        <Text style={baseStyle.bigNumber}>2</Text>
                    </View>
                    <View width={80}>
                        <Image style={baseStyle.imageThumbnailSm} source={{uri:'https://cdna.lystit.com/200/250/tr/photos/ruelala/18f2851b/christian-louboutin-Green-Louis-Junior-Spikes-Orlato-Suede-Sneaker.jpeg'}} />
                    </View>
                    <View width={140}>
                        <View>
                            <Text style={baseStyle.productTitle}>ADIDAS ORIGINALS</Text>
                            <Text>Gazelle Sneakers Multi - Gray </Text>
                            <Text>$350</Text>
                        </View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    <View width={40}>
                        <AntDesign name="hearto" size={24} color="black" style={{alignSelf:'center'}} />
                    </View>
                    <View width={40}>
                        <Text style={[baseStyle.bigNumber, {alignSelf:'flex-end'}]}>9</Text>
                    </View>
                </View>

                <View style={[baseStyle.colView, baseStyle.container]}>
                    <View width={40}>
                        <Text style={baseStyle.bigNumber}>3</Text>
                    </View>
                    <View width={80}>
                        <Image style={baseStyle.imageThumbnailSm} source={{uri:'https://cdna.lystit.com/200/250/tr/photos/ruelala/18f2851b/christian-louboutin-Green-Louis-Junior-Spikes-Orlato-Suede-Sneaker.jpeg'}} />
                    </View>
                    <View width={140}>
                        <View>
                            <Text style={baseStyle.productTitle}>ADIDAS ORIGINALS</Text>
                            <Text>Gazelle Sneakers Multi - Gray </Text>
                            <Text>$350</Text>
                        </View>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    <View width={40}>
                        <AntDesign name="hearto" size={24} color="black" style={{alignSelf:'center'}} />
                    </View>
                    <View width={40}>
                        <Text style={[baseStyle.bigNumber, {alignSelf:'flex-end'}]}>9</Text>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home