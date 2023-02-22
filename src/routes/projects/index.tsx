import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";
import { statSync } from "fs";
import { readdir } from "fs/promises";

export default component$(() => {
  const menu = useContent();

  const test = useResource$(({ track, cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return readdir("./src/routes/projects");
  });

  console.log(test);
  return (
    <div>
      <Resource
        value={test}
        onResolved={(data) => (
          <div>
            {data.filter((file) =>
              statSync(`./src/routes/projects/${file}`).isDirectory()
            )}
          </div>
        )}
      />
    </div>
  );
});
