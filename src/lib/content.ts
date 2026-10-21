import { getCollection, type CollectionEntry } from "astro:content";

export type ServiceEntry = CollectionEntry<"services">;
export type ZoneEntry = CollectionEntry<"zones">;

export async function getServices() {
  const all = await getCollection("services");
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getProServices() {
  return (await getServices()).filter((s) => s.data.audience === "pro");
}

export async function getHomeServices() {
  return (await getServices()).filter((s) => s.data.audience === "particulier");
}

// Départements uniquement (carte, pied de page, listes)
export async function getZones() {
  return (await getAllZones()).filter((z) => z.data.kind === "departement");
}

// Pages villes, éventuellement filtrées par département
export async function getVilles(parent?: string) {
  return (await getAllZones()).filter((z) => z.data.kind === "ville" && (!parent || z.data.parent === parent));
}

// Départements et villes : toutes les pages locales
export async function getAllZones() {
  const all = await getCollection("zones");
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const zoneHref = (z: ZoneEntry) => `/nettoyage-bureaux-${z.id}/`;
export const serviceHref = (s: ServiceEntry) => `/${s.id}/`;
