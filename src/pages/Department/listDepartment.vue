<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="text-weight-bold text-h4 q-pb-md">Departamentos</div>

        <div class="row justify-between items-end content-start">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <q-input
              outlined
              bg-color="grey-12"
              color="primary"
              v-model="text"
              type="text"
              label="Localizar..."
              dense
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>

          <div class="q-gutter-md q-pt-md row reverse">
            <q-btn
              color="primary"
              icon="add"
              label="Adicionar"
              @click="toolbar = true"
            />
            <q-btn outline color="primary" label="Export" @click="onClick" />
            <q-btn outline color="primary" icon="toc" @click="onClick" />
          </div>
        </div>

        <div class="col q-pt-md">
          <q-table
            title="Departamentos"
            :data="data"
            :columns="columns"
            row-key="name"
          />
        </div>

        <q-dialog v-model="toolbar">
          <q-card style="width: 85vw; max-width: 600px">
            <q-toolbar class="q-pa-md">
              <q-toolbar-title class="q-pt-md q-pb-md">
                <div class="row ">
                  <q-icon name="account_balance" size="lg" />
                  <div class="q-ml-md text-h4 text-weight-bold">Novo Departamento</div>
                </div>
              </q-toolbar-title>

              <q-btn flat round dense icon="close" v-close-popup />
            </q-toolbar>

            <q-card-section>
              <div class="q-gutter-lg q-mt-md">
                <q-input
                  outlined
                  bg-color="grey-11"
                  color="primary"
                  v-model="code"
                  type="text"
                  label="Codigo"
                />
                <q-input
                  outlined
                  bg-color="grey-11"
                  color="primary"
                  v-model="description"
                  type="text"
                  label="Descricao"
                />
                <q-input
                  outlined
                  bg-color="grey-11"
                  color="primary"
                  v-model="local"
                  type="text"
                  label="Local"
                />
                <q-toggle
                  outlined
                  bg-color="grey-11"
                  color="primary"
                  v-model="status"
                  label="Status"
                />

                <div class="gutter-md">
                  <q-btn
                    color="primary"
                    label="Salvar"
                    @click="createDepartment"
                  />
                  <q-btn
                    outline
                    class="q-ml-md"
                    color="primary"
                    label="Apagar"
                    @click="onClick"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { ref } from "vue";

  export default {
    name: "listDepartment",

    data() {},

    methods: {
      createDepartment() {
        alert("Department created!!" + this.description);
      },
    },

    setup() {
      return {
        icon: ref(false),
        bar: ref(false),
        bar2: ref(false),
        toolbar: ref(false),
        value: ref(false),
        code: ref(""),
        description: ref(""),
        local: ref(""),
        status: ref(true),
      };
    },
  };
</script>



<style  >
  .q-field--outlined .q-field__control:before {
    border: 2px solid rgba(175, 175, 175, 0);
    transition: border-color 0.36s cubic-bezier(1.4, 0, 0.2, 1);
  }

  .q-field--outlined .q-field__control:after {
    height: inherit;
    border-radius: inherit;
    border: 2px solid transparent;
    background-color: rgba(255, 0, 0, 0);
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .q-toolbar {
    background: #2e3a8a;
    color: white;
  }
</style>>
