# Neo Clean — site vitrine

Site statique de [www.neo-clean.fr](https://www.neo-clean.fr), construit avec [Astro](https://astro.build) et hébergé sur [Vercel](https://vercel.com).
Il remplace l'ancien site WordPress/Elementor (voir `audit/audit-neo-clean.html`).

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère le site dans dist/
npm run preview   # sert dist/ en local
```

## Où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Téléphone, e-mail, adresse, mentions légales | `src/data/site.ts` |
| Services : un fichier Markdown = une page | `src/content/services/*.md` |
| Départements : un fichier Markdown = une page | `src/content/zones/*.md` |
| Photos (cadrage, textes alternatifs) | `src/assets/photos/`, `src/lib/photos.ts` |
| Pages fixes (accueil, tarifs, contact…) | `src/pages/*.astro` |
| Couleurs, typographie, composants communs | `src/styles/global.css` |
| Réception du formulaire de devis | Formspree (`formEndpoint` dans `src/data/site.ts`) |
| Redirections des anciennes URL, en-têtes de sécurité | `vercel.json` (Vercel) et `public/.htaccess` (si hébergement Apache/Hostinger) |

## Mise en ligne

Le site est hébergé sur **Vercel**, relié au dépôt GitHub `Youdom-care/Neo-Clean` :
chaque envoi (`git push`) sur la branche `main` reconstruit et publie le site automatiquement.

- Adresse principale : **https://www.neo-clean.fr** (`neo-clean.fr` y redirige).
- Sitemap à déclarer dans Google Search Console : `https://www.neo-clean.fr/sitemap-index.xml`.
- Les redirections et en-têtes de sécurité sont dans `vercel.json` (Vercel ignore `.htaccess`).

## À compléter avant la mise en ligne

Les champs marqués `TODO` dans `src/data/site.ts` et `src/pages/tarifs.astro` :

- forme juridique, capital, RCS, directeur de la publication ;
- numéro de déclaration de services à la personne (obligatoire pour annoncer le crédit d'impôt) ;
- confirmation des tarifs particuliers (17,65 €/h après crédit d'impôt, repris de l'ancien site).
