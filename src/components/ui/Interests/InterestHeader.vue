<script setup lang="ts">


import {Button} from "@/components/ui/button";

import { ArrowLeftIcon } from "lucide-vue-next";

defineProps({
  title: String
})

const emits = defineEmits(['toggleBack'])

const toggleBack = () => {
  emits('toggleBack')
}
</script>

<template>
  <header class="z-[999] bg-card rounded-[12px] px-2 w-full h-14 flex items-center shadow-sm border-[1px] border-foreground/10">
    <transition>
      <Button v-if="title" variant="ghost" class="w-10 relative" @click="toggleBack">
        <ArrowLeftIcon class="absolute size-6"/>
      </Button>
    </transition>

    <h1 v-if="title" class="z-10 leading-[20px] text-[20px] font-black pl-3 w-full text-foreground">{{ title }}</h1>

    <h1 v-else class="z-10 text-[25px] font-black pl-3 w-full text-foreground">{{ "Интересы" }}</h1>


  </header>
</template>

<style scoped lang="scss">

</style>