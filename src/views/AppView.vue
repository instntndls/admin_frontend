<script setup>
import { RouterView } from 'vue-router'

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import Sidebar from "@/components/ui/Sidebar/Sidebar.vue"
import { useUserStore } from '@/stores/user.js'
import {onMounted, ref} from "vue"
import SidebarMobile from "@/components/ui/Sidebar/SidebarMobile.vue";

const mobile = ref(false)

const checkMobile = () => {
  mobile.value = window.innerWidth < 1024;
}

onMounted( () => {
  checkMobile()
  useUserStore().getUser()
  if (!useUserStore().checkAuth()) {
    router.push('/login').then()
  }
  window.onresize = () => {
    mobile.value = window.innerWidth < 1024;
  }
})

</script>

<template>

  <main class="h-[100dvh] flex flex-col px-1 py-4 lg:p-0">
    <ResizablePanelGroup
        direction="horizontal"
    >
      <ResizablePanel
          class="Sidebar shadow-sm border-r-[1px] border-foreground/10 rounded-r-[12px] max-w-[40vw] min-w-[20vw]"
          :default-size="20">
        <Sidebar v-if="!mobile"/>

      </ResizablePanel>
      <ResizableHandle class="bg-transparent"/>
      <ResizablePanel :default-size="80">
        <div class="flex h-full items-center justify-center px-1">
          <RouterView />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    <div class="px-2">
      <SidebarMobile v-if="mobile"/>
    </div>

  </main>


</template>

<style scoped>
@media (max-width: 1024px) {
  .Sidebar {
    @apply hidden
  }
}
</style>
