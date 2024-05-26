<script setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { EyeIcon, EyeOff, Loader2 } from 'lucide-vue-next'

import {onMounted, ref} from 'vue'
import router from '@/router/index.js'
import { useUserStore } from '@/stores/user.js'
import {useColorMode} from "@vueuse/core";

const mode = useColorMode()

const email = ref('')
const password = ref('')

const showPassword = ref(false)
const inputType = ref('password')

const emailValid = ref(false)

const loading = ref(false)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
  inputType.value = showPassword.value ? 'text' : 'password'
}

const login = () => {
  useUserStore().login(email.value, password.value)
}

const register = () => {
  window.open('https://wspark.org/auth/register', '_self')
}


const validateEmail = (text) => {
  emailValid.value = !!text
      .toLowerCase()
      .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
}

onMounted( () => {
  mode.value = 'auto'
  if (useUserStore().checkAuth()) {
    router.push('/app').then()
  }
})
</script>

<template>
  <div class="w-full h-full flex justify-center items-center absolute bg-background">
    <Card class="absolute">
      <CardHeader>
        <CardTitle>Войти в аккаунт</CardTitle>
        <CardDescription> Введите вашу почту и пароль для входа </CardDescription>
      </CardHeader>
      <CardContent class="space-y-3 flex flex-col bg-transparent">
        <div class="grid gap-3">
          <Label for="email">Email</Label>
          <Input
              id="email"
              type="email"
              placeholder="mail@example.com"
              v-model="email"
              @keydown.enter="login"
              @input="validateEmail(email)"
          />
        </div>
        <div class="grid gap-3">
          <Label for="password">Пароль</Label>
          <div class="flex items-center">
            <Input id="password" :type="inputType" v-model="password" @keydown.enter="login" />
            <div
                @click="toggleShowPassword"
                class="absolute right-10 cursor-pointer opacity-30 hover:opacity-70"
            >
              <EyeIcon v-if="!showPassword" />
              <EyeOff v-else />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex flex-col gap-4">
        <Button
            :disabled="!emailValid || password.length < 6 || loading"
            class="w-full"
            @click="login"
        >
          <Loader2 v-if="loading" class="mr-2 size-4 animate-spin" />
          Войти
        </Button>
        <Button variant="outline" class="w-full" @click="register">
          Зарегистрироваться
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<style scoped></style>
