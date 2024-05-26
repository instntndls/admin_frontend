<script setup lang="ts">

import { Button } from "@/components/ui/button"

import { useCounterStore } from '@/stores/counter'
</script>

<template>
  <iframe class="w-full h-full" src="https://grafana.usparq.com/d/rYdddlPWk/node-exporter-full?orgId=2"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox allow-downloads allow-modals"

  ></iframe>
</template>
