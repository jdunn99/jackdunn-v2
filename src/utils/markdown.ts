import { type ContentMenu, z } from "@builder.io/qwik-city";
import querystring from "querystring";

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

// https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
function decodeHTMLString(str: string) {
  return str.replace(/&#([0-9]{1,3});/gi, (_match, numStr) => {
    const num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
}

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
      normalizedItem.published = querystring.unescape(
        published.replace(/&quot;/g, "") || ""
      );
      normalizedItem.description = decodeHTMLString(description);
    }
    return normalizedItem;
  });
  return { title: menu.text, items: normalizedItems };
}

export function normalizeMenu(menu?: ContentMenu) {
  const parsed = menuSchema.parse(menu);
  return normalizedMenuSchema.parse(_normalizeMenu(parsed));
}
