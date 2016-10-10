import * as angular from 'angular';
import { State, StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import { HomeComponent } from './home.component';
import { NavService } from './../../common/nav/nav.service';

    const state: Ng1StateDeclaration = {
        name: 'Home',
        url: '/',
        component: 'home'
    }
function routeConfig($stateProvider: StateProvider,) {
    "ngInject";


    $stateProvider
        .state(state);

}
function runConfig(NavService: NavService) {
        NavService.addNavItem(state);

}

const Home: ng.IModule = angular
    .module('components.home', [

    ])
    .component('home', new HomeComponent)
    .config(routeConfig)
    .run(runConfig);

export default Home.name;