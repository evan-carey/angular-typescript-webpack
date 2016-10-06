import * as angular from 'angular';

import Todo from './todo';

const Components: ng.IModule = angular
.module('app.components', [
    Todo
]);

export default Components.name;