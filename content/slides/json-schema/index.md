---
date: 2024-10-27
description: JSON Schema démystifié
image: 
  src: /devicon/jsonschema-original.svg
  height: 200px
layout: bundle
logo:
  src: /devicon/jsonschema-original.svg
outputs: [ "Reveal" ]
title: JSON Schema
---

#### JSON Schema

---

#### À quoi ça sert ?

- Valider différents fichiers (`yaml`, `json`, `toml`, etc.)
- Apporter des contraintes sur les champs (type, valeurs possibles, dependances)

---

#### Quels cas d'utilisation aujourd'hui ?

- Fichiers des ressources **kubernetes**
- Fichiers de configuration (**renovate**, **hugo**, **dependabot**)
- Fichiers de *CI* (**GitHub** Actions, **GitLab** CI/CD)

---

{{% section %}}

#### Comment ça marche ?

{{< figure src="/slides/json-schema/spinning-top.gif" width="350px" >}}

- Un fichier `json` avec un schéma spécifique
- S'applique particulièrement avec les *IDE* (*integrated development environment*)
- Configuration supplémentaire nécessaire si non exporté sur [**schemastore**](https://github.com/SchemaStore/schemastore)

---

##### Schéma simple

```json
{
  "$id": "https://example.com/path/to/schemas/folder/filename.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Schema title",
  "description": "Schema description",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "name": { "description": "field description", "type": "string" },
    "some_enum": { "type": "string", "enum": [ "value1", "value2" ] }
  },
  "required": []
}
```

---

##### Référence à d'autres schémas

```json
{
  "$id": "https://example.com/path/to/schemas/folder/filename.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Schema title",
  "description": "Schema description",
  "type": "object",
  "$defs": { "sub_object": { ... } },
  "properties": {
    "name": { "$ref": "https://example.com/filename.json#/path/to/name" },
    "sub_object": { "$ref": "#/$defs/sub_object" }
  },
  "required": []
}
```

---

##### Conditions

```json
{
  "$id": "https://example.com/path/to/schemas/folder/filename.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Schema title",
  "description": "Schema description",
  "type": "object",
  "additionalProperties": false,
  "$defs": { "sub_object": { ... } },
  "properties": {
    "name": { "description": "field description", "type": "string" },
    "sub_object": { "$ref": "#/$defs/sub_object" }
  },
  "required": [ "name" ]
}
```

{{% /section %}}

---

#### Quelques ressources utiles ?

- Le [*Tour of JSON Schema*](https://tour.json-schema.org/)
- Créer son [premier schéma](https://json-schema.org/learn/getting-started-step-by-step)