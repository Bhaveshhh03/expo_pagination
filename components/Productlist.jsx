import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true)
const Productlist = () => {
    const [product, setproduct] = useState([]);
    const [currentpage, setcurrentpage] = useState(0);
    const [loading, setloading] = useState(false)
    //getting data through API
    const getdata = async () => {
        setloading(true);
        //expanding limit for fatching more data 
        const nextpage = currentpage + 10;
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=${nextpage}`)
            const result = await response.json();
            setloading(false);
            setcurrentpage(nextpage);
            // adding new productdata in previous productdata
            setproduct([...product, ...result]);
        } catch (error) {
            setloading(false);
            console.log(error);
        }
    }
    useEffect(() => {
        getdata
    })
    return (
        <View style={styles.page}>
            <View >
                {/* Using Flatlist to display data  */}
                <FlatList
                    data={product}
                    keyExtractor={item => item?.id.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.card} key={item?.id}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{item?.title}</Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Price: {item?.price}</Text>
                            <Text>{item?.category?.name}</Text>
                        </View>
                    )}
                    onEndReached={getdata}
                    onEndReachedThreshold={1.5}
                    ListFooterComponent={() => {
                        return (
                            <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' ,marginBottom:30}}>
                                {loading && <><Text>Hang on...</Text><ActivityIndicator size={30} /></>}
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({ //styling
    page: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    card: {
        marginHorizontal: 18,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'black',
    }
});
export default Productlist