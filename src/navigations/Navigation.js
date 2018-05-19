import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';
import React from 'react';
import{
    Text,
    Animated,
    Easing
}from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
    LoginScreen, 
    ProfileScreen,
    NilaiScreen,
    ResetScreen,
    ChangePolicy, 
    PolicyScreen, 
    ResetPolicy, 
    UsernamePolicy,
    WearPolicy,
    RulesPolicy,
    BantuanScreen
} from '../components';
import DrawerContainer from './DrawerContainer';
import {Button} from 'native-base';

// const ModulePraktikan = StackNavigator({
//     Profile: {
//         screen: ProfileScreen
//     },
//     Nilai: {
//         screen: NilaiScreen
//     }
// },{
//     initialRouteName: 'Profile'
// });

// const ModulePolicy = StackNavigator({
//     Policy: {
//         screen: PolicyScreen
//     },
//     Username: {
//         screen: UsernamePolicy
//     },
//     ChangePassword: {
//         screen: ChangePolicy
//     },
//     ResetPassword: {
//         screen: ResetPolicy
//     },
//     Wear: {
//         screen: WearPolicy
//     },
//     Rules: {
//         screen: RulesPolicy
//     }
// },{
//     initialRouteName: 'Policy'
// })

// export default RootStack = StackNavigator({
//     Login: {
//          screen: LoginScreen
//      },
//      Praktikan: {
//          screen: ModulePraktikan
//      },
//      PolicyStack: {
//          screen: ModulePolicy
//      }
//  },{
//      initialRouteName:'Login',
//      headerMode: 'none'
//  });

// export default DemoStack = StackNavigator({
//     Policy: {
//         screen: PolicyScreen
//     },
//     Username: {
//         screen: UsernamePolicy
//     },
//     ChangePassword:{
//         screen: ChangePolicy
//     },
//     ResetPassword: {
//         screen: ResetPolicy
//     },
//     Wear: {
//         screen: WearPolicy
//     },
//     Rules: {
//         screen: RulesPolicy
//     }
// },{
//     initialRouteName: 'Policy'
// });

 const noTransitionConfig = () => ({
     transitionSpec: {
         duration: 0,
         timing: Animated.timing,
         easing: Easing.step0,
     },
 });

// const DrawerStack = DrawerNavigator({
//     Login: {screen:LoginScreen},
//     Profile: {screen:ProfileScreen},
//     Policy:{screen:PolicyScreen}
// },{
//     headerMode: 'none',
//     gestureEnabled: false,
//     contentComponent: props => <DrawerContainer {...props}/>,
// });

// const DrawerNavigation = StackNavigator({
//     DrawerStack: {screen: DrawerStack},
    
//     //Profile Module
//     Nilai: {screen:NilaiScreen},
//     Reset: {screen:ResetScreen},

//     //Policy Module
//     Wear: {screen: WearPolicy},
//     Username: {screen: UsernamePolicy},
//     Rules: {screen: RulesPolicy},
//     Reset: {screen: ResetPolicy},
//     Change: {screen: ChangePolicy},

// },{
//     headerMode: 'float',
//     navigationOptions: ({navigation}) => ({
//         headerStyle: { backgroundColor: '#ffc759'},
//         gesturesEnabled: false,
//         headerLeft: (<Ionicons name='ios-menu' size={30} style={{ paddingLeft: 12 }} onPress={() => { alert('Drawer menu open') }} />),
//     }),
// });

// const LoginStack = StackNavigator({
//     Login: {screen: LoginScreen},
// },{
//     headerMode: 'none',
// });

// export default Navigation = StackNavigator({
//     loginStack : {screen: LoginStack},
//     drawerStack: {screen:DrawerNavigation}
// },{
//     headerMode: 'none',
//     title: 'Main',
//     initialRouteName: 'drawerStack',
//     transitionConfig: noTransitionConfig,
// })

// const LoginStack = StackNavigator({
//     Login: {screen: LoginScreen}
// },{
//     headerMode: 'none',
//     initialRouteName:'Login'
// });

const ProfileStack = StackNavigator({
    Profile: {screen: ProfileScreen},
    Nilai: {screen: NilaiScreen},
    ResetPassword: {screen: ResetScreen},
},{
        headerMode: 'float',
     navigationOptions: ({navigation}) => ({
         headerStyle: { backgroundColor: '#ffc759'},
         gesturesEnabled: false,
         headerLeft: (
            //<Ionicons name='ios-menu' size={30} style={{ paddingLeft: 12 }} onPress={() => navigation.navigate('DrawerOpen')} />
             <Button onPress={() => navigation.navigate('DrawerOpen')} style={{ paddingLeft: 12 }} transparent><Ionicons name='ios-menu' size={30} /></Button>
        ),
     }),
});

const PolicyStack = StackNavigator({
    Policy: {screen: PolicyScreen},
    Rules: {screen: RulesPolicy},
    Wear: {screen: WearPolicy}
    
},{
        headerMode: 'float',
     navigationOptions: ({navigation}) => ({
         headerStyle: { backgroundColor: '#ffc759'},
         gesturesEnabled: false,
         headerLeft: (
             <Button onPress={() => navigation.navigate('DrawerOpen')} style={{ paddingLeft: 12 }} transparent><Ionicons name='ios-menu' size={30} /></Button>
        ),
     }),
});

const BantuanStack = StackNavigator({
    Bantuan: {screen: BantuanScreen},
    Reset: {screen: ResetPolicy},
    Username: {screen: UsernamePolicy},
    ChangePassword: {screen: ChangePolicy}
},{
        headerMode: 'float',
     navigationOptions: ({navigation}) => ({
         headerStyle: { backgroundColor: '#ffc759'},
         gesturesEnabled: false,
         headerLeft: (
             <Button onPress={() => navigation.navigate('DrawerOpen')} style={{ paddingLeft: 12 }} transparent><Ionicons name='ios-menu' size={30} /></Button>
        ),
     }),
});

const DrawerStack = DrawerNavigator({
    PolicyDrawer: {screen: PolicyStack},
    ProfileDrawer: {screen: ProfileStack},
    BantuanDrawer: {screen: BantuanStack}
},{
    gesturesEnabled: false, 
    contentComponent: props => <DrawerContainer {...props} />,
});

export default Navigation = StackNavigator({
    loginStack: {screen: LoginScreen},
    drawerStack: {screen: DrawerStack},
},{
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack',
    transitionConfig: noTransitionConfig,
})