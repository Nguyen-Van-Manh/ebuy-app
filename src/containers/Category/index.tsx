import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Image } from 'react-native-elements'

const { width, height } = Dimensions.get("window");

const Category = () => {
    return (
        <ScrollView >
            <Text>ABC</Text>
            <Image height={100} width={100} source={{ uri: "https://www.insertcart.com/wp-content/uploads/2016/09/category.png"}}/>

        </ScrollView>
    )
}

export default Category
