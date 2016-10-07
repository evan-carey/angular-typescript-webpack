import * as angular from 'angular';
import { StateProvider } from 'angular-ui-router';
import { HomeComponent } from './home.component';

function routeConfig($stateProvider: StateProvider) {
    "ngInject";

    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        });
}

const Home: ng.IModule = angular
    .module('components.home', [

    ])
    .component('home', new HomeComponent)
    .config(routeConfig);

export default Home.name;