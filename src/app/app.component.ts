/**
 * App Component
 *
 * @export
 * @class AppComponent
 * @implements {ng.IComponentOptions}
 */
export class AppComponent implements ng.IComponentOptions {
    template: string;
    controller: ng.IControllerConstructor;

    constructor() {
        this.template = require("./app.html");
        this.controller = AppController;
    }
};

/**
 * App Controller
 *
 * @class AppController
 * @implements {ng.IComponentController}
 */
export class AppController implements ng.IComponentController {

    constructor() {
        "ngInject";
    }

    $onInit() {

    }

    $onChanges(changes: ng.IOnChangesObject) { }
}