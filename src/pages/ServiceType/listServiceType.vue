<template>
  <div class="q-pa-md">
    <div class="row content-around">
      <h4>Tipos de Serviços</h4>
    </div>

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 650px">
        <q-card-section>
          <div class="text-h6">Tipo de Serviço</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="onSubmit" @reset="onReset" class="q-pb-md">
            <q-input
              v-model="title"
              type="text"
              label="Código"
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
              label="Descrição "
              outlined
              border-color="grey-2"
              bg-color="grey-2"
            />

            <q-input
              label="Tempo"
              type="number"
              outlined
              border-color="grey-2"
              bg-color="grey-2"
            />

            <q-input
              label="Tempo"
              type="number"
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
            />
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="Submit" type="submit" color="primary" />
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
    >
      <template v-slot:top-right>
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
  {
    code: "ME0002",
    description: "Manutenção Preventiva Mensal",
    time: "12h",
    status: "ATIVO",
  },
  {
    code: "ME0003",
    description: "Manutenção Preventiva Semestral",
    time: "8h",
    status: "ATIVO",
  },
  {
    code: "ME0004",
    description: "Manutenção Preventiva Anual",
    time: "120h",
    status: "ATIVO",
  },
  {
    code: "ME0005",
    description: "Manutenção Corretiva",
    time: "12h",
    status: "ATIVO",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      prompt: ref(false),
    };
  },
};
</script>
