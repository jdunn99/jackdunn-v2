import { component$, useSignal, useStyles$} from "@builder.io/qwik";
import styles from "./post.scss?inline";
import type { Post } from "~/assets/static/posts";
import { Heading, Text } from "../fonts/fonts";

interface PostProps {
  post: Post;
  featured?: boolean;
}

export const PostItem = component$(({ post, featured }: PostProps) => {
  useStyles$(styles);

  const { value }  = useSignal(featured ? "featured" : "card");
  const { title, description, published, slug } = post;

  return (
  <div class="post-container">
    <a href={slug} class={`post ${value}`}>
      <img src={`/images/${slug}/card.svg`} />
      <div class="post-content">
        <Heading class="post-title">{title}</Heading>
        <Text class="post-published">{published}</Text>
        <Text class="post-description">{description}</Text>
      </div>
    </a>
    </div>
  );
});
