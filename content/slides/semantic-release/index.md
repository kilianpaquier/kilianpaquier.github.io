---
date: 2024-09-15
description: L'un des meilleurs outils *Open Source* pour faire du *versioning* git ?
image: 
  src: /devicon/semanticrelease-original.svg
  height: 200px
layout: bundle
logo:
  src: /devicon/semanticrelease-original.svg
outputs: [ "Reveal" ]
title: 📦🚀 Semantic Release
---

#### Semantic Release

---

#### Qu'est-ce donc ?

- Produit *Open Source* pour gérer le *versioning* avec git
- Publie des *tags* **git** à partir des *commits*
- Développé en **JavaScript**
- Processus de publication en plusieurs étapes
- Extensible avec des *plugins*
- Configurable avec la *CLI* (*Command Line Interface*)
- Configurable avec un fichier (`.releaserc` au format `.yaml`, `.json` ou `.js`)

---

#### Comment calculer une version ?

Basé sur du [*Semantic Versioning*](https://semver.org/) (ou *semver*), 
[spécification](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions) (assez complète) pour le nommage de version.
Quelques exemples :

- `1.0.0`
- `12.16.1788`
- `1.0.0-beta.1`
- `1.0.0+702c7fcc879cf8cd0401e70fc083386e07ff0a35`
- `1.0.0+702c7fcc879`
- `1.0.0-dev.702c7fcc879`

Commun en supplément d'ajouter le préfixe "v" aux versions, 
l'option `tagFormat` permet de paramétrer plus précisement le format du *tag* créé.

---

{{% section %}}

#### Quel est le processus de publication ?

- *Verify Conditions* : Vérification de certaines conditions (*tokens* d'accès par exemple)
- *Get last release* : Récupération des *commits* réalisés depuis la dernière version
- *Analyze commits* : Détermination de la nouvelle version (*prerelease*, *patch*, mineur, majeur, next, etc.)
- *Verify release* : Etape libre pour les extensions afin de déterminer la conformité de la *release*

---

- *Generate notes* : Génération des notes de la *release* (titre du *commit*, notes supplémentaires, organisation en section)
- *Create git tag* : Création du *tag* **git**
- *Prepare* : Préparation de la *release*
- *Publish* : Publication de la *release*
- *Notify* : Notification du succès ou de l'échec de la *release*

{{% /section %}}

---

#### Comment configurer l'outil ?

- `--extends`
- `--branches`
- `--tagFormat`
- `--plugins`
- `--repositoryUrl`
- `--dry-run`
- `--ci` / `--no-ci`
- `--debug`

---

{{% section %}}

#### En quoi consiste la configuration des branches ?

- Préciser quelles branches peuvent être publiées
- Préciser si une branche spécifique est dite de *prerelease* et son identifiant de *prerelease*

---

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
  # le *tag* créé sera de la forme 1.12.5-beta.X
  - { name: "beta", prerelease: true }
  # la branche nommée "staging" est catégorisée en *prerelease*
  # le *tag* créé sera de la forme 1.12.5-beta.X
  - { name: "staging", prerelease: "beta" }
```

{{% /section %}}

---

{{% section %}}

#### A quoi servent les extensions ?

Par défaut, **semantic-release** ne gère que la création du *tag* **git** et force la présence d'au moins une extension pour l'analyse des *commits*.

Quelques comportements pouvant être ajoutés par les extensions :

- La création de notes de version (qui pourraient être intégrées à une page de *release*)
- La création d'une *release* **GitHub**, **GitLab** ou **Gitea**
- La publication d'un *package* npm, ou maven sur un registre
- La publication d'une image Docker sur un registre
- La fusion de la branche publiée dans une autre branche

---

- [**@semantic-release/commit-analyzer**](https://github.com/semantic-release/commit-analyzer) :
  - Analyse les *commits* réalisés depuis la dernière version et détermine la nouvelle version
- [**@semantic-release/release-notes-generator**](https://github.com/semantic-release/release-notes-generator) :
  - Crée les notes de la *release* organisées en sections à partir de la liste des *commits* de la nouvelle version
- [**@semantic-release/npm**](https://github.com/semantic-release/npm) :
  - Incrémente la version présente dans le `package.json` avec la nouvelle version (attention ce n'est pas poussé sur le dépôt **git**)
  - Publie le *package* npm sur un registre approprié (par défaut [npmjs.org](https://npmjs.org)) si besoin
- [**@semantic-release/github**](https://github.com/semantic-release/github) :
  - Crée la *release* **GitHub** et notifie les *pull requests* / *issues* que ces sujets ont été publiés

---

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

{{% /section %}}

---

##### Quel résultat cela peut donner ?

{{< figure src="/blog/semantic-release/semantic-release.webp" width="600px" >}}

---

##### Comment développer une extension ?

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

---

##### Existe-t-il des alternatives ?

- [**gh-release**](https://github.com/softprops/action-gh-release)
- [**release-drafter**](https://github.com/release-drafter/release-drafter)
- [**release-please**](https://github.com/googleapis/release-please)
