<template>
  <div style="cursor: pointer; border: none" :data-tooltip="darkMode ? 'Skift til lys tema' : 'Skift til mørk tema'" data-placement="bottom">
    <font-awesome-icon v-if="darkMode" :icon="faMoon" @click="toggleTheme()"/>
    <font-awesome-icon v-else :icon="faSun" @click="toggleTheme()"/>
  </div>
</template>

<script setup>
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
  import { onMounted } from 'vue'

  const darkMode = useState('darkMode', () => {
    // Initial værdi kan være sat baseret på cookies eller en standardværdi
    const cookieTheme = useCookie('data-theme').value
    if (cookieTheme) {
      return cookieTheme === 'dark'
    }
    // Returnér false som default værdi, hvilket betyder lys tema, indtil vi ved mere på klienten
    return false
  })
  
  onMounted(() => {
    // Denne del udføres kun på klient-siden
    if (window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (!useCookie('data-theme').value) {
        darkMode.value = prefersDark
      }
    }
  })
  
  function toggleTheme() {
    darkMode.value = !darkMode.value
    const theme = useCookie('data-theme');
    theme.value = darkMode.value ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme.value);
  }
</script>