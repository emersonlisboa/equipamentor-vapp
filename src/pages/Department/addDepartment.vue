<template>
  <div class="q-pa-md" style="max-width: 600px">
    <q-breadcrumbs class="q-pb-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Departamento" icon="widgets" />
    </q-breadcrumbs>

    <q-card class="my-card shadow-10">
      <q-card-section>
        <div class="text-h5 h4 text-weight-bolder">Departamento</div>
      </q-card-section>

      <q-card-section>
        <q-form class="q-gutter-md" @submit="postDepartment()" @reset="onReset">
          <q-input
            autofocus
            outlined
            border-color="grey-2"
            bg-color="grey-2"
            clearable
            v-model="title"
            label="Departamento"
            hint="Obrigatório, precisa ter 3 ou mais caracteres!"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input filled clearable v-model="local" label="Local" />
          <q-toggle v-model="status" />

          <div>
            <q-btn label="Salvar" type="submit" color="primary" />
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
import { useQuasar } from "quasar";
import { ref } from "vue";
import axios from "axios";

export default {
  name: "Department",

  methods: {
    async postDepartment() {
      try {
        console.log(this.title);
        console.log(this.departmentBody.initial);
        console.log(this.departmentBody);
        await axios.post(
          `https://mes-app-a6wbv.ondigitalocean.app/department`,
          this.departmentBody
        );
        // this.salvou = true;
        //this.onSubmit();

        $q.notify({
          color: "green-13",
          textColor: "white",
          icon: "cloud_done",
          position: "center",
          message: "Departamento cadastrado com sucesso!",
          timeout: 3000,
        });
      } catch (error) {
        this.errorInput(error.response.data.message);
        console.log(error.response.data.message);
      }
    },
  },
  setup() {
    const $q = useQuasar();
    const title = ref(null);
    const status = ref(true);
    const local = ref(false);

    var departmentBody = {
      title: "Indusssssdds",
      initial: "EEss",
    };

    //departmentBody.title = title;

    return {
      title,
      status,
      departmentBody,

      async onSubmit() {
        await this.postDepartment();
        if (this.salvou) {
          $q.notify({
            color: "green-13",
            textColor: "white",
            icon: "cloud_done",
            position: "center",
            message: "Departamento cadastrado com sucesso!",
            timeout: 3000,
          });
        }
      },

      errorInput(err) {
        $q.notify({
          color: "red-13",
          textColor: "white",
          icon: "report_gmailerrorred",
          position: "center",
          message: err,
          timeout: 3000,
        });
      },

      onReset() {
        title.value = null;
        status.value = true;
      },
    };
  },
};
</script>
