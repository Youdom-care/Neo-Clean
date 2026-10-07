# Neo Clean — site vitrine

Site statique de [neo-clean.fr](https://neo-clean.fr), construit avec [Astro](https://astro.build).
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
| Redirections des anciennes URL, en-têtes de sécurité | `public/.htaccess` |

## Mise en ligne sur Hostinger

1. `npm run build`
2. Envoyer le **contenu** du dossier `dist/` dans `public_html/` (gestionnaire de fichiers ou FTP),
   après avoir sauvegardé puis supprimé l'ancien WordPress.
3. Envoyer une demande de test depuis `/devis/` et vérifier qu'elle arrive sur formspree.io et par e-mail.
4. Dans Google Search Console : soumettre `https://neo-clean.fr/sitemap-index.xml`.

## À compléter avant la mise en ligne

Les champs marqués `TODO` dans `src/data/site.ts` et `src/pages/tarifs.astro` :

- forme juridique, capital, RCS, directeur de la publication ;
- numéro de déclaration de services à la personne (obligatoire pour annoncer le crédit d'impôt) ;
- confirmation des tarifs particuliers (17,65 €/h après crédit d'impôt, repris de l'ancien site).
