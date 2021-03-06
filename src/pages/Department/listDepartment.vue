<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="text-weight-bold text-h4 q-pb-md">Departamentos</div>

        <div class="row justify-between items-end content-start">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <q-input
              outlined
              bg-color="grey-12"
              color="primary"
              type="text"
              label="Localizar..."
              dense
              v-model="filter"
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
            <q-btn outline color="primary" label="Export" />
            <q-btn
              outline
              color="primary"
              @click="viewStyle = !viewStyle"
              icon="toc"
            />
          </div>
        </div>

        <div class="col q-pt-md">
          <q-table
            class="my-sticky-header-table"
            :rows="departments.data"
            :columns="Table"
            row-key="name"
            :grid="viewStyle"
            :loading="loading"
            :filter="filter"
          >
            <template v-slot:body-cell-Status="props">
              <q-td :props="props" class="q-gutter-x-sm">
                {{ props.row.status == true ? "ATIVO" : "INATIVO" }}
              </q-td>
            </template>

            <template v-slot:body-cell-actions="props">
              <q-td :props="props" class="q-gutter-x-sm">
                <q-btn
                  outline
                  color="primary"
                  icon="edit"
                  dense
                  @click="onClick"
                >
                  <q-tooltip> Editar </q-tooltip>
                </q-btn>
                <q-btn
                  outline
                  color="negative"
                  icon="delete"
                  dense
                  @click="onRemoveDepartment(props.row)"
                />
              </q-td>
            </template>
          </q-table>
        </div>

        <q-dialog v-model="toolbar">
          <q-card style="width: 85vw; max-width: 600px">
            <q-toolbar class="q-pa-md">
              <q-toolbar-title class="q-pt-md q-pb-md">
                <div class="row">
                  <q-icon name="account_balance" size="md" />
                  <div class="q-ml-md text-h5">Novo Departamento</div>
                </div>
              </q-toolbar-title>

              <q-btn flat round dense icon="close" v-close-popup />
            </q-toolbar>

            <q-card-section>
              <div class="q-mt-lg">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                  <q-input
                    outlined
                    bg-color="grey-11"
                    color="primary"
                    v-model="departmentBody.title"
                    type="text"
                    label="Descricao"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 5) ||
                        'Preencha o campo descrição corretamente...Precisa conter no mínimo 5 caracteres!',
                    ]"
                  />

                  <q-input
                    outlined
                    bg-color="grey-11"
                    color="primary"
                    v-model="departmentBody.initial"
                    type="text"
                    label="Iniciais"
                  />

                  <q-toggle
                    outlined
                    bg-color="grey-11"
                    color="primary"
                    v-model="departmentBody.status"
                    label="Status"
                  />

                  <div>
                    <q-btn
                      label="Salvar"
                      type="submit"
                      @click="createDepartment()"
                      color="primary"
                    />
                    <q-btn
                      label="Apagar"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                    />
                  </div>
                </q-form>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { onMounted, ref } from "vue";
  import axios from "axios";
  import { useQuasar } from "quasar";
  import { teste } from "src/api/department";

  export default {
    name: "listDepartment",

    methods: {
      async createDepartment() {
        this.departmentBody.initial = this.departmentBody.initial.toUpperCase();

        try {
          await axios.post(
            `https://mes-app-a6wbv.ondigitalocean.app/department`,
            this.departmentBody
          );
          this.onReset();
          // await this.handleDepartments();
        } catch (error) {
          console.log(error.response.data.message);
        }
      },
    },

    setup() {
      const $q = useQuasar();
      const status = ref(true);
      const toolbar = ref(false);
      let departments = ref("");
      let viewStyle = ref(false);
      let loading = ref(false);
      let filter = ref("");
      let t = teste;

      const Table = [
        {
          name: "Descição",
          required: true,
          label: "Descrição",
          align: "left",
          field: "title",
          sortable: true,
        },

        {
          name: "Iniciais",
          required: true,
          label: "Iniciais",
          align: "left",
          field: "initial",
          sortable: true,
        },

        {
          name: "Status",
          required: true,
          label: "Status",
          align: "left",
          field: "status",
          sortable: true,
        },

        {
          name: "actions",
          required: true,
          label: "Actions",
          align: "right",
          field: "actions",
          sortable: true,
        },
      ];

      let departmentBody = ref({
        title: "",
        initial: "",
        status: true,
      });

      const handleDepartments = async () => {
        try {
          departments.value = await axios.get(
            `https://mes-app-a6wbv.ondigitalocean.app/department`
          );
          loading.value = false;
          console.log(t);
        } catch (error) {
          console.log(error);
        }
      };

      const removeDepartment = async (id) => {
        try {
          departments.value = await axios.delete(
            `https://mes-app-a6wbv.ondigitalocean.app/department/${id}`
          );
          loading.value = false;
        } catch (error) {
          console.log(error);
        }
      };

      const onRemoveDepartment = async (department) => {
        try {
          console.log(department.title + department.id);
          $q.dialog({
            title: "Confirm",
            message: `Are you sure you want to remove <strong>${department.title}</strong>`,
            cancel: true,
            persistent: true,
            html: true,
            cancel: {
              
              color: "primary",
            },

            ok: {
             
              color: "negative",
            },
          })
            .onOk(async () => {
              await removeDepartment(department.id);

              await handleDepartments();
              $q.notify({
                color: "green",
                message: "Successefully removed",
              });
            })
            .onCancel(() => {
              console.log(">>>> Cancel");
            });
        } catch (error) {}
      };

      onMounted(() => {
        loading.value = true;
        handleDepartments();
        console.log(departments.value);
      });

      return {
        toolbar,
        status,
        departmentBody,
        departments,
        Table,
        viewStyle,
        loading,
        filter,
        onRemoveDepartment,
        removeDepartment,

        onSubmit() {
          $q.notify({
            color: "green-13",
            textColor: "white",
            icon: "cloud_done",
            position: "top",
            message: "Departamento cadastrado com sucesso!",
            timeout: 3000,
          });
        },

        onReset() {
          console.log("apagar");
          (this.departmentBody.title = ""),
            (this.departmentBody.initial = ""),
            (this.departmentBody.status = "true");
        },
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
    background: #04156F;
    color: white;
  }
</style>


<style lang="sass">
.my-sticky-header-table

  .q-table__top,

  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #f5f5f5
</style>
