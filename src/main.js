import { h, render } from 'preact';
import { configure } from "mobx";

import App from './App';
import AppStore from './AppStore';

configure({
  enforceActions: true
});

const store = window.store = new AppStore();

const root = document.querySelector('#app');
render(<App store={store}/>, root, root.lastElementChild);


