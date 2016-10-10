import { State, Ng1StateDeclaration } from 'angular-ui-router';

export class NavService {

    pages: Array<Ng1StateDeclaration>;

    constructor() {
        this.pages = new Array<Ng1StateDeclaration>();
    }

    addNavItem(page: Ng1StateDeclaration) {
        this.pages.push(page);
    }
}

export class NavServiceProvider implements ng.IServiceProvider {
    $get() {
        return new NavService();

    }
}