import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getAllInterests, getLanguages} from "@/api";

export const useInterestsStore = defineStore('interest', () => {
    const allInterests = ref({})

    const allLanguages = ref({})

    const getInterests = async () => {
        allInterests.value = await getAllInterests(true)
    }

    async function getAllLanguages() {
        allLanguages.value = await getLanguages()
    }

    function findLanguageById(id){
        for (let i = 0; i < allLanguages.value.length; i++) {
            const language = allLanguages.value[i];
            // Если id текущего элемента совпадает с искомым id
            if (language.id === id) {
                // Возвращаем этот элемент
                return language;
            }
        }
    }

    function findInterestById(id, interests){
        for (let i = 0; i < interests.length; i++) {
            const interest = interests[i];
            // Если id текущего элемента совпадает с искомым id
            if (interest.id === id) {
                // Возвращаем этот элемент
                return interest;
            }
            // Если у текущего элемента есть дочерние интересы
            if (interest.child_interests.length > 0) {
                // Рекурсивно вызываем эту же функцию для дочерних интересов
                const foundInterest = findInterestById(id, interest.child_interests);
                // Если такой интерес был найден в дочерних элементах, возвращаем его
                if (foundInterest) {
                    return foundInterest;
                }
            }
        }
        // Если интерес с заданным id не найден, возвращаем null
        return null;
    }

    function generatePath(interestId, interests) {
        function findPathHelper(interests, interestId, path) {
            for (let i = 0; i < interests.length; i++) {
                const interest = interests[i];
                if (interest.id === interestId) {
                    path.push(interest.locale);
                    return true;
                }
                if (interest.child_interests.length > 0) {
                    if (findPathHelper(interest.child_interests, interestId, path)) {
                        path.unshift(interest.locale);
                        return true;
                    }
                }
            }
            return false;
        }

        const path = [];
        if (findPathHelper(interests, interestId, path)) {
            return path.join(" / ");
        } else {
            return null;
        }
    }




    return { allInterests, getInterests, findInterestById, allLanguages, getAllLanguages, findLanguageById, generatePath}
})