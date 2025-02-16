interface Comment {
    id: number;
    email: string;
  }
  
  const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
  
  const getData = async (url: string): Promise<Comment[]> => {
    // Выполняем запрос к API
    const response = await fetch(url);
  
    // Проверяем, что запрос успешен
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    // Парсим ответ в формате JSON
    const data: Comment[] = await response.json();
    return data;
  };
  
  getData(COMMENTS_URL)
    .then((data) => {
      // Обрабатываем данные и выводим в консоль
      const addData: HTMLParagraphElement | null = document.querySelector('#root');
      if (addData !== null) {
        // Создаем строку для вывода всех данных
        let output = '';
        data.forEach((comment) => {
          output += `<div id="${comment.id}">${comment.email}</div>`;
        });
        // Выводим данные в элемент
        addData.innerHTML = output;
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
