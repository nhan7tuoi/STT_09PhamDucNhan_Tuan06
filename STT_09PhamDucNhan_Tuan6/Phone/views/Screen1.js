import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Rate, Button } from 'antd';
import { QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';


export default function App({ navigation, route }) {
    const { img } = route.params
    const { mau } = route.params
    const { price } = route.params

    const [urlImg, setUrlImg] = useState('vs_blue.png');
    const [pricePhone, setPricePhone] = useState('2.900.000 VND');
    const [color, setColor] = useState('Xanh');


    useEffect(() => {
        if (img !== undefined && img !== 'vs_blue.png') {
            setUrlImg(img);
            setPricePhone(price);
            setColor(mau);
        }
    }, [img, mau, price]);

    console.log(urlImg);
    console.log(pricePhone);
    console.log(color);
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{ width: 310, height: 380 }}>
                    <Image style={{ width: 310, height: 380 }} source={require('../assets/' + urlImg)} />
                </View>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: 700 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View>
                        <Rate style={{ fontSize: 26 }} defaultValue={5} />
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 18 }}>(Xem 828 đánh giá)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', }}>
                    <Text style={{ paddingLeft: 20, fontSize: 24, fontWeight: 700, color: '#000' }}>{pricePhone}</Text>
                    <Text style={{ paddingLeft: 20, fontSize: 20, fontWeight: 400, color: '#000', textDecorationLine: 'line-through' }}>{pricePhone}</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity style={{ paddingLeft: 20 }}>
                        <Text style={{ color: '#FA0000', fontSize: 14, fontWeight: 700 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    </TouchableOpacity>
                    <QuestionCircleOutlined style={{ fontSize: 24, paddingLeft: 20 }} color='#000' />
                </View>
                <Button
                    onClick={() => { navigation.navigate('Screen2', { urlImg, color,pricePhone }) }}
                    style={{ width: '90%', height: 40, borderRadius: 10, borderWidth: 1, borderColor: '#000', fontSize: 20, fontWeight: 700 }}>4 MÀU - CHỌN MÀU {<RightOutlined style={{ paddingLeft: 40 }} />}</Button>
            </View>
            <View style={styles.button}>
                <Button style={{ fontSize: 20, color: '#fff', backgroundColor: '#CA1536', width: '90%', height: 50, borderRadius: 10, borderWidth: 1, borderColor: '#000', fontSize: 20, fontWeight: 700 }}>MUA NGAY</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 390,
        height: 844,
    },
    content: {
        height: '80%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});