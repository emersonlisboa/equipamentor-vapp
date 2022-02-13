<template>
  <div class="q-pa-md" style="max-width: 900px" background="red">
    <q-breadcrumbs class="q-pb-md" background-color="red">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el
        label="Equipamento"
        icon="settings"
        to="list-equipment"
      />
      <q-breadcrumbs-el label="Cadastro" />
    </q-breadcrumbs>

    <q-card flat bordered class="my-card bg-grey-1">
      <q-tabs
        v-model="tab"
        narrow-indicator
        dense
        align="justify"
        class="bg-grey-3"
        indicator-color="primary"
        active-color="primary"
      >
        <q-tab name="equipamentos" label="Equipamentos" />
        <q-tab name="mails" label="Cadastro" />

        <q-tab name="alarms" label="Reports" />
        <q-tab name="movies" label="Manutenções">
          <q-badge color="red" floating rounded>5+</q-badge>
        </q-tab>
        <q-tab name="history" label="Histórico" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails">
          <div class="text-h6">
            <q-icon name="settings" />

            Equipamento
          </div>

          Cadastrar novo equipamento
          <q-separator />

          <q-page class="q-pt-md">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                v-model="equipmentBody.title"
                type="text"
                label="Title"
                hint="Inserir o nome do equipamento"
                filled
              />
              <q-input
                v-model="equipmentBody.sn"
                type="text"
                label="SN"
                filled
              />
              <q-input
                v-model="equipmentBody.tag"
                type="text"
                label="Tag"
                filled
              />
              <q-input
                v-model="equipmentBody.factory"
                type="text"
                label="Factory"
                hint="Faricando em ? "
                filled
              />
              <q-input
                v-model="equipmentBody.model"
                type="text"
                label="Model"
                filled
              />

              <q-separator />
              <div class="q-px-sm q-pt-sm">
                <strong>Selecione a criticidade do equipamento</strong>
              </div>
              <div class="q-gutter-sm">
                <q-radio
                  keep-color
                  dense
                  v-model="equipmentBody.criticalLevel"
                  val="A"
                  label="A"
                  color="green"
                />
                <q-radio
                  keep-color
                  dense
                  v-model="equipmentBody.criticalLevel"
                  val="B"
                  label="B"
                  color="yellow"
                />
                <q-radio
                  keep-color
                  dense
                  v-model="equipmentBody.criticalLevel"
                  val="C"
                  label="C"
                  color="red"
                />
              </div>

              <q-separator />
              <div class="q-px-sm q-pt-sm">
                <strong>Onde o equipamento está instalado?</strong>
              </div>
              <q-select
                outlined
                v-model="equipmentBody.localId"
                :options="options"
                label="Local"
                filled
              />

              <div class="q-pa-md q-gutter-lg">
                <q-toggle v-model="equipmentBody.status" label="Ativo" />
              </div>
              <div>
                <q-btn
                  label="Salvar"
                  type="reset"
                  color="primary"
                  @click="postEquipment()"
                />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div> </q-form
            ><!-- content -->
          </q-page>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
        </q-tab-panel>

        <q-tab-panel name="equipamentos">
          
            

  <q-table

    :rows="equipamentos"
  
    row-key="name"
  />
 
 

        </q-tab-panel>


        <q-tab-panel name="movies">
          <q-table
            title="Manutenções Preventivas (MP)"
            :rows="rows"
            :columns="columns"
            row-key="name"
            bordered
          />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import axios from "axios";

export default {
  name: "Equipament",

  methods: {
    async postEquipment() {
      try {
        console.log(this.equipmentBody);
        await axios.post(`http://localhost:3000/equipment`, this.equipmentBody);
        this.salvou = true;
        this.onSubmit();
      } catch (error) {
        this.errorInput(error.response.data.message);
        console.log(error.response.data.message);
        console.log(this.equipmentBody)
      }
    },

    async getEquipments() {
      try {
       
       let data1 = await axios.get(`http://localhost:3000/equipment`);
       this.equipamentos = data1.data
        console.log( this.equipamentos) 
     
      } catch (error) {
        this.errorInput(error.response.data.message);
        console.log(error.response.data.message);
      }
    },
  },

  data(){
    let equipamentos = [{title: 'CM'}]

    return{ 
      equipamentos
    }

    
  },

  created: function () {
   console.log("created")
   this.getEquipments()
  },

  setup() {
    const $q = useQuasar();
    const accept = ref(false);
    const localId = "ckzl6pxlg00562cipbp16r4er";
    const options = ["Teste 01", "Teste 02"];

    

    var equipmentBody = ref({
      title: "",
      sn: "",
      tag: "",
      factory: "",
      model: "",
      criticalLevel: "",
      localId: "ckzl6pxlg00562cipbp16r4er",
      status: true,
    });

    const columns1 = [
      {
        id: "title",
        required: true,
        label: "Title",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      }]

    const columns = [
      {
        name: "name",
        required: true,
        label: "Dessert (100g serving)",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "calories",
        align: "center",
        label: "Calories",
        field: "calories",
        sortable: true,
      },
      { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
      { name: "carbs", label: "Carbs (g)", field: "carbs" },
      { name: "protein", label: "Protein (g)", field: "protein" },
      { name: "sodium", label: "Sodium (mg)", field: "sodium" },
      {
        name: "calcium",
        label: "Calcium (%)",
        field: "calcium",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "iron",
        label: "Iron (%)",
        field: "iron",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
    ];

    const rows = [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: "14%",
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: "8%",
        iron: "1%",
      },
    ];

    return {
      accept,
      options,
      localId,
      equipmentBody,
      columns,
      columns1,
      rows,

      tab: ref("mails"),

      onSubmit() {
        if (this.salvou) {
          $q.notify({
            color: "green-13",
            textColor: "white",
            icon: "cloud_done",
            position: "top",
            message:
              "Equipamento cadastrado com sucesso!" ,
            timeout: 2000,
          });
        }
      },
    };
  },
};
</script>
