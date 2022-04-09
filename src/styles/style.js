import {color, padding, margin, font} from './base';

export const baseStyle = {
    container: {
        paddingHorizontal: padding.sm,
        paddingVertical: padding.md
    },
    header: {
        color:color.primary,
        fontSize: font.lg,
        fontWeight: 'bold'
    },
    imageSmall:{
        width:120,
        height:160,
        marginBottom:15,
    },
    imageBig:{
        width:300,
        height:360,
    },
    boxProductSmall:{
        width:120,
        marginRight: margin.md,
    },
    productTitle:{
        fontWeight:"bold",
        marginBottom:10,
    },
    greyText:{
        color:'#666666'
    },
    fontBold:{
        fontWeight:"bold",
    },
    marginBottomSm:{
        marginBottom:margin.sm,
    },
    marginRightSm:{
        marginRight:margin.sm,
    },
    colView:{
        display:"flex",
        flexDirection:"row"
    },
    redColor:{
        color:'red'
    },
    strikeThrough:{
        textDecorationLine:"line-through"
    },
    line:{
        marginHorizontal:margin.lg,
        borderBottomColor: '#666666',
        borderBottomWidth:1,
        marginVertical:margin.lg,
    },
    column:{
        flexDirection:"row",
        width:'50%',
    },
    textRight:{
        textAlign:'right',
    }


}

