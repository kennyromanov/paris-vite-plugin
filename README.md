# paris-vite-plugin

A lightweight wrapper around the `@module-federation/vite` plugin that powers Module Federation in Vite apps. It exports the federation plugin as `paris` and provides a `createParis` helper to bootstrap the runtime at startup.

### Remote app example

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import paris from 'paris-vite-plugin';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    vue(),
    paris({
      name: 'remote',
      exposes: {
        './Button': resolve(__dirname, './src/Button.ts'),
      },
      shared: ['vue'],
    }),
  ],
});
```

### Host app example

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import paris from 'paris-vite-plugin';

export default defineConfig({
  plugins: [
    vue(),
    paris({
      name: 'shell',
      remotes: {
        foo: 'http://localhost:5174/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
});
```

### Runtime setup with `createParis`

```ts
// main.ts
import { createParis } from 'paris-vite-plugin';

createParis({
  name: 'shell',
  remotes: {
    foo: 'http://localhost:5174/assets/remoteEntry.js',
  },
});
```

---

## Installation

1. Requires Node v18 or higher. Install the plugin with **npm**:

```shell
npm i -D paris-vite-plugin
```

2. Add `paris` to the `plugins` array in your `vite.config.ts`.

3. Configure `remotes` or `exposes` and run Vite:

```shell
vite
```

**You're all set!**

---

## Tips & Tricks

1. Use the `shared` option to avoid shipping duplicate dependencies across remotes.
2. Call `createParis` in the host to customize the Module Federation runtime or preload remotes.
3. Combine with Vite's `build.ssr` option to federate server and client builds.

---

**paris-vite-plugin**  
by Kenny Romanov
