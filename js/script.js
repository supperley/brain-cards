import { createHeader } from './components/createHeader.js';

const initApp = () => {
    const headerParent = document.querySelector('.header');
    const app = document.querySelector('#app');

    const headerObj = createHeader(headerParent);
    console.log(headerObj);

    const returnIndex = (e) => {
        e.preventDefault();
        headerObj.updateHeaderTitle('Категории');
    };

    headerObj.headerLogoLink.addEventListener('click', returnIndex);

    headerObj.headerBtn.addEventListener('click', () => {
        headerObj.updateHeaderTitle('Новая категория');
    });
};

initApp();
