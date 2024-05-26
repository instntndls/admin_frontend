<script setup>

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {DialogClose} from "@/components/ui/dialog";
import {useReportsStore} from "@/stores/reports.js";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import ReportsStatusInficator from "@/components/ui/Reports/ReportsStatusInficator.vue";
import {ArrowDownUp} from "lucide-vue-next";
import {ref} from "vue";

const props = defineProps({
  data: Array
})

const reports = ref(props.data)
</script>



<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot/>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[500px] min-w-[80%] lg:h-[80%] h-[100dvh] flex flex-col">
      <DialogHeader>
        <DialogTitle>Жалобы</DialogTitle>
      </DialogHeader>
      <div class="w-full h-full">
        <div class="rounded-[12px] p-0 border-foreground/20 ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>id</TableHead>
                <TableHead>Причина</TableHead>
                <TableHead>
                  <div class="HeaderItem" @click="useReportsStore().toggleSortByDate(reports)">
                    Дата
                    <ArrowDownUp class="size-4"/>
                  </div>
                </TableHead>
                <TableHead>
                  <div class="HeaderItem" @click="useReportsStore().toggleSortByStatus(reports)">
                    Статус
                    <ArrowDownUp class="size-4"/>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody class="font-medium">
              <TableRow v-for="element in reports" :key="element.id">
                <TableCell>
                  {{ element.id }}
                </TableCell>
                <TableCell>
                  {{ element.reason }}
                </TableCell>
                <TableCell>
                  {{ element.date }}
                </TableCell>
                <TableCell>
                  <ReportsStatusInficator :status="element.status"/>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <DialogFooter>
        <DialogClose as-child class="h-min">
          <Button type="submit">
            Сохранить
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped lang="scss">
.HeaderItem {
  @apply -ml-2 h-8 w-min p-2 hover:bg-foreground/10 rounded-[8px] cursor-pointer flex gap-2 items-center
}

</style>