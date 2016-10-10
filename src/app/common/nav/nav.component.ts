export class NavComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;
    bindings: {
        [name: string]: string
    };

    constructor() {
        this.controller = NavController;
        this.template = require('./nav.html');
        this.bindings = {
            pages: '<'
        }
    }
}

class NavController implements ng.IComponentController {
    constructor() {}
}