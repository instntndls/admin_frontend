<script setup>

import ReportsHeader from "@/components/ui/Reports/ReportsHeader.vue";
import {onMounted, ref} from "vue";
import {useReportsStore} from "@/stores/reports";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Card} from "@/components/ui/card";
import ReportModal from "@/components/ui/Reports/ReportModal.vue";
import {Button} from "@/components/ui/button";
import {ArrowRight, ArrowDownUp} from "lucide-vue-next";
import ReportsStatusInficator from "@/components/ui/Reports/ReportsStatusInficator.vue";

</script>

<template>
  <div class="h-full w-full">
    <ReportsHeader />

    <div class="w-full h-full p-2">
      <Card class="rounded-[12px] p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>id</TableHead>
              <TableHead>Автор</TableHead>
              <TableHead>
                <div class="HeaderItem" @click="useReportsStore().toggleSortByDate(useReportsStore().reports)">
                  Дата
                  <ArrowDownUp class="size-4"/>
                </div>
              </TableHead>
              <TableHead>Тип контента</TableHead>
              <TableHead>Ссылка</TableHead>
              <TableHead>
                <div class="HeaderItem" @click="useReportsStore().toggleSortByStatus(useReportsStore().reports)">
                  Статус
                  <ArrowDownUp class="size-4"/>
                </div>
              </TableHead>
              <TableHead>Жалобы</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody class="font-medium">
            <TableRow v-for="element in useReportsStore().reports" :key="element.id">
              <TableCell>
                {{ element.id }}
              </TableCell>
              <TableCell>
                {{ element.author }}
              </TableCell>
              <TableCell>
                {{ element.date }}
              </TableCell>
              <TableCell>
                {{ element.type }}
              </TableCell>
              <TableCell class="hover:scale-[1.02] transition-all">
                <a :href="element.content" class="text-primary underline">
                  {{ element.content }}
                </a>
              </TableCell>
              <TableCell>
                <ReportsStatusInficator :status="element.status"/>
              </TableCell>
              <TableCell class="w-12">
                <ReportModal :data="element.reports">
                  <Button variant="ghost" class="flex gap-1 items-center w-full">
                  <span class="text-[16px]">
                    {{ element.reports.length }}
                  </span>
                    <ArrowRight class="size-4"/>
                  </Button>
                </ReportModal>

              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>

  </div>
</template>

<style scoped lang="scss">
.HeaderItem {
  @apply -ml-2 h-8 w-min p-2 hover:bg-foreground/10 rounded-[8px] cursor-pointer flex gap-2 items-center
}
.Main::-webkit-scrollbar {
  display: none;
}
</style>