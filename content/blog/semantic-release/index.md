---
date: 2024-09-15
description: L'un des meilleurs outils *Open Source* pour faire du *versioning* git ?
image: 
  src: /devicon/semanticrelease-original.svg
  height: 200px
title: 📦🚀 Semantic Release
---

Lorsque l'on construit un logiciel, on cherche généralement à gérer des versions pour simplifier le suivi ou la maintenance de ce qui a été livré ou déployé.
Dans cette démarche, en creusant la *CICD* (*Continuous Integration*, *Continuous Delivery*, *Continuous Deployment*) sur l'une de mes missions, 
pour gérer les versions de mes projets personnels, je suis tombé sur [**semantic-release**](https://github.com/semantic-release/semantic-release).

En creusant un peu, je me suis rendu compte que la capacité de l'outil à être applicable peu importe le langage du logiciel était intéressante 
et que son système d'extensions permettait d'ajuster les comportements de l'outil pour la publication des versions.

#### Qu'est-ce que **semantic-release** ?

C'est un outil *Open Source* gérant la publication des *tags* pour des logiciels maintenus avec **git**.
Développé en **JavaScript**, **semantic-release** est facilement extensible avec des extensions 
et configurable au travers d'une *CLI* (*Command Line Interface*) ou d'un fichier (`.releaserc` au format `.yaml`, `.json` ou `.js`).

Une version est calculée à partir des nouveaux *commits* (de la branche qui doit être publiée) réalisés depuis la dernière version publiée.

#### Sur quoi se base t'il pour calculer une version ?

Le calcul d'une version se base sur du [*Semantic Versioning*](https://semver.org/) (ou *semver*), 
c'est une [spécification](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions) (assez complète) pour le nommage de version.
Voici quelques exemples :

- `1.0.0`
- `12.16.1788`
- `1.0.0-beta.1`
- `1.0.0+702c7fcc879cf8cd0401e70fc083386e07ff0a35`
- `1.0.0+702c7fcc879`
- `1.0.0-dev.702c7fcc879`

Il est commun en supplément d'ajouter le préfixe "v" aux versions, 
c'est d'ailleurs pour cela que **semantic-release** propose une option de configuration spécifique (`tagFormat`) pour paramétrer le format du *tag* qui sera créé.

#### Quel est le processus de publication ?

Dans les détails de l'outil, le processus de publication consiste en suite d'étapes (fonctions) qui sont exécutées dans l'ordre suivant :

- *Verify Conditions* : Vérification de certaines conditions (*tokens* d'accès par exemple)
- *Get last release* : Récupération des *commits* réalisés depuis la dernière version
- *Analyze commits* : Détermination de la nouvelle version (*prerelease*, *patch*, mineur, majeur, next, etc.)
- *Verify release* : Étape libre pour les extensions afin de déterminer la conformité de la *release*
- *Generate notes* : Génération des notes de la *release* (titre du *commit*, notes supplémentaires, organisation en section)
- *Create git tag* : Création du *tag* **git**
- *Prepare* : Préparation de la *release*
- *Publish* : Publication de la *release*
- *Notify* : Notification du succès ou de l'échec de la *release*

Lorsqu'une étape lève une exception / erreur, alors les suivantes ne sont pas exécutées (sauf la notification d'échec) et l'exécution s'arrête avec l'erreur rencontrée.
En réalité, **semantic-release** délègue une majeure partie du *flow* d'exécution aux extensions (abordé plus bas), qui peuvent se greffer à chacune des étapes.
Bien sûr, par défaut, un certain nombre d'extensions sont définies pour que l'outil ait une vraie plus-value sans configuration particulière.

#### Comment configurer l'outil ?

Comme abordé plus haut, **semantic-release** peut être configuré avec plusieurs options :

- `--extends` : La liste de configurations à étendre
- `--branches` : La liste des branches qui peuvent être publiées
- `--tagFormat` : Le format du *tag* à créer (par défaut `v${version}`)
- `--plugins` : La liste d'extensions avec leur configuration associée
- `--repositoryUrl` : *URL* vers le dépôt avec votre code (optionnel, par défaut récupéré au travers de l'*URL* **git**)
- `--dry-run` : Exécute en *dry run* la création de la *release*
- `--ci` / `--no-ci` : *Bypass* des vérifications liées à un environnement *CI* (*Continuous Integration*) pour publier de nouvelles versions depuis un environnement local
- `--debug` : Ajoute les logs réalisés avec [**debug**](https://github.com/debug-js/debug) dont le namespace est `semantic-release:`

Personnellement, je ne suis pas très *fan* de l'option `--extends` puisque pour qu'une configuration puisse être étendue, 
celle-ci doit être publiée sur un registre npm. 
En comparaison, une extension de configuration comme peut le faire [**renovate**](https://docs.renovatebot.com/config-presets/#preset-file-naming) 
est très pratique, puisqu'il suffit simplement de préciser le chemin de la configuration.

#### En quoi consiste la configuration des branches ?

Si on regarde de plus près certaines configurations, comme celle des branches, cela consiste en deux choses :

- Préciser quelles branches peuvent être publiées
- Préciser si une branche spécifique est dite de *prerelease* et son identifiant de *prerelease*

Ci-dessous, un exemple complet, il faut aussi noter que le nom d'une branche peut être une chaîne de caractères fixe, 
ou un *glob* qui respecte le format [**micromatch**](https://github.com/micromatch/micromatch?tab=readme-ov-file#matching-features).

```yaml
branches:
  # 1.12.x, 1.x, 1.x.x
  # https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches
  - +([0-9])?(.{+([0-9]),x}).x
  - master
  - main
  - next
  - next-major
  # la branche nommée "beta" est catégorisée en prerelease
  # le tag créé sera de la forme 1.12.5-beta.X
  # le X sera incrémenté en fonction du nombre de prerelease réalisées 
  # sur la version actuelle pointée par la beta
  - name: beta
    prerelease: true
  # la branche nommée "staging" est catégorisée en prerelease
  # le tag créé sera de la forme 1.12.5-beta.X
  # le X sera incrémenté en fonction du nombre de prerelease réalisées 
  # sur la version actuelle pointée par la beta
  - name: staging
    prerelease: beta
```

#### À quoi servent les extensions ?

Par défaut, **semantic-release** ne gère que la création d'un *tag* **git**, le reste du processus de publication doit être géré par les extensions 
et au moins une extension doit être présente pour gérer l'étape d'analyse des *commits*.

Les extensions peuvent ajouter des comportements comme par exemple : 

- La création de notes de version (qui pourraient être intégrées à une page de *release*)
- La création d'une *release* **GitHub**, **GitLab** ou **Gitea**
- La publication d'un *package* npm, ou maven sur un registre
- La publication d'une image Docker sur un registre
- La fusion de la branche publiée dans une autre branche

Malgré tout, sans configuration particulière, **semantic-release** intègre les extensions suivantes :

- [**@semantic-release/commit-analyzer**](https://github.com/semantic-release/commit-analyzer) :
  - Analyse les *commits* réalisés depuis la dernière version et détermine la nouvelle version
- [**@semantic-release/release-notes-generator**](https://github.com/semantic-release/release-notes-generator) :
  - Crée les notes de la *release* organisées en sections à partir de la liste des *commits* de la nouvelle version
- [**@semantic-release/npm**](https://github.com/semantic-release/npm) :
  - Incrémente la version présente dans le `package.json` avec la nouvelle version (attention ce n'est pas poussé sur le dépôt **git**)
  - Publie le *package* npm sur un registre approprié (par défaut [npmjs.org](https://npmjs.org)) si besoin
- [**@semantic-release/github**](https://github.com/semantic-release/github) :
  - Crée la *release* **GitHub** et notifie les *pull requests* / *issues* que ces sujets ont été publiés

Comme l'étape d'analyse des *commits* est obligatoire dans le processus de publication de l'outil, je recommande de garder à minima 
l'extension **@semantic-release/commit-analyzer** qui peut être configurée pour modifier les modalités du calcul de la nouvelle version :

```yaml
plugins:
  - - "@semantic-release/commit-analyzer"
    - # le parser global pour les commits
      # https://www.conventionalcommits.org/en/v1.0.0/#specification
      preset: conventionalcommits

      # les règles pour définir quel type de commit engendre quel type de release
      releaseRules:
        - { breaking: true, release: "major" }
        - { revert: true, release: "patch" }
        - { type: "feat", release: "minor" }
        - { type: "fix", release: "patch" }
        - { type: "revert", release: "patch" }
        - { type: "docs", release: "patch" }
        - { type: "refactor", release: "minor" }
        - { scope: "release", release: false }

      # la présence de BREAKING CHANGES ou BREAKING dans un commit
      # indiquera à semantic-release de réaliser un version majeur
      # peu importe les types de commits présents dans la release attendue
      parserOpts:
        noteKeywords: [ "BREAKING CHANGES", "BREAKING" ]
```

L'une des fonctionnalités intéressantes sur laquelle gravitent plusieurs extensions concerne la génération des notes de *release*.
En effet on peut retrouver **@semantic-release/release-notes-generator** (abordé plus haut) 
et [**@semantic-release/changelog**](https://github.com/semantic-release/changelog) qui se sert de la précédente extension 
pour construire ou mettre à jour le fichier `CHANGELOG.md` (afin de suivre les changements réalisés à chaque version) :

```yaml
plugins:
  - - "@semantic-release/release-notes-generator"
    - # le parser global pour les commits
      # https://www.conventionalcommits.org/en/v1.0.0/#specification
      preset: conventionalcommits

      # une configuration pour définir quel type de commit va 
      # dans quelle section des notes de release
      presetConfig:
        types:
          # chaque type de commit est positionné dans une section spécifique
          - { type: "feat", section: "Features" }
          - { type: "fix", section: "Bug Fixes" }
          - { type: "revert", section: "Reverts" }
          - { type: "docs", section: "Documentation" }
          - { type: "refactor", section: "Code Refactoring" }
          - { type: "test", section: "Tests", hidden: true } # il est possible de masquer une section

      parserOpts:
        # les notes derrière BREAKING ou BREAKING CHANGES dans un commit
        # seront positionnées dans une section spécifique supplémentaire
        # dans les notes de la release
        noteKeywords: [ "BREAKING CHANGES", "BREAKING" ]

  - "@semantic-release/changelog"
```

En complément des deux exemples précédents et des extensions par défaut présentées, 
voici quelques extensions *Open Source* ajoutant différents comportements :

- Créer des *release* en fonction de la plateforme **git** :
  - [**@saithodev/semantic-release-gitea**](https://github.com/saitho/semantic-release-gitea) :
    - Crée la *release* **Gitea** et notifie les *pull requests* / *issues*
  - [**@semantic-release/gitlab**](https://github.com/semantic-release/gitlab) :
    - Crée la *release* **GitLab** et notifie les *pull requests* / *issues*
- Créer et publier un *package* maven ainsi que mettre à jour la version dans le `pom.xml` :
  - [**conveyal/maven-semantic-release**](https://github.com/conveyal/maven-semantic-release)
  - [**terrestris/maven-semantic-release**](https://github.com/terrestris/maven-semantic-release)
- Fusionner la branche publiée dans d'autres branches :
  - [**@kilianpaquier/semantic-release-backmerge**](https://github.com/kilianpaquier/semantic-release-backmerge) :
    - Crée une *pull request* en cas de conflits
  - [**@saithodev/semantic-release-backmerge**](https://github.com/saitho/semantic-release-backmerge) :
    - Méthodologie de fusion (*fast forward*, *rebase*, etc.) configurable
- Exécuter des scripts shell personnalisés sur certaines (ou toutes) étapes d'exécution : [**@semantic-release/exec**](https://github.com/semantic-release/exec)
- Ajouter un *commit* à la branche publiée avec différents *assets* modifiés durant le processus de publication 
  (`package.json`, `pom.xml`, `CHANGELOG.md`, `LICENSE`, etc.) : [**@semantic-release/git**](https://github.com/semantic-release/git)

#### Quel résultat cela peut donner ?

Voici un exemple de ce qu'une *release* sur **GitHub** peut donner :

{{< figure 
  src="/blog/semantic-release/semantic-release.webp" 
  caption="La release [v24.0.0](https://github.com/semantic-release/semantic-release/releases/tag/v24.0.0) de **semantic-release**" 
  class="text-center" >}}

#### Comment développer une extension ?

On a parlé plus haut des possibilités d'extension, mais finalement, 
comment [développer une extension](https://semantic-release.gitbook.io/semantic-release/developer-guide/plugin) 
pour apporter de la valeur ajoutée supplémentaire à **semantic-release** ?

Une extension est forcément un *package* npm qui exporte (au sens **JavaScript** ou **TypeScript**) 
au moins une des étapes d'exécution de **semantic-release** et qui soit "enregistré" ou "déployé" dans un registre npm.

Pour que ce soit plus simple pour vos utilisateurs, je vous recommande d'utiliser le registre [npmjs.org](https://www.npmjs.com/) 
plutôt qu'un autre registre car cela nécessiterait de la configuration supplémentaire pour l'authentification et droits d'accès.

```ts
import { SuccessContext, VerifyConditionsContext, ... } from 'semantic-release'

export interface Config {
    debug: boolean
    dryRun: boolean
    repositoryUrl: string

    // un moyen simple en TypeScript de récupérer n'importe quelle clé envoyée en entrée
    // bien sûr pour le développement d'une extension avec une configuration spécifique,
    // je vous recommande de préciser les noms et types des propriétés
    [k: string]: any
}

// fonction exécutée pour vérifier certaines conditions comme par exemple 
// le bon format de la configuration du plugin
// ou encore la vérification des variables d'environnement (token d'accès, URL d'API, etc.)
export const verifyConditions = async (globalConfig: Config, context: VerifyConditionsContext) => {}

// fonction exécutée pour l'analyse des commits depuis la dernière release
export const analyzeCommits = async (globalConfig: Config, context: AnalyzeCommitsContext) => {}

// fonction exécutée pour vérifier la conformité de la release
export const verifyRelease = async (globalConfig: Config, context: VerifyReleaseContext) => {}

// fonction exécutée pour / lors de la génération des notes de la release
export const generateNotes = async (globalConfig: Config, context: GenerateNotesContext) => {}

// fonction exécutée pour ajouter un channel de release, 
// je n'ai pas plus de contexte car je n'ai jamais poussé la réflexion sur cette fonctionnalité
export const addChannel = async (globalConfig: Config, context: AddChannelContext) => {}

// fonction exécutée pour préparer la release comme 
// mettre à jour certains fichiers ou pousser un commit
export const prepare = async (globalConfig: Config, context: PrepareContext) => {}

// fonction exécutée pour publier la release
export const publish = async (globalConfig: Config, context: PublishContext) => {}

// fonction exécutée quand la publication de la release s'est correctement déroulée
export const success = async (globalConfig: Config, context: SuccessContext) => {}

// fonction exécutée quand la publication de la release n'a pas fonctionné
export const fail = async (globalConfig: Config, context: FailContext) => {}
```

#### Existe-t-il des alternatives ?

C'est vrai que le sujet abordé ici était **semantic-release**, mais il existe aussi des solutions alternatives, 
qui résolvent aussi cette problématique de suivi et de maintenance des livraisons et déploiements :

[**gh-release**](https://github.com/softprops/action-gh-release)

C'est une Action **GitHub** configurable qui se base principalement sur les *pull requests* réalisées 
depuis la dernière version publiée.

L'aspect intéressement concerne la génération des notes de *release* 
puisque l'outil peut se baser sur le fichier `.github/release.yml` qui est aussi le fichier par défaut 
qu'utilise **GitHub** pour générer les notes de *release* quand celle-ci est 
[créée à la main](https://docs.github.com/fr/repositories/releasing-projects-on-github/automatically-generated-release-notes).

Un autre point intéressant concerne la création d'une discussion **GitHub** (optionnel) lors de la création 
de la *release* pour permettre aux utilisateurs de commenter / réagir aux changements.

[**release-drafter**](https://github.com/release-drafter/release-drafter)

C'est aussi une Action **GitHub** (existait aussi en **GitHub** App mais celle-ci a été dépréciée), 
qui se base aussi sur les *pull requests* réalisées depuis la dernière version publiée.

À la différence de **gh-release**, la configuration est un peu plus malléable puisqu'elle n'utilise pas le fichier 
`.github/release.yml` mais un fichier spécifique pour **release-drafter**.
Parmi les points plus malléables, on peut retrouver plus de customisation sur les notes de la *release*, 
une fonctionnalité que j'aime beaucoup, l'[*autolabeler*](https://github.com/release-drafter/release-drafter?tab=readme-ov-file#autolabeler), qui à partir de la configuration va mettre les bons labels 
automatiquement sur les *pull requests* ou encore la possibilité de préciser l'identifiant de *prerelease*.

[**release-please**](https://github.com/googleapis/release-please)

À la différence de **gh-release** ou **release-drafter**, cet outil se base, comme **semantic-release** 
sur les *commits* et les *conventional commits* pour déterminer la nouvelle version ainsi que les notes de *release*.

C'est à la base une *CLI* qui est déclinée en Action **GitHub**, dans tous les cas la *CLI* n'est pour le moment (octobre 2024) 
disponible uniquement que pour **GitHub**.

L'un des gros atout de cet outil est de passer par une *pull request* mise à jour 
au fur et à mesure des fusions réalisées dans la branche ciblée par la *release*.
Une fois la *pull request* principale fusionnée alors la *release* est créée au travers de l'action **GitHub**.
