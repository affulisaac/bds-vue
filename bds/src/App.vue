<script setup lang="ts">
import BdsButton from "./components/bds/button.vue";
import BdsDropdown from "./components/bds/dropdown.vue";
import BdsChips from "./components/bds/chips.vue";
import BdsSplitButton from "./components/bds/splitButton.vue";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
const items = [
  {
    label: "Update",
    icon: "pi pi-refresh",
    command: () => {
      toast.add({
        severity: "success",
        summary: "Updated",
        detail: "Data Updated",
        life: 3000,
      });
    },
  },
  {
    label: "Delete",
    icon: "pi pi-times",
    command: () => {
      toast.add({
        severity: "warn",
        summary: "Delete",
        detail: "Data Deleted",
        life: 3000,
      });
    },
  },
  {
    label: "Vue Website",
    icon: "pi pi-external-link",
    command: () => {
      window.location.href = "https://vuejs.org/";
    },
  },
  { label: "Upload", icon: "pi pi-upload", to: "/fileupload" },
];

const chipList = ref();

const save = () => {
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "Data Saved",
    life: 3000,
  });
};
</script>

<template>
  <Toast />

  <h1 class="text-1xl font-bold mb-3 px-4 mt-3">All Components</h1>

  <div class="gap-8 flex px-4 ...">
    <div>

      <BdsDropdown
        :filter="false"
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
        label="I am button"
      />
      
    </div>
    <BdsButton :outlined="true" label="Search" icon="pi pi-user" />
    <BdsChips v-model="chipList" separator="," />

    <BdsSplitButton
      label="Save"
      icon="pi pi-plus"
      @click="save"
      :model="items"
    />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
