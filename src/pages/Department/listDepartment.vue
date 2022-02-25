<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <h4>Departamentos</h4>
          

    <div class="column q-mr-md" >
      <div class="q-gutter-sm row reverse    ">
       <q-btn  push color="primary"  icon="add" label="Adicionar"  @click="toolbar = true" />
       <q-btn  outline color="primary" label="Export" @click="onClick" />
       <q-btn  outline color="primary" icon = "toc" @click="onClick" />
      </div>
      <div class="col q-pt-md   ">
        <q-table
              title="Departamentos"
              :data="data"
              :columns="columns"
              row-key="name"
            />
      </div>
    </div>

    
        <q-dialog v-model="toolbar">
      <q-card style="width: 75vw; max-width: 75vw;">
        <q-toolbar class="q-pa-md">

  
          <q-toolbar-title><span class="text-h4 text-weight-bold">Adicionar Departamento</span> </q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section  >
          <div class="q-gutter-lg" maximized >
          <q-input filled v-model="codigo" type="text" label="Codigo" />
          <q-input filled v-model="text" type="text" label="Descricao" />
          <q-input  filled v-model="text" type="text" label="Local" />
          <q-toggle outlined v-model="value" color="primary" label="Status" />
          <div class="gutter-md">



          <q-btn filled  color="primary" label="Salvar" @click="onClick" />
          <q-btn outline class ="q-ml-md" color="primary" label="Apagar" @click="onClick" />
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

import { ref } from 'vue'

export default {
  name: "listDepartment",

  data (){
    let codigo= ""
  },

  setup () {
    
    return {
      icon: ref(false),
      bar: ref(false),
      bar2: ref(false),
      toolbar: ref(false),
      value: ref(false),
    codigo: ref("")
    }
  }
};
</script>
