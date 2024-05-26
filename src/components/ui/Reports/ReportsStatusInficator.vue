<script setup lang="ts">

import {Card} from "@/components/ui/card";

defineProps({
  status: String
})
</script>

<template>
  <div class="flex items-center bg-accent/10 py-1 px-2 border border-foreground/10 gap-2 rounded-[8px] w-min hover:bg-foreground/10 transition-all select-none">
    <div :class="status === 'pending' ? 'Pending' : 'Unresolved'"></div>
    <span class="text-nowrap">
      {{ status === 'pending' ? "В процессе" : "Не решено"}}
    </span>
  </div>
</template>

<style scoped lang="scss">
.Pending {
  @apply bg-green-500 size-1 rounded-full shadow-md shadow-green-500
}
.Unresolved {
  @apply bg-red-500 size-1 rounded-full shadow-md shadow-red-500
}

</style>