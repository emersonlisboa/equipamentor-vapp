<template>

  <q-page padding>

    <h4 class='text-weight-bolder'>Service Type</h4>
    <q-form @submit="onSubmit" @reset="onReset" class="q-pa-md-3 " >
      <q-input
        v-model="title"
        type="text"
        label="Label"
        filled
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-select v-model="model" :options="options" label="Standard" filled />
      <q-toggle v-model="status" color="primary" label="Status" />


 <q-input filled type="date" v-model="date" mask="date" :rules="['date']">
        
    </q-input>

   

      

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
   

  </q-page>

</template>

<script>
import { ref } from "vue";
export default {
  // name: 'PageName',

  data() {
    let status;
    let options;
    let title;
  },

  setup() {
    return {
      status: ref(true),
      options: ["Foxconn", "Dell"],
       date: ref('2022/24/01'),
    };
  },
};
</script>
