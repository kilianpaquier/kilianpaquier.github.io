---
date: 2024-09-15
description: One of the best open source tools for git versioning ?
image: /slides/semantic-release/semantic-release-logo.svg
layout: bundle
logo:
  src: /slides/semantic-release/semantic-release-logo.svg
outputs: [ "Reveal" ]
title: 📦🚀 Semantic Release
---

#### Semantic Release

<!-- no toc -->
- [What could it be ?](#1)
- [Semantic Versioning](#2)
- [Execution steps](#3)
- [Customization](#4)
- [Branches](#5)
- [Plugins](#6)
- [Alternatives](#7)

---

##### What could it be ?

- Open Source product to handle git versioning
- Create releases from commits
- Developped with javascript
- Working with 9 execution steps
- Expandable with a plugin system
- Customizable with the CLI (Command Line Interface)
- Customizable with a file (`.releaserc` with `.yaml`, `.json` or `.js` formats)

---

##### Semantic Versioning

Also named [semver](https://semver.org/), it is a specification for version naming.
Complete specification [here](https://semver.org/#backusnaur-form-grammar-for-valid-semver-versions) but some examples:

- `1.0.0`
- `12.16.1788`
- `1.0.0-beta.1`
- `1.0.0+702c7fcc879cf8cd0401e70fc083386e07ff0a35`
- `1.0.0+702c7fcc879`
- `1.0.0-dev.702c7fcc879`

It's common to add a "v" prefix to git tags and versions, that is in part why **semantic-release** offer a customization property for that.

---

{{% section %}}

##### Execution steps

- Verify Conditions:
  - Verification of certain conditions (like access tokens for instance)
- Get last release:
  - Collect of previous release commits and version number
- Analyze commits:
  - Next release computing (prelease, patch, minor, major, next, etc.)
- Verify release:
  - Free step for plugins to ensure that the release to be made is "compliant"

---

- Generate notes: Release notes generation
  - Appear in release page (depending on whether this notion exists in git platform)
  - Appear in `CHANGELOG.md` file
- Create git tag: Git tag creation
- Prepare: Release preparation
  - Free step for plugins to prepare for *publish* step
- Publish: Release publishing
- Notify: Release success or failure notification

{{% /section %}}

---

##### Customization

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

Handles globs with [micromatch](https://github.com/micromatch/micromatch?tab=readme-ov-file#matching-features)

```yaml
branches:
  # 1.12.x, 1.x
  - +([0-9])?(.{+([0-9]),x}).x
  - master
  - main
  - next
  - next-major
  # branch named "beta" is categorized as prerelease
  # resulting tag would be 1.12.5-beta.X
  - { name: "beta", prerelease: true }
  # branch named "staging" is categorized as prerelease
  # resulting tag would be 1.12.5-beta.X
  - { name: "staging", prerelease: "beta" }
```

---

{{% section %}}

##### Plugins

---

###### By default

- [**@semantic-release/commit-analyzer**](https://github.com/semantic-release/commit-analyzer):
  - Commits analysis
  - Commits categorization to determine next release version
- [**@semantic-release/release-notes-generator**](https://github.com/semantic-release/release-notes-generator):
  - Release notes creation organized in sections based on commits categorization
- [**@semantic-release/npm**](https://github.com/semantic-release/npm):
  - Package creation and upload into npm registry ([npmjs.org](https://npmjs.org) by default)
  - Version bump in `package.json` file (but doesn't commit)
- [**@semantic-release/github**](https://github.com/semantic-release/github):
  - Release creation for GitHub and pull requests / issues notification

---

###### Others

- [**@semantic-release/changelog**](https://github.com/semantic-release/changelog):
  - Update of `CHANGELOG.md` file new release notes
- [**@semantic-release/exec**](https://github.com/semantic-release/exec):
  - Shell scripts execution during release steps
- [**@semantic-release/git**](https://github.com/semantic-release/git):
  - Add one commit to the released branch

---

###### Examples

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

Real case example [here](https://github.com/semantic-release/semantic-release/releases/tag/v24.0.0).

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

###### Open Source

- Releases creation for GitHub, GitLab and Gitea
- Version bump in `pom.xml` and package deployment
- Date update in `LICENSE` file
- Released branche backmerge into one or multiple branches
- Docker image upload to a registry

---

##### Plugin development

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
