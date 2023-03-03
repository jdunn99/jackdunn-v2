import {
  component$,
  Slot,
  useBrowserVisibleTask$,
  useSignal,
  useStyles$,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { Post } from "~/assets/static/posts";
import { Animated } from "~/components/animated";
import { Heading, Text } from "~/components/fonts/fonts";
import { PostItem } from "~/components/post/post";
import { HomeLink } from "../link/link";
import styles from "./post.scss?inline";

interface PostProps {
  featured?: boolean;
  post: Post;
}

const tempPost: Post = {
  title: "Test",
  description: "This is a test post",
  slug: "1",
  published: "Jan 20, 2022",
};

export const HomePosts = component$(() => {
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
    <Animated>
      <section>
        <div class="container">
          <PostItem post={tempPost} featured />
          <HomeLink href="/blog">View all my posts</HomeLink>
        </div>
      </section>
    </Animated>
  );
});
