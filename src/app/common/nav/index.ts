import { StateProvider } from 'angular-ui-router';
import * as angular from 'angular';
import { NavComponent } from './nav.component';
import { NavService, NavServiceProvider } from './nav.service';



const Nav: ng.IModule = angular
    .module('nav', [])
    .component('nav', new NavComponent())
    .provider('NavService', () => new NavServiceProvider)
    // .service('NavService', NavService)
    .config(($stateProvider: StateProvider) => {
        "ngInject";

        $stateProvider.state({
            name: 'Nav',
            abstract: true,
            component: 'nav',
            resolve: {
                // pages: (NavService: NavService) => {
                //     "ngInject";
                //     return NavService.pages;
                // }
            }
        })
    })

export default Nav.name;