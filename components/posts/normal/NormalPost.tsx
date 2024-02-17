import { View, Image, Text, Pressable } from 'react-native'
import React from 'react'

interface NormalPostProps {
    imgURL: string;
    captions: string;
    post_id: string;
}

const NormalPost: React.FC<NormalPostProps> = ({imgURL, captions, post_id}) => {
  return (
    <View style={{paddingVertical: 7, paddingHorizontal: 15}}>
        <View style={{width: '100%', height: 100}}>
            <Image source={{uri: imgURL}} style={{width: '100%', height: '100%'}}/>
        </View>
        <View>
            <Text>{captions}</Text>
        </View>
        <Pressable onPress={() => console.log(post_id)}>
            <Text>View More</Text>
        </Pressable>
    </View>
  )
}

export default NormalPost