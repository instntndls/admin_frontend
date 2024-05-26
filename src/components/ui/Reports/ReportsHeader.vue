<script setup>

import { ArrowDownWideNarrow } from "lucide-vue-next";
import {Button} from "@/components/ui/button";
import SortDropdown from "@/components/ui/Reports/ReportsSortDropdown.vue";
import {useReportsStore} from "@/stores/reports.js";
import {Input} from "@/components/ui/input";

import { Search } from "lucide-vue-next";


</script>

<template>
  <header class="px-5 mb-2 z-[999] bg-card rounded-[12px] w-full h-14 flex items-center justify-between shadow-sm border-[1px] border-foreground/10">

    <h1 class="z-10 leading-[20px] text-[25px] font-black text-foreground">{{ "Жалобы" }}</h1>

    <div class="relative w-1/4 items-center hidden sm:block">
      <Input id="search" type="text" placeholder="Поиск..." class="pr-12 h-8" />
      <span class="absolute end-0 inset-y-0 flex items-center justify-center px-4">
        <Search class="size-4 text-muted-foreground" />
      </span>
    </div>


  </header>
</template>

<style scoped lang="scss">

</style>