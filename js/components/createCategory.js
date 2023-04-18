import { createElement } from '../helper/createElement.js';

export const createCategory = (app) => {
    const category = createElement('section', {
        className: 'category section-offset',
    });

    const container = createElement('div', {
        className: 'container',
    });

    category.append(container);

    const categoryList = createElement('ul', {
        className: 'category__list',
    });

    container.append(categoryList);

    const createCategoryCard = (data) => {
        const item = createElement('li', {
            className: 'category__item',
        });

        item.dataset.id = data.id;

        const categoryCard = createElement('button', {
            className: 'category__card',
        });

        const categoryTitle = createElement('span', {
            className: 'category__title',
            textContent: data.title,
        });

        const categoryPairs = createElement('span', {
            className: 'category__pairs',
            textContent: `${data.length} пар`,
        });

        categoryCard.append(categoryTitle, categoryPairs);

        const categoryEdit = createElement('button', {
            className: 'category__btn category__edit',
            ariaLabel: 'редактировать',
        });

        const categoryDelete = createElement('button', {
            className: 'category__btn category__del',
            ariaLabel: 'удалить',
        });

        item.append(categoryCard, categoryEdit, categoryDelete);

        return item;
    };

    const mount = (data) => {
        categoryList.textContent = '';
        app.append(category);
        const cards = data.map(createCategoryCard);
        categoryList.append(...cards);
    };

    const unmount = () => {
        category.remove();
    };

    return { mount, unmount, categoryList };
};
