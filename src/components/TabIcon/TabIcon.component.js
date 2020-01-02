import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = ({ title, focused, selected }) => {

    let iconName = "";
    let smallicon = false;
    if (title == 'Home') {
        iconName = "ios-home";
    }

    if (title == "my Diary") {
        smallicon = true;
        iconName = "ios-journal";
    }
    if (title == "Calendar") {
        smallicon = true;
        iconName = "ios-calendar";
    }

    if (title == "Memories") {
        smallicon = true;
        iconName = "ios-folder-open";
    }

    if (title == "Setting") {
        iconName = "ios-settings"
    }
    let textColor = focused ? '#27ae60' : '#999999'
    let borderColor = focused ? '#27ae60' : '#FFFFFF'
    return (
        <View style={[styles.mainWrapper, { borderTopColor: borderColor, }]}>
            {smallicon == true ?
                <View style={{ alignItems: 'center' }}>
                    <Icon
                        size={20}
                        name={iconName}
                        style={{ color: focused ? '#27ae60' : '#ccc' }}
                    />
                    <Text style={{ fontSize: 16, color: textColor, fontWeight: '700' }}>{title}</Text>
                </View>

                :
                <View>
                    {
                        title == "Setting" ?
                            <Icon
                                size={25}
                                name={iconName}
                                style={{ color: focused ? '#27ae60' : '#000' }}
                            />
                            :
                            <Icon
                                size={25}
                                name={iconName}
                                style={{ color: focused ? '#27ae60' : '#ccc' }}
                            />
                    }
                </View>
            }

        </View >

    )
}

export default TabIcon;

const styles = {
    mainWrapper: {
        // flex: 1,
        height: 56,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 4,
        padding: 3
    }

}