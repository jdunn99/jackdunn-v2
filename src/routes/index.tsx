import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { HomePage } from "~/pages/home";

/*
      <Section heading="">
        <div class="contact-container">
          <Heading>Contact Me</Heading>
          <Text>
            I'm currently looking for full time opportunities and my inbox is
            always open. Sending an email is the best way to get in touch.
          </Text>
          <Button href="mailto:jackmdunn34@gmail.com">Send me an email</Button>
        </div>
      </Section>
    </Flex>
  );
});
*/

export default component$(() => {
  return <HomePage />;
});

export const head: DocumentHead = {
  title: "Jack Dunn",
  meta: [
    {
      name: "description",
      content: "Full stack developer from Selbyville, DE",
    },
  ],
};
