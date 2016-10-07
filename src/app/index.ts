import * as angular from 'angular';
import { UrlRouterProvider } from 'angular-ui-router';
import { AppComponent } from './app.component';
import Common from './common';
import Components from './components';

import './app.scss';


function routeConfig(
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: UrlRouterProvider
) {
    "ngInject";

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

function themeConfig($mdThemingProvider: ng.material.IThemingProvider) {
    "ngInject";

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red')
        .backgroundPalette('white');
}

const App: ng.IModule = angular
    .module('app', [
        'ui.router',
        'ngMessages',
        'ngMaterial',
        'ngAnimate',
        Common,
        Components
    ])
    .config(routeConfig)
    .component('app', new AppComponent);

export default App.name;