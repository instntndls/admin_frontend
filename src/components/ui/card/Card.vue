<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-3xl bg-card text-card-foreground shadow-xl p-1 border border-foreground/10',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
