import { createStore } from 'vuex'

export default createStore({
  state: {
    //STATE API PRODUCTS
    apiListProductsAll: [],
    apiListProductsFilter: [],
  },

  mutations: {
    //MUTATIONS API PRODUCTS
    setProductsMutations(state, payload) {
      state.apiListProductsAll = payload
    },
    setProductsMutationsFilter(state, payload) {
      state.apiListProductsFilter = payload
    },
  },

  actions: {
    //ACTIONS API PRODUCTS
    async getProducts({commit}) {
      try {
        //const response = await fetch('https://rickandmortyapi.com/api/character')
        const response = await fetch('http://161.22.47.179:3000/api/v1/products')
        console.log('PASO 2')
        const data = await response.json()
        console.log('PASO 3')
        console.log(data)
        console.log(data.results)
        console.log('PASO 4')
        commit('apiListProductsAll', data.results)
        console.log('PASO 5')
        commit('apiListProductsFilter', data.results)
        console.log('PASO 6')
      } catch (error) {
        console.error(error)
      }
    },

    filterByStatus({commit, state}, status) {
      const filter = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', filter)
    },

    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase()
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()
        if(characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharactersFilter', filter)
    },
  },
  modules: {
  }
})
