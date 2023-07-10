---
categories: []
contributors: []
date: 2023-05-31
description: Téléchargement d'un outil complémentaire pour installer des packages non disponibles via les packages manager natifs des OS.
icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code me-2" viewBox="0 0 16 16"><path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/></svg>
layout:
tags: []
title: Yait
version:
weight: 15
---

Petit outil développé sur mesure pour installer des logiciels complémentaires non disponibles avec les *package manager* courants (*apt*, *winget*, etc.), voici un petit script pour l'installer :

#### Windows

```ps1
iwr -Uri "https://gitlab.com/api/v4/projects/43559830/releases/permalink/latest/downloads/yait_windows_amd64.zip" -OutFile "$env:temp\yait.zip"
Expand-Archive -Force -Path "$env:temp\yait.zip" -DestinationPath "$env:userprofile\bin\yait"
copy -Path "$env:userprofile\bin\yait\yait.exe" -Destination "$env:userprofile\bin\yait.exe"
if ([Environment]::GetEnvironmentVariable("Path", "User") -split ";" -notcontains "$env:userprofile\bin") {
    [Environment]::SetEnvironmentVariable("Path", [Environment]::GetEnvironmentVariable("Path", "User") + ";$env:userprofile\bin", "User")
}
```

De fait, j'installe les logiciels complémentaires suivants pour gérer le chiffrement de mes disques durs et mes clés de sécurité : 
```sh
yait install yubico-piv-tool yubikey-minidriver veracrypt
```

#### Linux

```sh
curl -L "https://gitlab.com/api/v4/projects/43559830/releases/permalink/latest/downloads/yait_linux_amd64.deb" -o /tmp/yait.deb
sudo apt-get install /tmp/yait.deb
```

Sur mon sous-système linux, qui met sert à développer, j'installe les logiciels suivants avec *yait* : 
```sh
yait install shellcheck dive docker golang golangci-lint go-swagger helm kubectl liquibase node-lts psql yarn
```