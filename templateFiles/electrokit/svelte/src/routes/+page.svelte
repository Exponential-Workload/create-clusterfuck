<script lang="ts">
  import electronAPI from "../electronAPI";

  let greeting: string;
  const data = (async () => {
    const data = await electronAPI.greet();
    greeting = data;
  })();
  let name: string = "";
  $: {
    if (name)
      (async (name) => {
        console.log("update w/ name", name);
        greeting = await electronAPI.greet(name);
      })(name);
  }
</script>

<main>
  {#await data}
    <h2>Awaiting Greet</h2>
  {:then _}
    <h2>{greeting}</h2>
    <input type="text" placeholder="Your Name" bind:value={name} />
  {/await}
</main>

<!-- bad styles ik stfu -->
<style lang="scss">
  main {
    font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: #181818;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    padding: 0 10px;
  }
</style>
