<template>
  <div class="q-pa-md q-gutter-sm">
    <q-input ref="filterRef" filled v-model="filter" label="Filter">
      <template v-slot:append>
        <q-icon
          v-if="filter !== ''"
          name="clear"
          class="cursor-pointer"
          @click="resetFilter"
        />
      </template>
    </q-input>
    <h4>{{ selected }}</h4> 


    <q-tree
      :nodes="simple"
      node-key="label"
      :filter="filter"
      v-model:selected="selected"
      selected-color="primary"
   
  
   
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const filter = ref("");
    const filterRef = ref(null);
    const selected = ref(null);
    const label = ref(null);

    return {
      filter,
      filterRef,
      selected,
      label,

     

      selectGoodService() {
        if (selected.value !== "Good service") {
          selected.value = "Good service";
        }
      },



      unselectNode() {
        selected.value = null;
      },

      simple: [
        {
          label: "01-PCEBG",

          icon: "location_city",
          children: [
            {
              label: "SMT",
              color: "green",
             

              icon: "location_city",
              children: [
                {
                  label: "Linha 01",
                  disabled: false,
                  icon: "location_city",
                  children: [
                    { label: "PAN01", icon: "settings_applications" },
                    { label: "PAN02", icon: "settings_applications" },
                  ],
                },
                {
                  label: "Linha 02",
                  disabled: false,

                  icon: "location_city",
                  children: [
                    { label: "PAN01", icon: "settings_applications" },
                    { label: "PAN02", icon: "settings_applications" },
                  ],
                },
                { label: "Linha 03", icon: "location_city" },
                { label: "Linha 04", icon: "location_city" },
              ],
            },
            {
              label: "PTH",
              disabled: false,
              icon: "location_city",
              children: [
                { label: "Wave 01", icon: "settings_applications" },
                { label: "Wave 02", icon: "settings_applications" },
              ],
            },
            {
              label: "Warehouse",

              icon: "location_city",
              children: [
                { label: "Kitting", icon: "location_city" },
                { label: "Estoque 01", icon: "location_city" },
                { label: "Estoque 02", icon: "location_city" },
              ],
            },
          ],
        },
      ],

      resetFilter() {
        filter.value = "";
        filterRef.value.focus();
      },
    };
  },
};
</script>
