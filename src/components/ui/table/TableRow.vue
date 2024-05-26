<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tr :class="cn('border-b border-foreground/10 transition-colors hover:bg-foreground/[0.02]', props.class)">
    <slot />
  </tr>
</template>
