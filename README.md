Deploy: https://origiboy.github.io/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# eshop-react
Макет который вам необходимо создать link
Для создания стилей проекта использовать препроцессор SASS/SCSS
Для создания “Порядок: сперва дешевле” использовать select
Блок из 6 товаров необходимо сделать с помощью технологии Grid Layout

Функциональные особенности
Реализовать сортировку товаров по цене (“Порядок: сперва дешевле” / “Порядок: сперва дороже”)
Товар каталога можно реализовать двумя способами
Описать товары jsx - ом (создать react компонент товара)
Создать на нативном javascript. 
Объяснить выбор создания react компонент или использованием нативного javascript
При клике на изображение корзины, необходимо чтобы товар добавлялся на страницу корзины (слой в figma add to cart )
На странице корзины реализовать компонент с возможностью задания количества товаров, который
принимает параметры min и max
хранит в состоянии текущее значение счётчика - current
в начале работы устанавливает current = min
реализует две кнопки для увеличения и уменьшения current на 1
не выпускает current за границы min и max
Рассчитывается финальная стоимость товаров
Разместить проект на github


Дополнительная информация 
для реализации варианта React можно использовать любые библиотеки, которые считаете уместными.
можете воспользоваться и TypeScript

Результат

Прислать ссылку на реализованный проект в github pages


-----

- Товары создаются с помощью jsx (так как одинаковый компонент с помощью списка)
- При достижении макс/мин количества товаров стрелочки убираются
- При добавлении одного и того же товара в корзину увеличивается его количество
