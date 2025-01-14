export default defineNuxtPlugin((nuxtApp) => {
  const theme = useCookie('data-theme');

  if(theme.value){
    useHead({
      htmlAttrs: {
        'data-theme': theme.value
      }
    })
  }
});
