import { component$, useStyles$ } from "@builder.io/qwik";
import type { Post } from "~/assets/static/posts";
import { Animated } from "~/components/animated";
import { Heading } from "~/components/fonts/fonts";
import { PostItem } from "~/components/post/post";
import { HomeLink } from "../link/link";

// TODO: change this 
const recentPost: Post = {
  slug: "posts/react-tableau",
  title: "Buidling a Tableau Library in React",
  description: "Learn the basics of embedding a Tableau dashboard in your React app, and how to abstract it into hooks / components.",
  published: "January 04, 2022",
};

export const HomePosts = component$(() => {
  useStyles$(`
    .container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 1100px;
      margin: auto;
    }
  `);

  return (
    <Animated>
      <section>
        <div class="container">
          <Heading>Recent Post</Heading>
          <Animated time="1s">
            <PostItem post={recentPost} featured />
          </Animated>
          <HomeLink href="/blog">View all my posts</HomeLink>
        </div>
      </section>
    </Animated>
  );
});
