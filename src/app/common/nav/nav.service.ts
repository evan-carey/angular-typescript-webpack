import { State, Ng1StateDeclaration } from 'angular-ui-router';

export class NavService {

    pages: Array<NavItem>;

    constructor() {
        this.pages = new Array<NavItem>();
    }

    addNavItem(page: NavItem) {
        this.pages.push(page);
    }
}


export interface NavItem {
    state: string;
    url: string;
    label: string;
}