"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    // Выполняем запрос к API
    const response = yield fetch(url);
    // Проверяем, что запрос успешен
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Парсим ответ в формате JSON
    const data = yield response.json();
    return data;
});
getData(COMMENTS_URL)
    .then((data) => {
    // Обрабатываем данные и выводим в консоль
    const addData = document.querySelector('#root');
    if (addData !== null) {
        // Создаем строку для вывода всех данных
        let output = '';
        data.forEach((comment) => {
            output += `ID: ${comment.id}, Email: ${comment.email}<br>`;
        });
        // Выводим данные в элемент
        addData.innerHTML = output;
    }
})
    .catch((error) => {
    console.error('Error fetching data:', error);
});
