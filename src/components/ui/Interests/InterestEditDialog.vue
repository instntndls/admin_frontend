<script setup>

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {onMounted, ref} from "vue";
import {getLocales, updateLocales, updateParentId} from "@/api";
import {useInterestsStore} from "@/stores/interests.js";
import {DialogClose} from "@/components/ui/dialog";

const props = defineProps({
  interest: Object,
})

const id = ref(props.interest?.id)

const parentId = ref(props.interest?.parent_interest_id)

const locales = ref()

const payload = ref({})

const createPayload = () => {
  const result = {};
  locales.value.forEach(item => {
    result[item.language_id] = item.locale;
  });
  payload.value = result;
}

onMounted( async () => {
  locales.value = await getLocales(id.value)
})

</script>



<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot/>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle>Редактирование интереса</DialogTitle>
      </DialogHeader>
      <div class="flex flex-col gap-4 py-4 justify-start">

        <div class="flex w-full items-center justify-between gap-4">
          <Label for="parentId">
            ID Родительского интереса
          </Label>
          <Input id="parentId" @input="parentId = $event.target.value" :model-value="parentId" class="max-w-56" />
        </div>

        <div v-for="locale in locales" :key="locale.id" class="flex w-full items-center justify-between gap-4">
          <Label for="locale">
            {{ useInterestsStore().findLanguageById(locale.language_id).name }}
          </Label>
          <Input id="locale" @input="locale.locale = $event.target.value" :model-value="locale.locale" class="max-w-56" />
        </div>

      </div>
      <DialogFooter>
        <DialogClose as-child>
          <Button type="submit" @click="createPayload();
          updateLocales(interest.id, payload);
          updateParentId(interest.id, parentId);
          useInterestsStore().getInterests(); this.$router.go()">
            Сохранить
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped lang="scss">

</style>