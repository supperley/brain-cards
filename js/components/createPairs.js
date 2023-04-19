import { createElement } from '../helper/createElement.js';

export const createPairs = (app) => {
    const card = createElement('section', {
        className: 'card section-offset',
    });

    const container = createElement('div', {
        className: 'container card__container',
    });

    card.append(container);

    const btnReturn = createElement('button', {
        className: 'card__return',
        ariaLabel: 'Возврат к категориям',
    });

    const btnItem = createElement('button', {
        className: 'card__item',
    });

    container.append(btnReturn, btnItem);

    const createCard = (data) => {
        const textFront = createElement('span', {
            className: 'card__front',
            textContent: data[0],
        });

        const textBack = createElement('span', {
            className: 'card__back',
            textContent: data[1],
        });

        btnItem.append(textBack, textFront);

        btnItem.addEventListener('click', () => {
            console.log('qwerty');
            textFront.classList.toggle('card__front');
            textBack.classList.toggle('card__back');
        });
    };

    const mount = (data) => {
        app.append(card);
        console.log(data);
        createCard(data.pairs[0]);
    };

    const unmount = () => {
        card.remove();
    };

    return { mount, unmount };
};
