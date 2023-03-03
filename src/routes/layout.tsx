import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { Footer } from "../components/footer";
import { Navbar, NavSmall } from "../components//navbar/navbar";

export default component$(() => {
  useStylesScoped$(`
    .layout {
      position: relative;
      margin: 4rem;
           }

    .content {
      max-width: var(--max-width);
      margin: 0 auto;
    }
  `);

  return (
    <>
      <div class="glow" />
      <NavSmall />
      <div class="layout">
        <div class="content">
          <Navbar />
          <main>
            <Slot />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
});
