<script setup lang="ts">

import { Button } from "@/components/ui/button"
import { NetworkIcon, HomeIcon, FileJsonIcon, MessageCircleWarningIcon, Flag } from "lucide-vue-next"
</script>

<template>
  <div>
    <RouterLink to="/app/home">
      <Button variant="ghost" class="ButtonLink">
        <HomeIcon />
        <span class="ButtonLinkText">Главная</span>
      </Button>
    </RouterLink>

    <RouterLink to="/app/interests">
      <Button variant="ghost" class="ButtonLink">
        <NetworkIcon />
        <span class="ButtonLinkText">Интересы</span>
      </Button>
    </RouterLink>

    <RouterLink to="/app/reports">
      <Button variant="ghost" class="ButtonLink">
        <Flag />
        <span class="ButtonLinkText">Жалобы</span>
      </Button>
    </RouterLink>

    <RouterLink to="/app/api">
      <Button variant="ghost" class="ButtonLink">
        <FileJsonIcon />
        <span class="ButtonLinkText">API</span>
      </Button>
    </RouterLink>

  </div>

</template>

<style>
.ButtonLink {
  @apply w-full h-12 flex gap-4 my-2 items-center justify-start select-none
}
.ButtonLinkText {
  @apply text-[18px] font-medium select-none
}
</style>