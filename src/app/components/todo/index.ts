import * as angular from 'angular';
import { StateProvider } from 'angular-ui-router';
import { TodoComponent } from './todo.component';

function routeConfig($stateProvider: StateProvider) {
    "ngInject";

    $stateProvider
        .state('todo', {
            url: '/',
            component: 'todo'
        });
}

const Todo: ng.IModule = angular
    .module('components.todo', [

    ])
    .component('todo', new TodoComponent)
    .config(routeConfig);

export default Todo.name;