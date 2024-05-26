<script setup>

import {ref} from "vue";
import {Button} from "@/components/ui/button";
import { ArrowRightIcon, EditIcon } from "lucide-vue-next";
import InterestEditDialog from "@/components/ui/Interests/InterestEditDialog.vue";
import router from "@/router";
import {Card} from "@/components/ui/card";


const props = defineProps({
  interest: Object
})

const interest = ref(props.interest)

</script>

<template>

  <Card class="bg-card relative shadow-md w-full max-w-full sm:max-w-80 h-52 m-2 p-5 text-foreground rounded-[12px]">
    <div class="w-full rounded-[8px] flex flex-col items-center">
      <div class="w-full flex justify-between">
        <div class="w-full">
          <p class="text-xl font-bold">{{interest.locale}}</p>
          <p class="Informaition">ID: {{interest.id}}</p>
          <p class="Informaition">Родительский ID: {{interest.parent_interest_id}}</p>
          <p class="Informaition">Количество дочерних интересов: {{interest.child_interests.length}}</p>
          <p class="Informaition">Популярность: {{interest.popularity}}</p>
          <p class="Informaition">Общая популярность: {{interest.total_popularity}}</p>

        </div>
        <InterestEditDialog :interest="interest">
          <Button variant="ghost" class="w-10 relative -m-2">
            <EditIcon class="size-5 absolute"/>
          </Button>
        </InterestEditDialog>

      </div>

      <Button v-if="interest.child_interests.length>0" class="absolute bottom-4 right-3" @click="router.push( { path: `/app/interests/${interest.id}` } )">
        <ArrowRightIcon/>
      </Button>
    </div>

  </Card>

</template>

<style scoped lang="scss">

.Informaition{
  @apply text-foreground/60 font-medium text-[14px]
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>