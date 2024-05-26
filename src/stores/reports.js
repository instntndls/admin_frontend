import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useReportsStore = defineStore('reports', () => {
    const reports = ref([
        {

            "id": 40,
            "author": "Михаил Фарносов",
            "date": "2024-03-18T00:00:00",
            "type": "comment",
            "content": "https://wspark.org/app/post/40",
            "status": "pending",
            "reports": [
                {
                    "id": 1,
                    "reason": "spam",
                    "status": "unresolved",
                    "date": "2024-03-18T00:00:00"
                },
                {
                    "id": 2,
                    "reason": "spam",
                    "status": "pending",
                    "date": "2024-02-18T00:00:00"
                },
                {
                    "id": 3,
                    "reason": "spam",
                    "status": "pending",
                    "date": "2024-04-18T00:00:00"
                }
            ],

        },
        {

            "id": 50,
            "author": "Тест Тест",
            "date": "2024-05-18T12:00:00",
            "type": "post",
            "content": "https://wspark.org/app/post/50",
            "status": "pending",
            "reports": [
                {
                    "id": 1,
                    "reason": "spam",
                    "status": "pending",
                    "date": "2024-03-18T00:00:00"
                },
                {
                    "id": 2,
                    "reason": "spam",
                    "status": "pending",
                    "date": "2024-03-18T00:00:00"
                },
                {
                    "id": 3,
                    "reason": "spam",
                    "status": "pending",
                    "date": "2024-03-20T12:00:00"
                }
            ],

        },
        {

            "id": 23,
            "author": "Нурлан Уразкулов",
            "date": "2024-03-18T12:00:00",
            "type": "question",
            "content": "https://wspark.org/app/post/23",
            "status": "unresolved",
            "reports": [
                {
                    "id": 2,
                    "reason": "spam",
                    "status": "pending",
                    "date": "2024-03-18T00:00:00"
                },
                {
                    "id": 3,
                    "reason": "spam",
                    "status": "pending",
                    "date": "2024-03-18T00:00:00"
                }
            ],

        }
    ])
    function toggleSortByStatus(data) {
        // Если в массиве нет элементов, возвращаем пустой массив
        if (data.length === 0) {
            return [];
        }

        // Функция сравнения для сортировки по статусу
        function compareByStatus(a, b) {
            if (a.status < b.status) {
                return -1;
            }
            if (a.status > b.status) {
                return 1;
            }
            return 0;
        }

        // Проверяем, отсортирован ли массив по статусу в обратном порядке
        const isReversed = data[0].status > data[data.length - 1].status;

        // Если массив уже отсортирован по статусу в обратном порядке, сортируем его в прямом порядке
        // И наоборот
        if (isReversed) {
            data.sort(compareByStatus);
        } else {
            data.sort((a, b) => compareByStatus(b, a));
        }

        return data;
    }

    function toggleSortByDate(data) {
        // Если в массиве нет элементов, возвращаем пустой массив
        if (data.length === 0) {
            return [];
        }

        // Функция сравнения для сортировки по дате
        function compareByDate(a, b) {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        }

        // Проверяем, отсортирован ли массив по дате в обратном порядке
        const isReversed = new Date(data[0].date) > new Date(data[data.length - 1].date);

        // Если массив уже отсортирован по дате в обратном порядке, сортируем его в прямом порядке
        // И наоборот
        if (isReversed) {
            data.sort(compareByDate);
        } else {
            data.sort((a, b) => compareByDate(b, a));
        }

        return data;
    }


    return { reports, toggleSortByStatus, toggleSortByDate }
})
