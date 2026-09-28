import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const faq = z.array(z.object({ q: z.string(), a: z.string() }));

// Une prestation = un fichier Markdown dans src/content/services/.
// Le nom du fichier devient l'adresse de la page : nettoyage-bureau.md → /nettoyage-bureau/
const services = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/services" }),
  schema: z.object({
    order: z.number(),
    audience: z.enum(["pro", "particulier"]),
    icon: z.string(),
    title: z.string(),
    h1: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    summary: z.string(),
    // Noms de photos dans src/assets/photos/ : la première sert d'en-tête
    photos: z.array(z.string()).min(1),
    included: z.array(z.string()),
    forWho: z.array(z.string()),
    frequency: z.string(),
    schedule: z.array(z.object({ freq: z.string(), tasks: z.array(z.string()) })),
    faq,
  }),
});

// Un département = un fichier Markdown dans src/content/zones/.
// Le nom du fichier donne l'adresse : paris.md → /nettoyage-bureaux-paris/
const zones = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/zones" }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    code: z.string(),
    in: z.string(),
    metaDescription: z.string(),
    lede: z.string(),
    photo: z.string(),
    areas: z.array(z.object({ name: z.string(), text: z.string() })),
    cities: z.array(z.string()),
    // Position sur la carte schématique (0–100)
    x: z.number(),
    y: z.number(),
    faq,
  }),
});

export const collections = { services, zones };
