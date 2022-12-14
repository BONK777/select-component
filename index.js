import ClassListPeeker from './components/peeker.js';

if (!customElements.get("ag-list")) {
    customElements.define("ag-list", ClassListPeeker);
}
