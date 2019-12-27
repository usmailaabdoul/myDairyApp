import React, { Component } from 'react';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';

import { 
    Home, 
    Setting,
    myDairy,
    Memories,
    Calendar
} from './../screens';
import TabIcon from './../components/TabIcon/TabIcon.component';
import styles from './Navigation.style';

class Navigation extends Component {

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
                        <Scene key='calendar' component={Calendar} icon={TabIcon} hideNavBar={true} title='Calendar' />
                        <Scene key='memories' component={Memories} icon={TabIcon} hideNavBar={true} title='Memories' />
                        <Scene key='settings' component={Setting} icon={TabIcon} hideNavBar={true} title='Setting' />
                    </Scene>
                </Stack>
            </Router>
        )
    }
}

export default Navigation;