import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Navbar } from "../navbar/navbar";
import styles from "./layout.css?inline";

export const Layout = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="layout">
      <div class="content">
        <Navbar />
        <main>
          <Slot />
        </main>
      </div>
    </div>
  );
});
