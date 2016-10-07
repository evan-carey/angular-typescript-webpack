export class NavComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = NavController;
        this.template = require('./nav.html');
    }
}

class NavController implements ng.IComponentController {
    constructor() {}
}