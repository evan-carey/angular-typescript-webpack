import * as angular from 'angular';
import { State, StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import { AboutComponent } from './about.component';
import { NavService, NavServiceProvider } from './../../common/nav/nav.service';

const state: Ng1StateDeclaration = {
    name: 'About',
    url: '/about',
    component: 'about'
}

function routeConfig($stateProvider: StateProvider) {
    "ngInject";



    $stateProvider
        .state(state);

}
function runConfig(NavService: NavService) {
    NavService.addNavItem(state);
}

const About: ng.IModule = angular
    .module('components.about', [])
    .component('about', new AboutComponent)
    .config(routeConfig)
    .run(runConfig);


export default About.name;