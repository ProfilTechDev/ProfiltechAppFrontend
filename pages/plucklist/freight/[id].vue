<template>
    <h1>Tur: Sjælland 01/10-25</h1>
    <nav> 
      <ul>
        <li>
          <label>
            <div>Filtrér</div>
            <select class="w-40">
              <option v-for="category in categories" :key="category">{{ category }}</option>
            </select>
          </label>
        </li>
      </ul>
      
      <ul>
        <li>
          1 af 25
        </li>
        <li>
          <button class="secondary"> << Forrige ordre</button>
        </li>
        <li>
          <button>Næste ordre >> </button>
        </li>
      </ul>
    </nav>
    
    <article>
      <div class="flex justify-between items-start mb-8">
        <div class="mb-8">
        <h2>Ordrenummer: #1234</h2>
          <p class="m-0 font-bold">Leveringsoplysninger</p>
          <p class="m-0">Adresse: 1234 Vejnavn</p>
          <p class="m-0">By: Byen</p>
          <p class="m-0">Postnummer: 1234</p>
        </div>
        <div class=" flex items-center justify-center overflow-hidden">
          <img src="/img/GLS.svg" alt="GLS" class="max-w-72 max-h-20"/>
        </div>
      </div>
      
      
      <table>
        <tr>
          <th>Pakket</th>
          <th>Produkt</th>
          <th>Turnummer</th>
          <th>Kategori</th>
        </tr>
        <tr v-for="product in products" :key="product.id">
          <td :class="{'line-through bg-lime-100': product.done}">
            <input type="checkbox" :value="true" v-model="product.done"/>
          </td>
          <td :class="{'line-through bg-lime-100 text-gray-400': product.done}">
            {{ product.name }}
          </td>
          <td :class="{'line-through bg-lime-100 text-gray-400': product.done}">
            {{ product.tourNumber }}
          </td>
          <td :class="{'line-through bg-lime-100 text-gray-400': product.done}">
            {{ product.category }}
          </td>
        </tr>
      </table>
  
      <footer v-if="allDone">
        <button>Marker ordre som færdig</button>
      </footer>
    </article>
  </template>
  
  
  <script setup>
    const categories = [
      'hele ordren',
      'stålplader',
      'tilbehør',
      'inddækninger'
    ]
  
    const allDone = computed(() => products.value.every(product => product.done));
  
  
    const products = ref([
      {
        id: 1,
        name: 'Stålplade',
        category: 'stålplader',
        tourNumber: '1',
        done: true
      },
      {
        id: 2,
        name: 'Tilbehør',
        category: 'tilbehør',
        tourNumber: '1A',
        done: false
      },
      {
        id: 3,
        name: 'Inddækning',
        category: 'inddækninger',
        tourNumber: '2',
        done: false
      },
      {
        id: 4,
        name: 'Stålplade',
        category: 'stålplader',
        tourNumber: '2A',
        done: false
      },
      {
        id: 5,
        name: 'Tilbehør',
        category: 'tilbehør',
        tourNumber: '3',
        done: false
      },
      {
        id: 6,
        name: 'Inddækning',
        category: 'inddækninger',
        tourNumber: '3A',
        done: false
      },
    ]);
  </script>