<script setup>

import { Moon, Sun } from "lucide-vue-next"
import Logo from "@/assets/Logo.vue"

import { useColorMode } from "@vueuse/core"
import BottomMenu from "@/components/ui/Sidebar/BottomMenu.vue"
import CardList from "@/components/ui/Sidebar/CardList.vue"
import {Button} from "@/components/ui/button";

const mode = useColorMode()

const toggleMode = () => {
  mode.value === 'dark' ? mode.value = 'light' : mode.value = 'dark'
}
</script>

<template>
  <div class="flex flex-col p-4 bg-card h-full">
    <div class="flex sm:flex-wrap flex-row justify-between w-full">
      <a class="flex items-center gap-0.5" href="/">
        <Logo />
        <p class="pt-[0.03rem] text-xl font-black text-foreground/70">Admin</p>
      </a>

      <nav class="flex gap-4">
        <Button class="w-10 relative" variant="ghost" @click="toggleMode">
          <Moon class="absolute" v-if="mode === 'light'"/>
          <Sun class="absolute" v-if="mode === 'dark'"/>
        </Button>
      </nav>
    </div>
    <div class="flex flex-col justify-between h-full pt-4">
      <CardList/>

      <BottomMenu/>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>