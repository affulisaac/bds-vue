<template>
  <Button pt="p-4 text-gray-900" :label="label" :icon="icon" :type="type" />
</template>

<script setup lang="ts">
import Button from "primevue/button";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  label: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
