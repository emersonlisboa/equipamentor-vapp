<template>
  <div class="q-md">
    <q-select filled v-model="model" :options="todos" label="Filled" />

    <q-btn color="primary" label="Primary" @click="listEquipment" />

    
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "listLocal",

  data() {
    const options = [];
    let todos = [];
    return {
      options,
      todos,
      model: ref(null),
    };
  },

  created: function () {
    this.listEquipment();
  },

  methods: {
    async carregCombo() {
      for (item in this.options) {
        await this.todos.push(item.title);

      }
    },
    async listEquipment() {
      try {
        let loca = await axios.get(
          `https://mes-app-a6wbv.ondigitalocean.app/local`
        );

        this.options = loca.data;
        carregCombo()
      } catch (error) {
        this.errorInput(error.response.data.message);
        console.log(error.response.data.message);
      }
    },
  },
};
</script>
