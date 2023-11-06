# Bug reproduction

This is a bug reproduction for the [issue](https://github.com/wavezync/nuxt-vue3-google-signin/issues/14).

# Weird behavior

Obvious, the `nuxt-vue3-google-signin` gives an error in dev mode.

But if you modify

`node_modules/nuxt-vue3-google-signin/dist/runtime/plugin.mjs` with following content in your project:

```js
import { defineNuxtPlugin, useRuntimeConfig } from "#app";
export default defineNuxtPlugin(async (nuxtApp) => {
  console.log("nuxt-vue3-google-signin plugin"); // adding this line make it works
  const { googleSignIn } = useRuntimeConfig().public;
  if (googleSignIn) {
    const plugin = await import("vue3-google-signin");
    nuxtApp.vueApp.use(plugin.default, { clientId: googleSignIn.clientId });
  }
});
```

it starts to working normally.

