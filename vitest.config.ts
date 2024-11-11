import {defaultExclude, defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    include: [...defaultExclude, 'build'],
    typecheck: {
      enabled: true,
    },
  },
});
