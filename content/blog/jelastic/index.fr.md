---
categories: []
container:
contributors: []
date: 2023-05-02
description: PaaS (Platform as a Service) proposant le déploiement automatisé de différents applicatifs et clusters. Je vous en dis plus dans cet article!
icons:
    - value: /devicon/jelastic-original.svg
image:
layout:
layout:
tags: []
title: Jelastic
version:
---

### Présentation

Jelastic est avant tout une entreprise rachetée courant 2021 par [Virtuozzo](https://www.virtuozzo.com/). L'entreprise initiale (et encore aujourd'hui) propose une *Platform As A Service* (PaaS) nommée Jelastic.

La plateforme est disponible auprès de différents fournisseurs comme [Infomaniak](https://www.infomaniak.com/fr/hebergement/serveurs-dedies-et-cloud/jelastic-cloud) (utilisé dans le cadre de cette petite exploration) ou [Digital Ocean](https://marketplace.digitalocean.com/apps/jelastic-paas).

La plateforme propose le déploiement automatique d'applicatifs, sur la base de diverses technologies (Node.js, Golang, Java, PHP, Ruby) mais aussi le déploiement de clusters (Kubernetes, Docker, Redis) et autres outils plus spécifiques (Grafana, Jira, Wordpress, Mattermost, etc.).

### Prise en main

La plateforme se présente telle que ci-dessous :

{{< figure src="/blog/jelastic/ihm.png" caption="Interface Jelastic" class="text-center" >}}

NB: Il est possible de grouper les environnements.

Dans un environnement Jelastic, on peut retrouver plusieurs *layers* :
- Le *load balancer*: réparti les requêtes entrantes et obtenir une charge uniforme sur tous les noeuds.
- Le serveur applicatif.
- Les bases de données (SQL et NoSQL).
- Le cache: système de cache mémoire objet pour les bases de données.
- Le stockage partagé: pour partager des fichiers entre les *layers*.
- Un VPS (*Virtual Private Server*).
- Un *builder* (pour du déploiement Java): s'occupe du build de l'applicatif Java.
- Des *extra*: des *layers* additionnels qui peuvent être de tous les types énumérés précédemment. 

{{< figure src="/blog/jelastic/environment.png" caption="Création d'un environnement" class="text-center" >}}

En complément, il est possible de configurer le SSL de manière assez simple. Le SSL utilisé peut-être personnalisé ou par défaut (certificat de confiance par défaut).

### Point d'intérêts

**Redimensionnement**: Comme vous avez pu le constater sur la figure de création d'un environnement, chaque *layer* peut-être configuré pour prendre en charge le redimensionnement, celui-ci peut être horizontal (augmentation et diminution du nombre de noeuds) comme vertical (augmentation et diminution de la RAM et CPU).