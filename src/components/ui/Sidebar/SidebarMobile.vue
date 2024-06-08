<script setup>

import {FileJsonIcon, Flag, HomeIcon, LogOutIcon, MessageCircleWarningIcon, NetworkIcon} from "lucide-vue-next";
import {Button} from "@/components/ui/button";
import { useUserStore } from "@/stores/user";
</script>

<template>
  <div class="flex flex-row justify-evenly items-center w-full h-20 bg-card rounded-[12px] shadow-sm border-[1px] border-foreground/10">
    <RouterLink to="/app/home">
      <Button variant="ghost" class="Button">
        <HomeIcon />
        <span class="ButtonLinkText">Главная</span>
      </Button>
    </RouterLink>

    <RouterLink to="/app/interests">
      <Button variant="ghost" class="Button">
        <NetworkIcon />
        <span class="ButtonLinkText">Интересы</span>
      </Button>
    </RouterLink>

    <RouterLink to="/app/reports">
      <Button variant="ghost" class="Button">
        <Flag />
        <span class="ButtonLinkText">Жалобы</span>
      </Button>
    </RouterLink>

    <RouterLink to="/app/api">
      <Button variant="ghost" class="Button">
        <FileJsonIcon />
        <span class="ButtonLinkText">API</span>
      </Button>
    </RouterLink>

    <div>
      <Button variant="ghost" class="Button" @click="useUserStore().logout()">
        <LogOutIcon />
        <span class="ButtonLinkText">Выйти</span>
      </Button>
    </div>

  </div>
</template>

<style scoped lang="scss">
.Button {
  @apply flex flex-col h-full w-14 select-none
}
.ButtonLinkText {
  @apply text-[10px] font-medium select-none
}
</style>