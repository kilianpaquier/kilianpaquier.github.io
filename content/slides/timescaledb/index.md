---
date: 2024-10-16
description: Extension **PostgreSQL** pour de la volumétrie *time-series*
image: /slides/timescaledb/timescale-plain.svg
layout: bundle
logo:
  src: /slides/timescaledb/timescale-plain.svg
outputs: [ "Reveal" ]
title: TimescaleDB
---

#### TimescaleDB

---

#### Mais qu'est-ce que c'est ?

- Extension **PostgreSQL**
- Solution *Open Source* pouvant être déployée soi-même ou utilisée en mode *Cloud*
- Adapté à l'ingestion de données basées sur le temps (*time series*)
- Partitionne les données de manière transparente pour gagner en performances
- Intègre la possibilité de faire de l'aggrégation de données en continue
- Gère la compression et rétention des données

---

#### Qu'est-ce qu'un donnée basée sur le temps ?

- TBD

---

{{% section %}}

#### Comment partitionner les données ?

- Par la création d'une *hypertable*
- C'est simplement un table sur laquelle TimescaleDB se greffe
- Il est possible d'avoir une clé primaire ou des indexes uniques, 
  mais ceux-ci doivent forcément comprendre la clé de partition (`time` dans nos exemples)
- Une *hypertable* profite de toutes les fonctionnalités d'une table **PostgreSQL**

---

{{< figure src="/slides/timescaledb/hypertables-chunks.webp" class="text-center" width="600px" >}}

---

```sql
CREATE TABLE conditions (
  time        TIMESTAMPTZ       NOT NULL,
  location    TEXT              NOT NULL,
  device      TEXT              NOT NULL,
  temperature DOUBLE PRECISION  NULL,
  humidity    DOUBLE PRECISION  NULL
);

-- partitions de 7 jours (par défaut)
SELECT create_hypertable('conditions', 'time');
```

---

```sql
-- partitions de 1 jour
SELECT create_hypertable(
  'conditions', 
  'time',
  chunk_time_interval => INTERVAL '1 day'
);

-- possible d'éditer après-coup la durée des partitions
-- la nouvelle politique sera prise en compte 
-- pour les prochaines partitions créées
SELECT set_chunk_time_interval('conditions', INTERVAL '2 days');
```

{{% /section %}}

---

{{% section %}}

#### Compression, késako ?

- La compression est une politique pour compresser les données anciennes
- Une requête sur des données compressées demandera de décompresser la partition concernée
- La clé de compression `segmentby` est hyper importante pour décompresser un minimum de données lors de requêtes

```sql
-- définition de la politique de compression
ALTER TABLE conditions SET (
  timescaledb.compress, 
  timescaledb.compress_orderby = 'time DESC'
  timescaledb.compress_segmentby = 'location, device'
);
-- définition de l'ancienneté des données avant compression
SELECT add_compression_policy('conditions', INTERVAL '2 months')
```

Objectif principal : Gagner en espace sur la base de données en compressant les plus anciennes données qui sont pas / peu requêtées

---

#### Rétention, késako ?

- La rétention est une politique de suppression des anciennes données

```sql
-- définition de la durée de rétention
SELECT add_retention_policy('conditions', INTERVAL '6 months')
```

Objectif principal : Simplifier la gestion de la rétention des données

{{% /section %}}

---

{{% section %}}

#### De l'aggrégation, pourquoi faire ?

{{< figure src="/slides/timescaledb/pourquoi-faire.gif" class="text-center" width="300px" >}}

- Volumétrie important donc le requêtage sans aggrégation ou vue demande de *rescanner* l'*hypertable* principale
- Une vue matérialisée **PostgreSQL** est reconstruite à chaque rafraichissement
- Les aggrégations continues **timescale** peuvent profiter des politiques de compression

---

#### Aggrégation continue

TBD

---

#### Aggrégation en temps réel

TBD

---

#### Aggrégations continues d'aggrégations continues

TBD

{{% /section %}}

---

#### Quelles limitations ?

- Décompression obligatoire de toutes les partitions à l'ajout d'un champ obligatoire 
  ou avec une valeur par défaut
- Obligation de récréer une vue aggrégée si un changement de schéma doit être réalisé

---

#### Quelques bonnes pratiques d'utilisation ?

- Si vous créez un index avec une colonne `NULLABLE` alors préférez un `WHERE <column> IS NOT NULL`
- Dans le cas d'injection de données en masse, ne pas hésiter à utiliser la fonction `COPY` de **PostgreSQL** 
  (même si les conflits ne peuvent être gérés avec `COPY`)
- Dans le cas de suppressions de données manuellemen, ne pas hésiter à utiliser la fonction `drop_chunks` (avec partimonie bien sûr)

{{% note %}}

- Même si `COPY` ne gère pas les conflits, passer par une table temporaire 
  (existante que au sein de la transaction) ira toujours plus vite 
  (en déplaçant de la table temporaire à la table finale) que faire de l'insertion en masse 
  avec `INSERT` en gérant les conflits

{{% /note %}}

---

#### Dans quels cas je peux l'appliquer sur mon projet ?

- Applications orientées évènements (par exemple points de consommation)
- Internet des Objets (*IoT*) (données des capteurs)
- Supervisions environnementales (météo, température, humidité, pH, etc.)
- *Business Intelligence (BI)* (santée globale du *business*)
- Supervision de systèmes informatiques (CPU, machines virtuelles, métriques applicatives, etc.)

---

#### Quelles alternatives possibles ?

TBD