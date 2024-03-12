<template>
    <div>
        <SplitButton v-bind="$attrs" />
    </div>
</template>

<script setup lang="ts">
import SplitButton from 'primevue/splitbutton';

defineOptions({
    inheritAttrs: true
})
</script>

