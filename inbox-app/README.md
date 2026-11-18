# Boîte de réception (application web)

Une boîte de réception au style Android (thème sombre) qui reproduit l'écran
« Principale » de la capture, et dans laquelle on peut **ajouter des messages
reçus à n'importe quelle date**, passée ou future.

Tout tient dans `index.html` : aucune installation, aucun serveur nécessaire.

## Utilisation

| Action | Comment |
| --- | --- |
| Ajouter un message reçu | Bouton **Nouveau message** (ou menu ☰ → *Ajouter un message reçu*) |
| Choisir la date | Champ *Date et heure* : n'importe quelle date (raccourcis : Maintenant, Hier, Il y a 7 jours…) |
| Modifier un message | Ouvrir le message → icône crayon |
| Supprimer | Glisser le message vers la gauche ou la droite, ou icône corbeille (avec « Annuler ») |
| Suivre (étoile) | Toucher l'étoile |
| Marquer comme non lu | Ouvrir le message → icône enveloppe |
| Rechercher | Barre « Rechercher dans les messages » |
| Catégories | Promotions, Notifications, Réseaux sociaux, Forums : regroupées en une ligne dans *Principale*, placées selon la date de leur message le plus récent |
| Compteurs (« 99+ », « 30 nouveaux ») | Rond du compte en haut à droite → *Paramètres* → *Compteurs* : automatique (non lus), personnalisé ou masqué |
| Initiale / couleur / photo du compte | *Paramètres* → *Compte* |
| Taille du texte | *Paramètres* → *Taille du texte* (90 % à 120 %) |
| Sauvegarder / restaurer | *Paramètres* → *Exporter* / *Importer* (fichier `.json`) |

Pour chaque message on peut régler : expéditeur, adresse e-mail, objet, texte,
date et heure, catégorie, non lu, étoile, nombre de messages dans la
conversation (« moi, Kerry 2 »), pièce jointe (affichée en pastille sous le
message) et photo de l'expéditeur (silhouette, lettre colorée ou image).

Les dates s'affichent comme sur Android : l'heure pour aujourd'hui (`11:45`),
le jour et le mois pour cette année (`14 nov.`), la date complète pour les
années précédentes (`02/12/2025`).

## Où sont enregistrés les messages ?

Dans le navigateur de l'appareil (`localStorage`), uniquement sur ce téléphone
ou cet ordinateur. Rien n'est envoyé sur Internet. Pensez à **exporter** une
sauvegarde de temps en temps (vider les données du navigateur efface les messages).

## L'installer sur un téléphone Android

L'application doit être servie en `https` pour pouvoir être installée :

1. Publier le dossier `inbox-app` sur un hébergement statique, par exemple
   **GitHub Pages** (Settings → Pages → *Deploy from a branch* → choisir la
   branche et le dossier racine ; l'adresse sera
   `https://<utilisateur>.github.io/<dépôt>/inbox-app/`) ou **Netlify Drop**
   (glisser-déposer le dossier sur app.netlify.com/drop).
2. Ouvrir l'adresse dans Chrome sur le téléphone.
3. Menu ⋮ → **Ajouter à l'écran d'accueil** / **Installer l'application**.

Une fois installée, elle s'ouvre en plein écran comme une vraie application et
fonctionne hors connexion.

## Fichiers

- `index.html` : toute l'application (interface, styles, logique).
  Les messages de démonstration sont dans la fonction `demoData()`,
  les couleurs dans le bloc `:root` en haut du fichier.
- `manifest.webmanifest`, `icon*.png`, `icon.svg` : installation sur l'écran d'accueil.
- `sw.js` : fonctionnement hors connexion.
