<template>
  <q-layout view="HHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Equipamentor </q-toolbar-title>

        <!-- <div>Version v{{ $q.version + " __" }} </div> -->
       <q-btn  flat  round  icon="person" />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"

      @mouseover="miniState = false"
      @mouseout="miniState = true"
    
    >
  
        <q-list>
          <q-item-label header> </q-item-label>

          <EssentialLink 
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
    
    </q-drawer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "dashboard",
    to: "/",
  },

  {
    title: "Ordem de Trabalho",
    caption: "WorkOrders",
    icon: "assignment",
    to: "/workOrder",
  },

  {
    title: "Solicitações",
    caption: "Requests",
    icon: "add",
    to: "/workOrder",
  },

  {
    title: "Locais",
    caption: "Locations",
    icon: "place",
    to: "/workOrder",
  },
  {
    title: "Equipamentos",
    caption: "Assets",
    icon: "settings",
    to: "/list-equipment",
  },
  {
    title: "Manutenção Preventiva (PM)",
    caption: "Preventive Maintenance",
    icon: "build",
    to: "/listLocal",
  },
  {
    title: "Departmento",
    caption: "Department",
    icon: "account_balance",
    to: "/listDepartment",
  },

  {
    title: "Funcionário",
    caption: "Funcionário",
    icon: "people",
    to: "/Department",
  },

  {
    title: "Configurações",
    caption: "Settings",
    icon: "settings",
    to: "/Department1",
  },

{title: "Local",
    caption: "Locale",
    icon: "place",
    to: "/assetTree",},

  {
    title: "Tipos de Serviço",
    caption: "Service Type",
    icon: "settings",
    to: "/listServiceType",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      drawer: ref(false),
      miniState: ref(true),
      contentStyle: {
        backgroundColor: "rgba(0,0,0,0.02)",
        color: "#555",
      },

      contentActiveStyle: {
        color: "black",
      },

      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      },

      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>

body {
    background: #fafafa;
}
</style>
