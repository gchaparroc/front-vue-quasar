<template>
  <q-page>
    {{ productsList }}
    <!--
    <template>
      <div class="q-pa-md">
        <q-table
          title="Feriados en Chile"
          :rows="rows"
          :columns="columns"
          row-key="name"
          dark
          color="amber"
        />
      </div>
    </template>
 -->
  </q-page>
</template>


<script>
    let rows = []  //creamos un array vacio para nuestra filas

    import { ref } from 'vue'
    import { computed, onMounted } from 'vue'   //ponemos store apenas se monte la aplicacion
    import { useStore } from 'vuex'     //importamos el store

    export default {
      setup () {
        const store = useStore()  //definimos variable para usar el store

        const productsList = computed(() => {     //para filtrar los resultados
          return store.state.apiListProductsFilter
        })

        onMounted(() => {
            store.dispatch('getProducts')  //invocamos la actions  "getCharacters"
            console.log('PASO 1')
        })

        rows = productsList

        return {
          columns,
          rows,
          productsList
        }
      }
    }

    //Establecemos la configuracion de las columnas de nuestra tabla
    const columns = [
      {
        name: 'fecha',
        required: true,
        label: 'Fecha',
        align: 'left',
        field: row => row.fecha,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'feriado',
        required: true,
        label: 'Feriado',
        align: 'left',
        field: row => row.nombre,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'irrenunciable',
        required: true,
        label: 'Renunciable/Irrenunciable',
        align: 'left',
        field: row => row.irrenunciable,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'tipo',
        required: true,
        label: 'Tipo',
        align: 'left',
        field: row => row.tipo,
        format: val => `${val}`,
        sortable: true
      },
    ]
</script>

