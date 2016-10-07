import * as angular from 'angular';
import { StateProvider } from 'angular-ui-router';
import { AboutComponent } from './about.component';

const About: ng.IModule = angular
.module('about', [])
.component('about', new AboutComponent)
.config(($stateProvider: StateProvider) => {
    "ngInject";

    $stateProvider
    .state('app.about', {
        url: '/about',
        component: 'about'
    });
});

export default About.name;