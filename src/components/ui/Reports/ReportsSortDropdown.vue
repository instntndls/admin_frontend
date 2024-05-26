<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {ArrowDown, ArrowUp} from "lucide-vue-next";

import {useReportsStore} from "@/stores/reports.js";



</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <slot/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem class="flex gap-2" @click="useReportsStore().sortBy = 'Сначала новые'">
        <ArrowUp class="size-4"/>
        Сначала новые
      </DropdownMenuItem>
      <DropdownMenuItem class="flex gap-2" @click="useReportsStore().sortBy = 'Сначала старые'">
        <ArrowDown class="size-4"/>
        Сначала старые
      </DropdownMenuItem>
      <DropdownMenuItem class="flex gap-2" @click="useReportsStore().sortBy = 'Сначала важные'">
        <ArrowUp class="size-4"/>
        Сначала важные
      </DropdownMenuItem>
      <DropdownMenuItem class="flex gap-2" @click="useReportsStore().sortBy = 'Сначала не важные'">
        <ArrowDown class="size-4"/>
        Сначала не важные
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>