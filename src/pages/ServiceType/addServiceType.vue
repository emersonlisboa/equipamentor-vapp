<template>
  <q-page padding>
    <h4>Service Type</h4>
    <q-form @submit="onSubmit" @reset="onReset" class="q-pa-md-3" >
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


 <q-input filled v-model="date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-center">
                <q-btn v-close-popup label="Close" color="primary"  />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
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
