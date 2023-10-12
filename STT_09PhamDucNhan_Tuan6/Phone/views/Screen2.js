import React,{useState} from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from 'antd';
export default function Screen2({ route, navigation }) {
    const { urlImg } = route.params;
    const { color } = route.params;
    const {pricePhone}=route.params;

    const [img, setImg]= useState(urlImg);
    const [mau, setMau]= useState(color);
    const [price, setPrice]= useState(pricePhone);



    return (
        <View style={styles.container}>
            <View style={{ width: "100%", height: '20%', flexDirection: 'row', padding: 15 }}>
                <View style={{ width: '30%', height: 150 }} >
                    <Image style={{ width: 110, height: 140 }} source={require('../assets/' + img)} />
                </View>
                <View style={{ width: '70%', paddingLeft: 20, height: '100%', justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 17, fontWeight: 700 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17 }}>Màu:</Text>
                        <Text style={{ fontSize: 17, fontWeight: 700, paddingLeft: 5 }}>{mau}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17 }}>Cung cấp bởi:</Text>
                        <Text style={{ fontSize: 17, fontWeight: 700, paddingLeft: 5 }}>Tiki Tradding</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontWeight: 700 }}>{price}</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: '80%', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#C4C4C4' }}>
                <Text style={{ fontSize: 18, fontWeight: 700 }}>Chọn 1 màu bên dưới:</Text>
                <TouchableOpacity onPress={() => {
                    setImg('vs_blue.png');
                    setMau('Xanh');
                    setPrice('2.900.000 VND');            
                }}>
                    <Image style={{ width: 95, height: 95 }} source={require('../assets/blue.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setImg('vs_red.png');
                        setMau('Đỏ');
                        setPrice('2.800.000 VND');
                    }}>
                    <Image style={{ width: 95, height: 95 }} source={require('../assets/red.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setImg('vs_black.png');
                    setMau('Đen');
                    setPrice('2.700.000 VND');
                }}>
                    <Image style={{ width: 95, height: 95 }} source={require('../assets/black.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setImg('vs_silver.png');
                        setMau('Bạc');
                        setPrice('2.600.000 VND');
                    }}>
                    <Image style={{ width: 95, height: 95 }} source={require('../assets/silver.png')} />
                </TouchableOpacity>
                <Button
                    onClick={() => {
                        navigation.navigate('Screen1', {img,price,mau});
                    }}
                    style={{ width: '90%', height: 50, backgroundColor: '#4d6dc1', color: '#fff', fontSize: 20, fontWeight: 700, borderRadius: 10 }}>XONG</Button>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        width: 390,
        height: 844,
    },
}
);