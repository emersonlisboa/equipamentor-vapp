<template>
<div class="q-md">
  <q-select filled v-model="model" :options="options" label="Filled" />


   <q-btn color="primary" label="Primary"  @click="listEquipment"/>
</div>
</template>

<script>

import { ref } from "vue";
import axios from "axios";


export default {
  name: "listLocal",

  methods: {
    async listEquipment() {
      try {
        
      
        console.log(await axios.post(`http://localhost:3000/local`));
      
      } catch (error) {
        this.errorInput(error.response.data.message);
        console.log(error.response.data.message);
      }
    },
  },

  setup() {
  
    const listLocal = ref(false);
    

    

    return {
     listLocal
     ,

    };
  },
};
</script>
