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

    constructor() {
        "ngInject";
    }

    $onInit() {
    }


}