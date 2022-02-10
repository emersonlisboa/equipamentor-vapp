<template>
  <div class="q-pa-md">
    <div class="row content-around">
      <h4>Tipos de Serviços</h4>
    </div>

    <q-dialog v-model="prompt" persistent>
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h4">Tipo Serviços</div>
          <div class="text-subtitle2">Cadastrar</div>
        </q-card-section>

        <q-card-section class="q-row-6">
          <q-form @submit="onSubmit" @reset="onReset">
            <q-input
              v-model="codigo"
              type="text"
              label="Código"
              filled
              border-color="grey-2"
              bg-color="grey-2"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              v-model="descricao"
              label="Descrição "
              filled
              border-color="grey-2"
              bg-color="grey-2"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              v-model="tempo"
              label="Tempo"
              type="number"
              filled
              border-color="grey-2"
              bg-color="grey-2"
            />

            <q-toggle v-model="status" color="primary" label="Status" />
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn
            label="Submit"
            type="submit"
            color="primary"
            @click="cadastrar()"
          />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-table
      title="Tipos de Serviços"
      :table-header-style="{ backgroundColor: '#eeeeee' }"
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:selected="selection"
      class="q-pl-xs q-pr-xs"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          color="primary"
          label="Adicionar"
          icon="add"
          @click="prompt = true"
          no-caps
          push
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

const columns = [
  {
    name: "codigo",
    align: "left",
    label: "CÓDIGO",
    field: "code",
    sortable: true,
  },
  {
    name: "Descrição",
    align: "center",
    label: "DESCRIÇÃO",
    field: "description",
    sortable: true,
  },
  { name: "Tempo", label: "TEMPO", field: "time", sortable: true },
  { name: "Status", label: "STATUS", field: "status", sortable: true },
];

const rows = [
  {
    code: "ME0001",
    description: "Manutenção Preventiva Semanal",
    time: "12h",
    status: "ATIVO",
  },
];
let status = true;
let codigo;
let descricao;
let tempo;

export default {
  data() {
    return {
      columns,
      rows,
      prompt: ref(false),
      status,
      codigo,
      descricao,
      tempo,
    };
  },

  setup() {
    const $q = useQuasar();

    return {
      onSubmit() {
        $q.notify({
          color: "green-13",
          textColor: "white",
          icon: "cloud_done",
          position: "center",
          message: "Tipo de Serviço cadastrado com sucesso!",
          timeout: 2000,
        });
      },
    };
  },

  methods: {
    cadastrar() {
      this.rows.push({
        code: this.codigo,
        description: this.descricao,
        time: this.tempo,
        status: this.status,
      });
      this.onSubmit();
      this.$refs.myForm.resetValidation();
    },
  },
};
</script>
