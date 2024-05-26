<script setup>

import {onMounted, ref, watch} from "vue";
import InterestCard from "@/components/ui/Interests/InterestCard.vue";
import {useInterestsStore} from "@/stores/interests";
import Header from "@/components/ui/Interests/InterestHeader.vue";
import router from "@/router/index.js";
import {useRoute} from "vue-router";
import { LoaderCircle } from "lucide-vue-next";

const route = useRoute()

const interestsData = ref({})

const parentId = ref(interestsData.value.parent_id)

const parentData = ref({})

const loading = ref(true)

const writeInterests = (id) => {
  if (!id) {
    interestsData.value = useInterestsStore().allInterests
  } else {
    interestsData.value = useInterestsStore().findInterestById(parseInt(id), useInterestsStore().allInterests).child_interests
  }
}

const checkRoute = (redirectValue = null) => {
  if (!redirectValue) {
    if (interestsData.value[0].parent_interest_id === null) {
      router.push({ path: `/app/interests` })

    } else {
      router.push({ path: `/app/interests/${interestsData.value[0].parent_interest_id}` })
    }
  } else {
    router.push({ path: `/app/interests/${redirectValue}` })
  }
}

const toggleBack = () => {
  if (parentData.value.parent_interest_id) {
    writeInterests(parentData.value.parent_interest_id )
  } else {
    interestsData.value = useInterestsStore().allInterests
  }
  checkRoute()
}

onMounted(async () => {
  await useInterestsStore().getAllLanguages()
  await useInterestsStore().getInterests()
  loading.value = false
  writeInterests(route.params.id)
})

watch(interestsData, () => {
  parentId.value = interestsData.value[0].parent_interest_id
  parentData.value = useInterestsStore().findInterestById(parentId.value, useInterestsStore().allInterests)
})

watch(route, async () => {
  if (route.params.id) {
    checkRoute(route.params.id)
    await writeInterests(route.params.id)
  } else {
    await router.push({path: `/app/interests`})
    interestsData.value = useInterestsStore().allInterests
  }
})

</script>

<template>


    <div class="w-full h-full">
      <Header :title="useInterestsStore().generatePath(parseInt(route.params.id), useInterestsStore().allInterests)" @toggleBack="toggleBack"/>
      <transition>
        <div v-if="loading" class="blur-[0.5px] pb-16 w-full h-full flex items-center justify-center">
          <LoaderCircle class="size-14 animate-spin duration-800 text-primary" />
        </div>
        <div v-else class="Main  flex flex-wrap justify-evenly w-full h-full pt-4 pb-16 gap-[2vw] overflow-auto" v-auto-animate>
          <InterestCard :parentData="parentData" v-for="interest in interestsData" :key="interest.id" :interest="interest" @writeInterests="writeInterests"/>
        </div>
      </transition>

    </div>

</template>

<style scoped lang="scss">
.Main::-webkit-scrollbar {
  display: none;
}
</style>