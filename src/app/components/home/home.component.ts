import { StateService } from 'angular-ui-router';
import './home.scss';

export class HomeComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = HomeController;
        this.template = require('./home.html');
    }
}

class HomeController implements ng.IComponentController {

    constructor(
        private $state: StateService,
        private $mdDialog: ng.material.IDialogService
    ) {
        "ngInject";
    }

    $onInit() {
    }


}