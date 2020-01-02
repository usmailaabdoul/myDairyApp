import React, { Component } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { Router, Stack, Scene, Tabs, Actions } from 'react-native-router-flux';

import { 
    Home, 
    Setting,
    myDairy,
    Memories,
    Calendar
} from './../screens';
import TabIcon from './../components/TabIcon/TabIcon.component';
import styles from './Navigation.style';

let backPressed = 0;

class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            backPressed: 1
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton() {
        if ( Actions.currentScene ) {
            if (backPressed > 0) {
                BackHandler.exitApp();
                backPressed = 0;
            }
            else {
                backPressed++;
                ToastAndroid.show("Press Again To Close App", ToastAndroid.SHORT);
                setTimeout(() => { backPressed = 0 }, 2000);
                return true;
            }
        }
    }

    render() {

        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key='home'
                        showLabel={false}
                        tabs={true}
                        tabBarStyle={styles.tabBar}
                        hideNavBar={true}
                        default='Main'
                    >
                        <Scene key='home' component={Home} icon={TabIcon} hideNavBar={true} title='Home' />
                        <Scene key='myDiary' component={myDairy} icon={TabIcon} hideNavBar={true} title='my Diary' initial={true} />
                        <Scene key='memories' component={Memories} icon={TabIcon} hideNavBar={true} title='Memories' />
                        <Scene key='calendar' component={Calendar} icon={TabIcon} hideNavBar={true} title='Calendar' />
                        <Scene key='settings' component={Setting} icon={TabIcon} hideNavBar={true} title='Setting' />
                    </Scene>
                </Stack>
            </Router>
        )
    }
}

export default Navigation;