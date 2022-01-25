<template>
  <div class="q-pa-md" style="max-width: 600px">
    <q-card class="my-card shadow-10">
      <q-card-section>
        <div class="text-h4 text-weight-bolder">Service Type</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-pa-md-3">
          <q-input
            v-model="title"
            type="text"
            label="Label"
            outlined
            border-color="grey-2"
            bg-color="grey-2"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-select
            v-model="model"
            :options="options"
            label="Standard"
            outlined
            border-color="grey-2"
            bg-color="grey-2"
          />
          <q-toggle v-model="status" color="primary" label="Status" />

          <q-input
            outlined
            border-color="grey-2"
            bg-color="grey-2"
            type="date"
            v-model="date"
            mask="date"
            :rules="['date']"
          >
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
      </q-card-section>
    </q-card>
  </div>
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
      date: ref("2022/24/01"),
    };
  },
};
</script>
