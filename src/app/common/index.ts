import * as angular from 'angular';
import Nav from './nav';

const Common: ng.IModule = angular
.module('app.common', [
    Nav
]);

export default Common.name;