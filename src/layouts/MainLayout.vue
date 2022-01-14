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

        <q-toolbar-title>
         Equipamentor
        </q-toolbar-title>

        <div>Version v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >

        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'


const linksList = [

  {
    title: 'Dashboard',
    icon: 'dashboard',
    to: '/'
  },
    {
    title: 'Equipamento',
    caption: 'Equipment',
    icon: 'settings',
    to: '/list-equipment'
  },
    {
    title: 'Manutenção Preventiva (PM)',
    caption: 'Preventive Maintenance',
    icon: 'build',
    to: '/listLocal'
  },    {
    title: 'Departmento',
    caption: 'Department',
    icon: 'account_balance',
    to: '/addDepartment'
  },

  {
    title: 'Funcionário',
    caption: 'Funcionário',
    icon: 'people',
    to: '/Department'
  },
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
