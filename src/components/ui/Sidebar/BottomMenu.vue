<script setup>

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import { LogOutIcon } from "lucide-vue-next"
import { useUserStore} from "@/stores/user";
import { AppConfig } from '@/config'
import { ref } from "vue"

const user = JSON.parse(localStorage.getItem('user') || '{}')

const name = user.first_name + ' ' + user.last_name

const fallBack = user.first_name[0] + user.last_name[0]



</script>

<template>

  <div class="flex items-center justify-between h-12">
    <div class="flex items-center gap-2">
      <Avatar>
        <AvatarImage :src="AppConfig.fileAPI + '/images/' + user.avatar" alt="Avatar Image"/>
        <AvatarFallback>{{ fallBack }}</AvatarFallback>
      </Avatar>
      <div class="flex flex-col h-min leading-3 gap-2">
        <h3 class="font-bold">{{ name }}</h3>
        <p class="text-[12px] text-muted-foreground font-medium">Открыть профиль</p>
      </div>
    </div>
    <Button variant="ghost" class="relative w-10 hover:bg-destructive hover:text-background" @click="useUserStore().logout()">
      <LogOutIcon class="absolute w-5" />
    </Button>

  </div>
</template>

<style scoped lang="scss">

</style>