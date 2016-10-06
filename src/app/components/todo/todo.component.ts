import { StateService } from 'angular-ui-router';
import './todo.scss';

export class TodoComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    templateUrl: string;

    constructor() {
        this.controller = TodoController;
        this.templateUrl = 'src/components/todo/todo.html';
    }
}

class TodoController implements ng.IComponentController {

    constructor(
        private $state: StateService,
        private $mdDialog: ng.material.IDialogService
    ) {
        "ngInject";
    }

    $onInit() {
    }


}