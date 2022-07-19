import {useTheme} from '@react-navigation/native';
// import InCallManager from 'react-native-incall-manager';
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '../../components/Static';
import BackButton from '../../components/Static/BackButton';
import { ChatScreen } from '../chat';

const VideoCallScreen: React.FC = (props: any) => {
  const [offer, setOffer] = useState(null);
  const [callToUsername, setCallToUsername] = useState(null);
  const [userId, setUseId] = useState('');
  const [socketActive, setSocketActive] = useState(false);
  const [calling, setCalling] = useState(false);
  // Video Scrs
  const [localStream, setLocalStream] = useState({toURL: () => null});
  const [remoteStream, setRemoteStream] = useState({toURL: () => null});
  const [conn, setConn] = useState(new WebSocket('ws://3.20.188.26:8080'));
  
  //chat
  const [chatOpen, setChatOpen] = useState(false)

  const toggleChat = ()=>{
    setChatOpen(true)
  }
  const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('window').height,
      justifyContent: 'space-between',
    },
    chatModal:{
      // top:Dimensions.get('window').height/2,
      position:'relative',
      bottom:0,
      height:Dimensions.get('window').height/2,
      alignItems:'center'
    }
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          
          <BackButton navigation={props.navigation} />
        </View>
        <Modal visible={chatOpen} transparent style={styles.chatModal} >
          <ChatScreen/>
        </Modal>
        <BottomTab  setChatOpen={toggleChat} />
      </View>
    </SafeAreaView>
  );
};

export default VideoCallScreen;

type BottomTabProps = {
  setChatOpen: ()=>void
}

const BottomTab = ({setChatOpen}:BottomTabProps) => {
  const {colors} = useTheme();
  const [micOn, setMicOn] = React.useState(false);
  const [videoOn, setVideoOn] = React.useState(false);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      alignItems: 'center',
      height: 80,
      width: Dimensions.get('window').width,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopLeftRadius:30,
      borderTopRightRadius:30
    },
    chatIcon: {
      backgroundColor: '#fff',
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    micIcon: {
      backgroundColor: micOn ? '#fff' : '#fc015b',
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    videoIcon: {
      backgroundColor: videoOn ? '#fff' : '#fc015b',
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const handleMicPress = () => {
    setMicOn(!micOn);
  };
  const handleVideoPress = () => {
    setVideoOn(!videoOn);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.chatIcon} onPress={setChatOpen}>
        <Icon name="Chat" size={30} />
      </TouchableOpacity>
      {micOn ? (
        <TouchableOpacity style={styles.micIcon} onPress={handleMicPress}>
          <Icon name="MicOn" size={30} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.micIcon} onPress={handleMicPress}>
          <Icon name="MicOff" size={30} color="#aaa" />
        </TouchableOpacity>
      )}
      {videoOn ? (
        <TouchableOpacity style={styles.videoIcon} onPress={handleVideoPress}>
          <Icon name="Video" size={30} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.videoIcon} onPress={handleVideoPress}>
          <Icon name="VideoOff" size={30} color="#aaa" />
        </TouchableOpacity>
      )}
    </View>
  );
};
