import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {container, green, headerContainer} from '../../style/styles';
import LogoForm from '../../Component/LogoForm';
import logo from '../../../assets/icons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import XPopover from '../../Component/Modal/XPopover';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Popover, {
  PopoverPlacement,
  PopoverMode,
} from 'react-native-popover-view';
import BottomPopup from '../../Component/Modal/BottomPopup';

export const settingsIcon = <Ionicons name="settings-outline" size={20} />;
export const archiveIcon = <Entypo name="back-in-time" size={20} />;
export const activityIcon = (
  <MaterialCommunityIcons name="progress-clock" size={20} />
);
export const qrcodeIcon = (
  <MaterialCommunityIcons name="qrcode-scan" size={20} />
);
export const savedIcon = <Feather name="bookmark" size={20} />;
export const closefriendsIcon = <Feather name="list" size={20} />;
export const favoritesIcon = <Feather name="star" size={20} />;
export const covid19Icon = <Feather name="heart" size={20} />;
export const topIcon = <Ionicons name="remove-outline" size={60} />;

const BottomPopUpList = [
  {id: 0, name: 'Setting', icon: settingsIcon},
  {id: 1, name: 'Archive', icon: archiveIcon},
  {id: 2, name: 'Your activity', icon: activityIcon},
  {id: 3, name: 'QR code', icon: qrcodeIcon},
  {id: 4, name: 'Saved', icon: savedIcon},
  {id: 5, name: 'Close Friends', icon: closefriendsIcon},
  {id: 6, name: 'Favorites', icon: favoritesIcon},
  {id: 7, name: 'COVID-19 Information Center', icon: covid19Icon},
];

const UserHeader = props => {
  const PopoverRef = useState();
  const navigation = useNavigation();
  const [showPopover, setShowPopover] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const doAction = action => {
    setShowPopover(false);
    setTimeout(() => {
      action && action();
    }, 300);
  };

  const close = () => {
    setIsShow(false);
  };

  return (
    <View
      style={[
        // {marginHorizontal: 12},
        headerContainer,
        ,
      ]}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Vadaa </Text>
          <SimpleLineIcons
            name="arrow-down"
            size={16}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'red',
              marginTop: 6,
            }}
          />
        </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <LogoForm uri={logo.plus} />
        <LogoForm
          uri={logo.menu}
          onPress={() => setIsShow(true)}
          ref={PopoverRef}
        />
      </View>
      <BottomPopup
        show={isShow}
        title={topIcon}
        animationType={'slide'}
        closePopup={close}
        data={BottomPopUpList}
      />
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  popoverText: {
    fontSize: 20,
  },
});
