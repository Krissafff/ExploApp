import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Servicos from '../pages/Serviços';
import Todos from '../pages/TodosServicos/index';
import Perfil from '../pages/Perfil';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator 
        screenOptions={{headerTintColor: '#002661', drawerActiveTintColor: '#FFF', drawerInactiveTintColor: '#FFF' ,headerStyle:{
        }, drawerStyle:{backgroundColor: '#112'}, headerTitleAlign: 'center'}}>
            <AppDrawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <AppDrawer.Screen name="Serviços" component={Servicos}/>
            <AppDrawer.Screen name="Todos os Serviços" component={Todos}/>
            <AppDrawer.Screen name="Perfil" component={Perfil}/>
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;