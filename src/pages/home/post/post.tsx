import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import type { Post } from "~/assets/static/posts";
import { Heading, Text } from "~/components/fonts/fonts";
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

const HomePost = component$(({ post, featured }: PostProps) => {
  const { title, published, description } = post;

  useStyles$(styles);
  const visible = useSignal("hidden");

  useBrowserVisibleTask$(() => {
    visible.value = featured ? "shown" : "img-shown";
  });

  return (
    <div class={`${visible.value} post`}>
      <Heading class="post-title">{title}</Heading>
      <Text>{published}</Text>
      <Text>{description} </Text>
    </div>
  );
});

export const HomePosts = component$(() => {
  useStyles$(styles);
  return (
    <section class="posts">
      <div class="container">
        <Heading>Recent Posts</Heading>
        <HomePost post={tempPost} featured />
        <div class="grid">
          <HomePost post={tempPost} />
          <HomePost post={tempPost} />
          <HomePost post={tempPost} />
        </div>

      <HomeLink href="/posts">View all my posts</HomeLink>
      </div>
    </section>
  );
});
