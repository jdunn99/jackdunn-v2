import { component$, Resource, useStyles$ } from "@builder.io/qwik";
import { PostItem } from "~/components/post/post";
import { useMarkdown } from "~/utils/hooks/useMarkdown";

export default component$(() => {
  const metadata = useMarkdown("projects");

  useStyles$(`
    .grid {
        display: grid;
        grid-template-columns: 1fr / repeat(3, auto);
      }

 


    .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1100px;
    margin: auto;
  }

    }
  `);

  return (
    <Resource
      value={metadata}
      onResolved={(data) => {
        if (typeof data === "undefined") return <></>;

        // parse out the first index for the featured item.
        const [featured, ...rest] = data;

        return (
          <div class="container">
            <PostItem post={featured} featured />
          </div>
        );
      }}
    />
  );
});
