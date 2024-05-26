<script setup>

import {Button} from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-vue-next";
import {Card} from "@/components/ui/card";
import ReportModal from "@/components/ui/Reports/ReportModal.vue";
import {ref} from "vue";

const props = defineProps({
  status: Boolean
})

const jsonArray = ref({

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
      "date": "2024-03-18T00:00:00"
    }
  ],

})

</script>

<template>
  <Card class="w-full bg-card shadow-md rounded-[12px] flex flex-row p-2 px-3">
    <div class="w-full h-full flex flex-col">
      <span class="text-xl font-bold">
        {{props.status ? "Пост" : "Комментарий"}}
      </span>

      <div class="text-sm font-bold text-foreground/70 flex flex-col pl-1 pb-2">
        <span>Дата: 18.03.2024</span>
        <span>Тип контента: {{ props.status ? "Пост" : "Комментарий" }}</span>
        <span>id: 40</span>
        <span>Автор: Михаил Фарносов</span>
        <span class="text-primary underline hover:no-underline">
          <a href="https://wspark.org/app/post/40">Ссылка на контент</a>
        </span>

      </div>

    </div>

    <div class="h-full flex flex-col items-end justify-between p-1">
      <div v-if="props.status" class="StatusIndicator">
        <div class="size-2 bg-red-500 rounded-full"/>
        <span class="text-nowrap">
          Критическая
        </span>
      </div>

      <div v-else class="StatusIndicator">
        <div class="size-2 bg-yellow-500 rounded-full"/>
        <span class="text-nowrap">
          Важная
        </span>

      </div>

      <div v-else class="StatusIndicator">
        <div class="size-2 bg-green-500 rounded-full"/>
        <span class="text-nowrap">
          Обычная
        </span>

      </div>

      <ReportModal>
        <Button class="flex gap-1">
          Рассмотреть
          <ArrowRightIcon class="size-5"/>
        </Button>
      </ReportModal>


    </div>
  </Card>
</template>

<style scoped lang="scss">
.StatusIndicator {
  @apply flex items-center gap-2 text-sm
}
</style>