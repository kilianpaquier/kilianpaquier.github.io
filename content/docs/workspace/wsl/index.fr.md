---
categories: []
contributors: []
date: 2023-05-31
description: Configuration d'un sous-système Linux basé sur Debian.
icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ubuntu me-2" viewBox="0 0 16 16"><path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546ZM7.4 13.108a5.535 5.535 0 0 1-3.775-2.88 3.273 3.273 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.253 3.253 0 0 1-.666-1.9 5.639 5.639 0 0 1-.557-.091Zm3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546Zm3.163-3.108a7.436 7.436 0 0 0 .373-8.726 3.276 3.276 0 0 1-1.278 1.498 5.573 5.573 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693ZM2.098 3.998a3.28 3.28 0 0 1 1.897.486 5.544 5.544 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.472 7.472 0 0 0-7.051 3.745Z"/></svg>
layout:
tags: []
title: WSL
version:
weight: 25
---

#### Fonctionnalités windows

Pour travailler avec WSL2, il est nécessaire d'activer à minima les deux fonctionnalités optionnelles suivantes :

```ps1
DISM /Online /Enable-Feature /All /Norestart /FeatureName:Microsoft-Windows-Subsystem-Linux
DISM /Online /Enable-Feature /All /Norestart /FeatureName:VirtualMachinePlatform
```

Suite à cela pensez à **redémarrer** votre ordinateur avant de continuer sur la documentation.

#### Configuration du sous-système

Pour palier à une *known issue* de WSL2 concernant l'utilisation mémoire qui peut parfois partir en cacaouette, il est possible de copier la configuration suivante :
```sh
cat << EOF > ${USERPROFILE}/.wslconfig
[wsl2]
guiApplications = false
memory = 4096MB
processors = 2
EOF
```

#### Tips

Petit tips, pensez aussi à installer la mise à jour du *kernel* WSL ainsi que le *vpnkit* pour palier aux problèmes de connection dans le sous-système :
```sh
wsl --update
yait install wsl-kernel wsl-vpnkit
```

Dans le `bashrc` des sous-systèmes, ajoutez ces lignes pour démarrer le service *wsl-vpnkit* au démarrage d'un terminal.

```sh
VPNKIT_RUNNING=$(wsl.exe -d wsl-vpnkit --cd /app ps aux | grep wsl-vpnkit | grep -v grep)
if [ -z "${VPNKIT_RUNNING}" ]; then
  wsl.exe -d wsl-vpnkit --cd /app service wsl-vpnkit start
fi
```