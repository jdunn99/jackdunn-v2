import {
  component$,
  Slot,
  useBrowserVisibleTask$,
  useSignal,
} from "@builder.io/qwik";

interface AnimatedProps {
  time?: string;
}

export const Animated = component$(({ time = "1s" }: AnimatedProps) => {
  const visible = useSignal("opacity: 0; transform: translateY(20%)");

  useBrowserVisibleTask$(() => {
    visible.value = `
      opacity: 1; transition: all ${time}; transform: translateY(0);
    `;
  });

  return (
    <div style={visible.value}>
      <Slot />
    </div>
  );
});
