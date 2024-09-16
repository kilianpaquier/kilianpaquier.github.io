---
date: 2024-09-15
description: L'un des meilleurs outils *open source* pour faire du *versioning* git ?
image: /slides/semantic-release/semantic-release-logo.svg
title: 📦🚀 Semantic Release
---

- [Qu'est-ce donc ?](#quest-ce-donc-)
- [Configuration](#configuration)
- [Développer une extension](#développer-une-extension)
- [Alternatives](#alternatives)

### Qu'est-ce donc ?

[**Semantic Release**](https://github.com/semantic-release/semantic-release) est un outil *Open Source* pour gérer le *versioning* de produits avec git.
L'outil est développé en javascript, extensible avec des *plugins* et configurable (pour les extensions et le calcul de la version)
au travers d'une *CLI* (*Command Line Interface*) ou d'un fichier (`.releaserc` au format `.yaml`, `.json` ou `.js`).

Sa mission principale est de créer des *releases* à partir des *commits* 
tout en prenant en compte le calcul du nouveau numéro de version à partir du nom de la branche 
et la [configuration des branches](#branches).

Mais comment sont calculées les versions ?
Cela se base tout simplement sur du *Semantic Versioning*. Aussi nommé [*semver*](https://semver.org/), c'est une spécification pour le nommage de version.
C'est un format assez complet, dont vous pouvez retrouver toutes les subtilités dans la [spécification](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions).
Voici quelques exemples :

- `1.0.0`
- `12.16.1788`
- `1.0.0-beta.1`
- `1.0.0+702c7fcc879cf8cd0401e70fc083386e07ff0a35`
- `1.0.0+702c7fcc879`
- `1.0.0-dev.702c7fcc879`

Il est commun en supplément d'ajouter le préfixe "v" aux versions, c'est d'ailleurs pour cela que **semantic-release** propose une option de configuration spécifique pour ça.

#### Étapes d'exécution

Si on rentre un peu dans les détails du fonctionnement de **semantic-release**, on remarque que l'outil exécute une suite de fonctions sur lesquelles
les extensions peuvent se brancher de manière unitaire.
Il faut noter que l'ordre d'exécution des extensions est prise en compte à partir de l'ordre de la liste en argument de la *CLI* ou du fichier de configuration.

Le déroulé d'exécution est tel quel :

- *Verify Conditions* : Vérification de certaines conditions (*tokens* d'accès par exemple)
- *Get last release* : Récupération des *commits* réalisés depuis la dernière *release*
- *Analyze commits* : Détermination du type de *release* (*prerelease*, *patch*, mineur, majeur, next, etc.)
- *Verify release* : Etape libre pour les extensions afin de déterminer la conformité de la *release*
- *Generate notes* : Génération des notes de la *release*
- *Create git tag* : Création du *tag* git
- *Prepare* : Préparation de la *release*
- *Publish* : Publication de la *release* et autres
- *Notify* : Notification du succès ou de l'échec de la *release*

Quand on parle de génération notes de *release*, on parle de l'organisation en sections des différents *commits* réalisés entre la dernière version et la nouvelle version.
Cela est possible avec l'extension par défaut **@semantic-release/release-notes-generator** dont on reparlera un peu plus loin.
Les notes de *release* peuvent derrière apparaître dans un fichier `CHANGELOG.md` au sein des fichiers du dépôt ou 
encore au sein de la page de *release* (possible uniquement avec certaines plateformes dont **GitHub**, **GitLab** ou encore **Gitea**).

Concernant l'étape de *publish*, au delà de la création de la *release*, certaines extensions peuvent aussi construire un *package* npm, 
une image Docker ou encore créer une *chart* helm. Ces *packages* chargés sur leur registres (zone de dépôt) respectifs.

---

### Configuration

On a parlé plus haut des possibilités de configuration (*CLI* ou fichier), plus en détail voici ce qui est possible de configurer 
et à quoi chaque clé de configuration sert :

- `--extends` : La liste de configurations à étendre, cependant je ne trouve pas la propriété très pratique.
  En effet pour étendre une configuration celle-ci doit forcément être un *package* chargé sur un registre npm
- `--branches` : La liste des branches qui peuvent être *released*
- `--tagFormat` : Le format du *tag* à créer sur git
- `--plugins` : La liste d'extensions avec leur configuration associée
- `--repositoryUrl` : *URL* vers le dépôt avec votre code (optionnel, par défaut récupéré au travers de l'*URL* git)
- `--dry-run` : Exécute en *dry run* la création de la *release* (logique)
- `--ci` / `--no-ci` : *Bypass* des vérifications liées à un environnement *CI* (*Continuous Integration*) pour faire des *releases* depuis un environnement local
- `--debug` : Ajoute les logs au niveau *DEBUG* (ça paraît logique)

#### Branches

Comme présenté précédemment avec les options de configuration, les branches pouvant être *released* est 
évidemment configurable, et comme **semantic-release** est développé en JS, le *parsing* est plutôt libre 😉 !

Le nom de branche peut être une chaîne de caractères fixe, ou un glob 
qui respecte le format [micromatch](https://github.com/micromatch/micromatch?tab=readme-ov-file#matching-features).

```yaml
branches:
  # 1.12.x, 1.x
  - +([0-9])?(.{+([0-9]),x}).x
  - master
  - main
  - next
  - next-major
  # la branche nommée "beta" est catégorisée en *prerelease*
  # le *tag* créé sera donc 1.12.5-beta.X
  # le X sera incrémenté en fonction du nombre de *prerelease* réalisées 
  # sur la version actuelle pointée par la beta
  - name: beta
    prerelease: true
  # la branche nommée "staging" est catégorisée en *prerelease*
  # le *tag* créé sera donc 1.12.5-beta.X
  # le X sera incrémenté en fonction du nombre de *prerelease* réalisées 
  # sur la version actuelle pointée par la beta
  - name: staging
    prerelease: beta
```

#### Extensions

Comme abordé plus haut, **semantic-release** peut être étendu au travers d'extensions.
Par défaut **semantic-release** utilise les extensions suivants :

- [**@semantic-release/commit-analyzer**](https://github.com/semantic-release/commit-analyzer) :
  - Analyse des *commits*
  - Catégorisation des *commits* pour déterminer le type de la prochaine *release*
- [**@semantic-release/release-notes-generator**](https://github.com/semantic-release/release-notes-generator) :
  - Création les notes de la *release* organisées en sections
- [**@semantic-release/npm**](https://github.com/semantic-release/npm) :
  - Création du *package* sur un registre npm (par défaut [npmjs.org](https://npmjs.org))
  - Incrémentation de la version dans le `package.json` (non poussé)
- [**@semantic-release/github**](https://github.com/semantic-release/github) :
  - Création de la *release* **GitHub** et notification sur les *pull requests* / *issues*

Au delà des extensions par défaut, il existe quelques mentions notables côté *Open Source* :

- [**@semantic-release/changelog**](https://github.com/semantic-release/changelog) :
  - Création / mise à jour du fichier `CHANGELOG.md` avec les notes de *release*
- [**@semantic-release/exec**](https://github.com/semantic-release/exec) :
  - Exécution de scripts shell / des commandes shell lors des étapes d'une *release*
- [**@semantic-release/git**](https://github.com/semantic-release/git) :
  - Ajout d'un *commit* à la branche *released*
- [**@saithodev/semantic-release-gitea**](https://github.com/saitho/semantic-release-gitea) :
  - Création de *release* **Gitea** et notification sur les *pull requests* / *issues*
- [**@semantic-release/github**](https://github.com/semantic-release/github) :
  - Création de *release* **GitHub** et notification sur les *pull requests* / *issues*
- [**@semantic-release/gitlab**](https://github.com/semantic-release/gitlab) :
  - Création de *release* **GitLab** et notification sur les *pull requests* / *issues*
- [**maven-semantic-release**](https://github.com/conveyal/maven-semantic-release) :
  - Création du *package* sur un registre maven et incrémentation de la version dans le(s) `pom.xml` (non poussé)
- [**maven-semantic-release**](https://github.com/terrestris/maven-semantic-release) :
  - Création du *package* sur un registre maven et incrémentation de la version dans le(s) `pom.xml` (non poussé)
- [**semantic-release-license**](https://github.com/cbhq/semantic-release-license) :
  - Mise à jour de la date de *copyright* sur le fichier `LICENSE` (non poussé)
- [**@kilianpaquier/semantic-release-backmerge**](https://github.com/kilianpaquier/semantic-release-backmerge) :
  - Backmerge de la branche *released* dans une ou plusieurs branches
  - Création de *pull requests* en cas de conflits
- [**@saithodev/semantic-release-backmerge**](https://github.com/saitho/semantic-release-backmerge) :
  - Backmerge de la branche *released* dans une ou plusieurs branches
  - Configuration de la méthodologie de fusion

Prenons maintenant un exemple de fichier de configuration (complet au niveau extensions) qui pourrait être utilisé pour un projet :

```yaml
plugins:
  # si un plugin possède une configuration spécifique
  # il est placé dans une liste de deux éléments, 
  # son nom en premier et sa configuration en second
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

  # un plugin n'ayant pas de configuration spécifique doit être positionné
  # directement à la racine de la liste des plugins
  - "@semantic-release/changelog"
  - "semantic-release-license"

  - - "@semantic-release/git"
    - assets: [ "CHANGELOG.md", "LICENSE" ] # les assets à pousser dans le commit git
      message: "chore(release): v${nextRelease.version} [skip ci]" # le message de commit

  - - "@semantic-release/github"
    - assets: # les assets à pousser dans la page de release GitHub
        - label: CHANGELOG.md
          path: CHANGELOG.md
        - path: checksums.txt
        - path: dist

      # deux options pour définir si une issue doit être créée 
      # dans le cas où la release ne pourrait être créée
      failComment: false
      failTitle: false

      # le commentaire à ajouter aux issues ou pull requests résolues par cette release
      successComment: 🎉 This issue has been resolved in v${nextRelease.version} 🎉
```

#### Résultat

Voici un exemple de ce qu'une release sur **GitHub** peut donner :

{{< figure 
  src="/blog/semantic-release/semantic-release.webp" 
  caption="La release [v24.0.0](https://github.com/semantic-release/semantic-release/releases/tag/v24.0.0) de **semantic-release**" 
  class="text-center" >}}

---

### Développer une extension

On a parlé plus haut des possibilités d'extension, mais finalement, 
comment [développer une extension](https://semantic-release.gitbook.io/semantic-release/developer-guide/plugin) 
pour apporter de la valeur ajoutée supplémentaire à **semantic-release** ?
Une extension est forcément un *package* npm. Pour qu'elle puisse être utilisée, il faut qu'elle soit déployée sur un registre npm.

Pour que ce soit plus simple pour vos utilisateurs, je vous recommande d'utiliser le registre [npmjs.org](https://www.npmjs.com/) 
plutôt qu'un autre registre car cela nécessiterait de la configuration supplémentaire 
pour l'authentification et droits d'accès (que je n'aborderai ici).

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

// fonction exécutée pour la vérifier certaines conditions pour la bonne création de la release
// par exemple le bon format de la configuration ou les tokens d'accès
export const verifyConditions = async (globalConfig: Config, context: VerifyConditionsContext) => {}

// fonction exécutée pour l'analyse des commits depuis la dernière release
export const analyzeCommits = async (globalConfig: Config, context: AnalyzeCommitsContext) => {}

// fonction exécutée pour vérifier la conformité de la release (on en a parlé plus haut)
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

---

### Alternatives

Finalement, on a beaucoup parlé de **semantic-release**, personnellement je trouve que 
c'est un très bon outil qui peut s'appliquer à différentes plateformes de gestion de version, 
mais n'existe-t-il pas d'autres outils similaires ?

Voici quelques outils alternatifs, qui sont de mon point de vue intéressant pour de l'*opensource*, 
en particulier pour **GitHub** en fonction de la stratégie de *releasing* souhaitée, 
mais qui conviennent moins à de l'usage en entreprise :

[**GH Release**](https://github.com/softprops/action-gh-release)

C'est une Action **GitHub** configurable qui se base principalement sur les *pull requests* réalisées 
depuis la dernière version publiée.

L'aspect intéressement concerne la génération des notes de *release* 
puisque l'outil peut se baser sur le fichier `.github/release.yml` qui est aussi le fichier par défaut 
qu'utilise **GitHub** pour générer les notes de *release* quand celle-ci est 
[créée à la main](https://docs.github.com/fr/repositories/releasing-projects-on-github/automatically-generated-release-notes).

Un autre point intéressant concerne la création d'une discussion **GitHub** (optionel) lors de la création 
de la *release* pour permettre aux utilisateurs de commenter / réagir aux changements.

[**Release Drafter**](https://github.com/release-drafter/release-drafter)

C'est aussi une Action **GitHub** (existait aussi en **GiHub** App mais celle-ci a été dépréciée), 
qui se base aussi sur les *pull requests* réalisées depuis la dernière version publiée.

À la différence de **GH Release**, la configuration est un peu plus malléable puisqu'elle n'utilise pas le fichier 
`.github/release.yml` mais un fichier spécifique pour **Release Drafter**.
Parmi les points plus malléables, on peut retrouver plus de customisation sur les notes de la *release*, 
une fonctionnalité que j'aime beaucoup, l'[*autolabeler*](https://github.com/release-drafter/release-drafter?tab=readme-ov-file#autolabeler), qui à partir de la configuration va mettre les bons labels 
automatiquement sur les *pull requests* ou encore la possibilité de préciser l'identifiant de *prerelease*.

[**Release Please**](https://github.com/googleapis/release-please)

À la différence de **GH Release** ou **Release Drafter**, cet outil se base, comme **semantic-release** 
sur les *commits* et les *conventional commits* pour déterminer la nouvelle version ainsi que les notes de *release*.

C'est à la base une *CLI* qui est déclinée en Action **GitHub**, dans tous les cas la *CLI* n'est pour le moment (octobre 2024) 
disponible uniquement que pour **GitHub**.

L'un des gros atout de cet outil est de passer par une *pull request* mise à jour 
au fur et à mesure des fusions réalisées dans la branche ciblée par la *release*.
Une fois la *pull request* principale fusionnée alors la *release* est créée au travers de l'action **GitHub**.
