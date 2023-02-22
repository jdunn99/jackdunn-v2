import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./posts.css?inline";

export type Post = {
  slug: string;
  title: string;
  description: string;
  published: string;
};

interface PostProps {
  post: Post;
}

export const RecentPost = component$(({ post }: PostProps) => {
  useStylesScoped$(styles);
  const { slug, title, description, published } = post;

  return (
    <div class="container">
      <div class="heading">
        <h3>{title}</h3>
        <p>{published}</p>
      </div>
      <p class="description" style="font-size: 14px">{description}</p>
    </div>
  );
});
