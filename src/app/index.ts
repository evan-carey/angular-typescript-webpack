import * as angular from 'angular';
import { AppComponent } from './app.component';
import Common from './common';
import Components from './components';

import './app.scss';

const App: ng.IModule = angular
    .module('app', [
        'ui.router',
        'ngMessages',
        'ngMaterial',
        'ngAnimate',
        Common,
        Components
    ])
    .component('app', new AppComponent);

export default App.name;