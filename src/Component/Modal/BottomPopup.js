import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomPopup = ({title, show, closePopup, animationType, data}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          height: 47,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 18,
            fontWeight: 'normal',
            color: '#1B2E44',
          }}>
          {item.icon} {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderContent = data => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          extraData={data}
          keyExtractor={item => `key-${item.id}`}
          contentContainerStyle={{paddingBottom: 40}}
        />
      </View>
    );
  };

  return (
    <Modal
      animationType={animationType}
      visible={show}
      transparent={true}
      onRequestClose={() => {}}>
      <View style={{flex: 1, backgroundColor: '#000000AA'}}>
        <Pressable onPress={() => closePopup()} style={{flex: 1}}></Pressable>
        <View
          style={{
            bottom: 0,
            position: 'absolute',
            width: '100%',
            backgroundColor: 'white',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            height: Dimensions.get('window').height * 0.5,
            maxHeight: Dimensions.get('window').height * 0.5,
          }}>
          <Ionicons
            name="remove-outline"
            size={50}
            style={{alignSelf: 'center', height: 40, marginTop: -10}}
          />
          {renderContent(data)}
        </View>
      </View>
    </Modal>
  );
};

export default BottomPopup;

const styles = StyleSheet.create({});
