import * as angular from 'angular';

import Home from './home';
import About from './about';

const Components: ng.IModule = angular
.module('app.components', [
    Home,
    About
]);

export default Components.name;