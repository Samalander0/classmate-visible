import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    adapter: adapter({
      maxDuration: 300,
    }),
  },
};

export default config;
