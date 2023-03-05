import { type ContentMenu, z } from "@builder.io/qwik-city";

const menuItemSchema: any = z.object({
  text: z.string(),
  href: z.string().optional(),
  items: z.array(z.lazy(() => menuItemSchema)).optional(),
});

const menuSchema = z.object({
  text: z.string(),
  items: z.array(menuItemSchema),
});

const normalizedMenuItemSchema = z.object({
  title: z.string(),
  slug: z.string(),
  published: z.string(),
  description: z.string(),
});

const normalizedMenuSchema = z.object({
  title: z.string(),
  items: z.array(normalizedMenuItemSchema),
});

function _normalizeMenu(
  parsedMenu: z.infer<typeof menuSchema>
): z.infer<typeof normalizedMenuSchema> {
  const menu = menuSchema.parse(parsedMenu);

  const normalizedItems = menu.items.map((item) => {
    const { text, href, items } = item;
    const normalizedItem: z.infer<typeof normalizedMenuItemSchema> = {
      title: text,
      slug: href || "",
      published: "",
      description: "",
    };
    if (items && items.length > 0) {
      const [published, description] = items.map(
        (subItem: { text: string }) => subItem.text
      );
      normalizedItem.published = published.replace(/&quot;/g, "") || "";
      normalizedItem.description = description;
    }
    return normalizedItem;
  });
  return { title: menu.text, items: normalizedItems };
}

export function normalizeMenu(menu?: ContentMenu) {
  const parsed = menuSchema.parse(menu);
  return normalizedMenuSchema.parse(_normalizeMenu(parsed));
}
