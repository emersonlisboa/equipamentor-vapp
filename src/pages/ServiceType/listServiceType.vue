<template>
  <div class="q-pa-md">
    <div class="row content-around">
      <h4>Tipos de Serviços</h4>
    </div>

    <q-dialog v-model="prompt" persistent>

      
      <q-card style="width: 700px; max-width: 80vw" >
        <q-card-section >
        
       


<q-btn   icon="close" flat round dense v-close-popup />


          <div class="text-h4 text-weight-bolder">#Tipo de Serviço</div>
        

          <div class="text-subtitle2">[Cadastrar/Editar]</div>
           
        </q-card-section>

        <q-card-section class="q-row-6">
          <q-form @submit="onSubmit" @reset="onReset">
            <q-input
              v-model="codigo"
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

            <q-input
              v-model="descricao"
              label="Descrição "
              :outlined = "this.focoInput"
              :filled = "!this.focoInput"
              @focus= "this.focoInput = !this.focoInput"
            @blur = "this.focoInput = false"
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
          >
<q-spinner-puff color="white" size="1em"/>
          </q-btn>
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
      
      :table-header-style="{ backgroundColor: '#eeeeee' }"
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:selected="selection"
      class="q-pl-xs q-pr-xs"
      :grid = "tabela"
      
      
      
    >

    <template v-slot:top-left>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template>

         <template v-slot:top-right  >
        <q-btn  class="q-ma-md"
      outline 
          push  
          color="primary"
          :icon = "icone"
          @click="visualizarModeTabela()"
          

        />


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

import { exportFile, useQuasar } from 'quasar'

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
    description: "Manutenção Preventiva Semanal",
    time: "12h",
    status: "ATIVO",
  },

    {
    code: "ME0003",
    description: "Manutenção Preventiva Semanal",
    time: "12h",
    status: "ATIVO",
  },

    {
    code: "ME0004",
    description: "Manutenção Preventiva Semanal",
    time: "12h",
    status: "ATIVO",
  },

    {
    code: "ME0005",
    description: "Manutenção Preventiva Semanal",
    time: "12h",
    status: "ATIVO",
  },
];
let status = true;
let codigo;
let descricao;
let tempo;
let tabela = false;
let icone = "dashboard_customize";
let focoInput = false;

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

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
      tabela,
      icone,
      focoInput,
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
    

    exportTable () {
        // naive encoding to csv format
        const content = [columns.map(col => wrapCsvValue(col.label))].concat(
          rows.map(row => columns.map(col => wrapCsvValue(
            typeof col.field === 'function'
              ? col.field(row)
              : row[ col.field === void 0 ? col.name : col.field ],
            col.format
          )).join(','))
        ).join('\r\n')

        const status = exportFile(
          'table-export.csv',
          content,
          'text/csv'
        )

        if (status !== true) {
          $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
          })
        }
      }
    
    
    
    
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

    visualizarModeTabela(){
      this.tabela = !this.tabela;
      if(this.tabela){
        this.icone = "toc"
      }else{ 
        this.icone = "dashboard_customize"
      }
    }
  },
};
</script>
