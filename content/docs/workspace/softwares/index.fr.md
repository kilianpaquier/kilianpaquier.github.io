---
categories: []
contributors: []
date: 2023-05-31
description: Installation de packages ou applications avec `winget` ou `apt` pour principalement développer mais aussi pour jouer.
icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-fill me-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/></svg>
layout:
tags: []
title: Logiciels
version:
weight: 10
---

Plusieurs *snippets* de logiciels intéressants à avoir sur le *host* windows. Bien sûr, ce n'est applicable que si vous utilisez un *host* windows.

#### Généraux

```ps1
winget install --id=7zip.7zip -e -i
winget install --id=Brave.Brave -e -i --scope Machine
winget install --id=Adobe.Acrobat.Reader.64-bit -e -i
winget install --id=Microsoft.Edge -e -i
winget install --id=Microsoft.PowerShell -e -i
winget install --id=Microsoft.WindowsTerminal -e -i
winget install --id=TheDocumentFoundation.LibreOffice -e -i
winget install --id=VideoLAN.VLC -e -i
winget install --id Microsoft.PowerToys -e
```

#### Pour bien développer

```ps1
winget install --id=dbeaver.dbeaver -e -i --scope Machine
winget install --id=Git.Git -e -i
winget install --id=GnuPG.GnuPG -e -i
winget install --id=Microsoft.VisualStudioCode -e -i --scope Machine
winget install --id=PuTTY.PuTTY -e -i
```

#### Pour jouer

```ps1
winget install --id=Discord.Discord -e -i
winget install --id=EpicGames.EpicGamesLauncher -e -i
winget install --id=Ubisoft.Connect -e -i --ignore-security-hash
winget install --id=Valve.Steam -e -i
```

#### En complément

```ps1
winget install --id=Apple.iTunes -e -i
winget install --id=Deezer.Deezer -e -i
winget install --id=Microsoft.DotNet.DesktopRuntime.6 -e -i
winget install --id=Microsoft.DotNet.DesktopRuntime.7 -e -i --architecture x86
winget install --id=Microsoft.DotNet.DesktopRuntime.7 -e -i --architecture x64
winget install --id=WeMod.WeMod -e -i
winget install --id=Yubico.YubikeyManager -e -i
```

#### Linux

```sh
echo 'deb [trusted=yes] https://repo.goreleaser.com/apt/ /' | sudo tee /etc/apt/sources.list.d/goreleaser.list
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg python3-pip file wget openjdk-17-jdk maven jq redis-server git software-properties-common socat vim tree man gettext shc goreleaser

sudo apt-get remove nano
sudo apt-get autoremove
```