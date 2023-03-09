# <program>

## Development Guide

### Installing Dependencies
```bash
$ <package manager install>
Lockfile is up to date, resolution step is skipped
Packages: +123
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: ~/.local/share/pnpm/store/v3
  Virtual store is at:             node_modules/.pnpm
Progress: resolved 123, reused 123, downloaded 0, added 123, done
node_modules/.pnpm/@sveltejs+kit@1.11.0_svelte@3.55.1+vite@4.1.4/node_modules/@sveltejs/kit: Running postinstall script, done in 516ms

devDependencies:
+ @sveltejs/adapter-auto 2.0.0
+ @sveltejs/adapter-node 1.2.2
+ @sveltejs/kit 1.11.0
+ svelte 3.55.1
+ svelte-check 3.1.0
+ tslib 2.5.0
+ typescript 4.9.5
+ vite 4.1.4

Done in 1s
```

### Starting a Development Server

```bash
$ <package manager run> dev

> <program>@0.0.1 dev ~/<program>
> vite dev


Forced re-optimization of dependencies

  VITE v4.1.4  ready in 562 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Building a NodeJS Server

```bash
$ <package manager run> build

> <program>@0.0.1 build ~/<program>
> vite build


vite v4.1.4 building SSR bundle for production...
✓ 60 modules transformed.
00:46:52 [vite-plugin-svelte] ssr compile done.
package         files     time     avg
svelte              2   22.2ms  11.1ms
@sveltejs/kit       2   17.9ms   9.0ms

vite v4.1.4 building for production...
✓ 40 modules transformed.
00:46:53 [vite-plugin-svelte] dom compile done.
package         files     time     avg
svelte              2   40.7ms  20.4ms
@sveltejs/kit       2   26.6ms  13.3ms
.svelte-kit/output/client/_app/version.json                                0.03 kB
.svelte-kit/output/client/vite-manifest.json                               3.16 kB
.svelte-kit/output/client/_app/immutable/chunks/2.1ef19f26.js              0.08 kB │ gzip: 0.10 kB
.svelte-kit/output/client/_app/immutable/chunks/1.c53dc73a.js              0.08 kB │ gzip: 0.10 kB
.svelte-kit/output/client/_app/immutable/chunks/0.77668653.js              0.09 kB │ gzip: 0.10 kB
.svelte-kit/output/client/_app/immutable/entry/layout.svelte.932c0363.js   0.54 kB │ gzip: 0.36 kB
.svelte-kit/output/client/_app/immutable/entry/_page.svelte.cf04c858.js    0.70 kB │ gzip: 0.45 kB
.svelte-kit/output/client/_app/immutable/entry/error.svelte.49212039.js    0.98 kB │ gzip: 0.57 kB
.svelte-kit/output/client/_app/immutable/chunks/singletons.3c53765c.js     2.65 kB │ gzip: 1.38 kB
.svelte-kit/output/client/_app/immutable/entry/app.4d39d104.js             5.57 kB │ gzip: 2.23 kB
.svelte-kit/output/client/_app/immutable/chunks/index.9596dbb7.js          7.15 kB │ gzip: 2.91 kB
.svelte-kit/output/client/_app/immutable/entry/start.c83f02a7.js          23.19 kB │ gzip: 9.24 kB
.svelte-kit/output/server/vite-manifest.json                    1.70 kB
.svelte-kit/output/server/internal.js                           0.19 kB
.svelte-kit/output/server/entries/fallbacks/layout.svelte.js    0.24 kB
.svelte-kit/output/server/entries/pages/_page.svelte.js         0.42 kB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js     0.83 kB
.svelte-kit/output/server/chunks/index.js                       3.29 kB
.svelte-kit/output/server/chunks/internal.js                    5.15 kB
.svelte-kit/output/server/index.js                            106.42 kB

Run <package manager run> preview to preview your production build locally.

> Using @sveltejs/adapter-node
  ✔ done
```

## Additional Resources

A few relevant ones: [Learn Svelte](https://svelte.dev/tutorial/basics) (Svelte Beginners) | [Svelte API Refrence](https://svelte.dev/docs) (Svelte Advanced) | [SvelteKit Documentation](https://kit.svelte.dev/docs/introduction) | [BreadDev Discord](https://cord.breadhub.cc) (You can ask for help here)<br/>
Additional Resources for complete noobs: [JavaScript.Info](https://javascript.info/) ([JP](https://ja.javascript.info/)) | [JavaScript.Info Discord](https://discord.gg/AuEWpFkfD4) | [MDN](https://developer.mozilla.org/) | [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML) | [MDN JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) | [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS) | [MDN Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) | [MDN Getting started with Svelte](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started) | [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/DEFAULT.asp) | [W3Schools Git Tutorial](https://www.w3schools.com/git/default.asp) | [Github Git Tutorial](https://docs.github.com/en/get-started/using-git)

## License
Copyright <year>  <name of author>.<br/>
Licensed under <license name>.

*This was generated by [`create-clusterfuck`](https://npm.im/create-clusterfuck) (Licensed under the MIT License) & is based on [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte)'s template*