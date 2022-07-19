import React from 'react'
import { ScrollView, View } from 'react-native'
import { Heading } from '../../components/Static'

const ChatScreen = ()=>{
    const ws= new WebSocket('ws://host.com/path')//backend

    return(
        <ScrollView>
            <View>
              <Heading content='Send Message To Everyone'/>
            </View>
        </ScrollView>
    )
}

export default ChatScreen;