import { Ng1StateDeclaration } from 'angular-ui-router';
import { NavService, NavItem } from './nav.service';

export class NavComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string;

    constructor() {
        this.controller = NavController;
        this.template = require('./nav.html');
    }
}

class NavController implements ng.IComponentController {
    pages: Array<NavItem>;
    currentPage: string;

    constructor(private NavService: NavService) {
        "ngInject";
    }

    $onInit() {
        this.pages = this.NavService.pages;
    }
}