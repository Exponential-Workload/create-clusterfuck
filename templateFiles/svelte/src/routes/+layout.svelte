<div id="appRoot">
  <slot />
</div>

<style lang="scss">
  #appRoot {
    // no blinding ppl
    background: #1a1a1a;
    color: #ffffff;
    // remove ugly default fonts
    font-family: Inter, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; // Inter is imported in app.html
    // positioning
    position: fixed;
    top: 0;
    left: 0;
    // display control
    width: 100vw;
    height: 100vh;
    // overflow control
    overflow-y: auto;
    overflow-x: hidden;
    // center everything
    /*
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    */
  }
</style>
