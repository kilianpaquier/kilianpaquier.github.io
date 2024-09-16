---
date: 2024-09-15
description: L'un des meilleurs outils *open source* pour faire du *versioning* git ?
image: /slides/semantic-release/semantic-release-logo.svg
layout: bundle
logo:
  src: /slides/semantic-release/semantic-release-logo.svg
outputs: [ "Reveal" ]
title: 📦🚀 Semantic Release
---

#### Semantic Release

<!-- no toc -->
- [Qu'est-ce donc ?](#1)
- [*Semantic Versioning*](#2)
- [Etapes d'exécution](#3)
- [Configuration](#4)
- [Branches](#5)
- [Extensions](#6)
- [Alternatives](#7)

---

##### Qu'est-ce donc ?

- Produit *Open Source* pour gérer le *versioning* avec git
- Créer les *releases* à partir des commits
- Développé en javascript
- Fonctionnant en 9 étapes séparées
- Extensible avec des *plugins*
- Configurable avec la *CLI* (*Command Line Interface*)
- Configurable avec un fichier (`.releaserc` au format `.yaml`, `.json` ou `.js`)

---

##### *Semantic Versioning*

Aussi nommé [*semver*](https://semver.org/), c'est une spécification pour le nommage des versions.
Format assez complet [ici](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions) mais voici quelques exemples :

- `1.0.0`
- `12.16.1788`
- `1.0.0-beta.1`
- `1.0.0+702c7fcc879cf8cd0401e70fc083386e07ff0a35`
- `1.0.0+702c7fcc879`
- `1.0.0-dev.702c7fcc879`

Il est commun en supplément d'ajouter le préfixe "v" aux versions, c'est d'ailleurs pour cela que **semantic-release** propose une option de configuration spécifique pour ça.

---

{{% section %}}

##### Étapes d'exécution

- *Verify Conditions* :
  - Vérification de certaines conditions (*tokens* d'accès par exemple)
- *Get last release* :
  - Récupération des *commits* réalisés depuis la dernière *release*
- *Analyze commits* :
  - Détermination du type de *release* (*prerelease*, *patch*, mineur, majeur, next, etc.)
- *Verify release* :
  - Sans doute une étape libre pour les extensions afin de s'assurer que la *release* est conforme

---

- *Generate notes* : Génération des notes de la *release*
  - Apparaîssent dans la page de la *release* (si cette notion existe sur la plateforme git utilisée)
  - Apparaîssent dans le fichier `CHANGELOG.md`
- *Create git tag* : Création du *tag* git
- *Prepare* : Préparation de la *release*
  - Sans doute une étape libre pour les extensions afin de préparation l'étape de *publish*
- *Publish* : Publication de la *release*
- *Notify* : Notification du succès ou de l'échec de la *release*

{{% /section %}}

---

##### Configuration

- `--extends`
- `--branches`
- `--tagFormat`
- `--plugins`
- `--repositoryUrl`
- `--dry-run`
- `--ci` / `--no-ci`
- `--debug`

---

##### Branches

Gère les globs [micromatch](https://github.com/micromatch/micromatch?tab=readme-ov-file#matching-features)

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
  - { name: "beta", prerelease: true }
  # la branche nommée "staging" est catégorisée en *prerelease*
  # le *tag* créé sera donc 1.12.5-beta.X
  - { name: "staging", prerelease: "beta" }
```

---

{{% section %}}

##### Extensions

---

###### Par défaut

- [**@semantic-release/commit-analyzer**](https://github.com/semantic-release/commit-analyzer) :
  - Analyse des *commits*
  - Catégorisation des *commits* pour déterminer le type de la prochaine *release*
- [**@semantic-release/release-notes-generator**](https://github.com/semantic-release/release-notes-generator) :
  - Création des notes de la *release* organisées en sections
- [**@semantic-release/npm**](https://github.com/semantic-release/npm) :
  - Création du *package* sur un registre npm (par défaut [npmjs.org](https://npmjs.org))
  - Incrémentation de la version dans le `package.json` (non poussé)
- [**@semantic-release/github**](https://github.com/semantic-release/github) :
  - Création de *release* **GitHub** et notification sur les *pull requests* / *issues*

---

###### Autres

- [**@semantic-release/changelog**](https://github.com/semantic-release/changelog) :
  - Création / mise à jour du fichier `CHANGELOG.md` avec les notes de *release*
- [**@semantic-release/exec**](https://github.com/semantic-release/exec) :
  - Exécution de scripts shell / des commandes shell lors des étapes d'une *release*
- [**@semantic-release/git**](https://github.com/semantic-release/git) :
  - Ajout d'un *commit* à la branche publiée

---

###### Exemples

```yaml
plugins:
  - - "@semantic-release/commit-analyzer"
    - preset: conventionalcommits
      releaseRules:
        - { breaking: true, release: "major" }
        - { revert: true, release: "patch" }
        - { type: "feat", release: "minor" }
        - { type: "fix", release: "patch" }
        - { type: "revert", release: "patch" }
        - { type: "docs", release: "patch" }
        - { type: "refactor", release: "minor" }
        - { scope: "release", release: false }
      parserOpts:
        noteKeywords: [ "BREAKING CHANGES", "BREAKING" ]
```

---

```yaml
plugins:
  - - "@semantic-release/release-notes-generator"
    - preset: conventionalcommits
      presetConfig:
        types:
          - { type: "feat", section: "Features" }
          - { type: "fix", section: "Bug Fixes" }
          - { type: "revert", section: "Reverts" }
          - { type: "docs", section: "Documentation" }
          - { type: "refactor", section: "Code Refactoring" }
          - { type: "test", section: "Tests", hidden: true }
      parserOpts:
        noteKeywords: [ "BREAKING CHANGES", "BREAKING" ]
```

Exemple de ce que ça donne [ici](https://github.com/semantic-release/semantic-release/releases/tag/v24.0.0).

---

```yaml
plugins:
  - "@semantic-release/changelog"
  - "semantic-release-license"
  - - "@semantic-release/git"
    - assets: [ "CHANGELOG.md", "LICENSE" ]
      message: "chore(release): v${nextRelease.version} [skip ci]"
  - - "@semantic-release/github"
    - assets:
        - { path: "CHANGELOG.md", label: "CHANGELOG.md" }
        - path: "checksums.txt"
        - path: "dist"
      failComment: false
      failTitle: false
      successComment: 🎉 Resolved in ${nextRelease.version} 🎉
```

---

###### *Open Source*

- Création de *releases* **GitHub**, **GitLab** et **Gitea**
- Incrémentation de la version dans le `pom.xml` pour maven et déploiement du *package*
- Mise à jour de la date dans le fichier `LICENSE`
- *Backmerge* de la branche publiée avec une ou plusieurs branches
- Chargement d'un image docker sur un registre

---

##### Développer une extension

```ts
export interface Config {
    dryRun: boolean
    repositoryUrl: string
    [k: string]: any
}
export const verifyConditions = async (Config, VerifyConditionsContext)
export const analyzeCommits = async (Config, AnalyzeCommitsContext)
export const verifyRelease = async (Config, VerifyReleaseContext)
export const generateNotes = async (Config, GenerateNotesContext)
export const addChannel = async (Config, AddChannelContext)
export const prepare = async (Config, PrepareContext)
export const publish = async (Config, PublishContext)
export const success = async (Config, SuccessContext)
export const fail = async (Config, FailContext)
```

{{% /section %}}

---

##### Alternatives

- [**GH Release**](https://github.com/softprops/action-gh-release)
- [**Release Drafter**](https://github.com/release-drafter/release-drafter)
- [**Release it**](https://github.com/release-it/release-it)
- [**Release Please**](https://github.com/googleapis/release-please)
