<script lang="ts">
  import { browser } from "$app/environment";
  // @ts-ignore
  import CommitHash from "virtual:commit-hash";

  if (browser)
    console.log(
      `%cRunning on commit ${CommitHash}`,
      `color: ${
        CommitHash.endsWith("-dirty") ? "#f7a" : "#7af"
      };font-size:1.3em;`
    );
</script>

<slot />
