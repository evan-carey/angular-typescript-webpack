import * as angular from 'angular';
import { State, StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import { HomeComponent } from './home.component';
import { NavService, NavItem } from './../../common/nav/nav.service';

function routeConfig($stateProvider: StateProvider,) {
    "ngInject";


    $stateProvider
        .state('app.home', {
            url: '/',
            component: 'home'
        });

}
function runConfig(NavService: NavService) {
    const page: NavItem = {
        state: 'app.home',
        url: '/',
        label: 'Home'
    };
        NavService.addNavItem(page);

}

const Home: ng.IModule = angular
    .module('components.home', [

    ])
    .component('home', new HomeComponent)
    .config(routeConfig)
    .run(runConfig);

export default Home.name;