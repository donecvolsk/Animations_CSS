export default class Collaps {
    constructor() {
        this.container = document.querySelector('.container-collaps');
        this.btn = this.container.querySelector('.collaps-control');
        this.collapsWinduw = this.container.querySelector('.collaps-items');
    }

    clickBtn() {   
        const click = () => {
            this.collapsWinduw.classList.toggle('closed');
        };

        this.btn.addEventListener('click', click);
    }
}