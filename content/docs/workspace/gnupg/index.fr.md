---
categories: []
contributors: []
date: 2023-05-31
description: Configuration d'un pont pour les agents SSH et GPG entre WSL et le host Windows pour la signature des commits.
icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock me-2" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/></svg>
layout:
tags: []
title: GnuPG
version:
weight: 30
---

Concernant la signature des commits git (en particulier), j'utilise un pont entre le *host* windows et le sous-système linux pour les agents SSH et GPG.

#### Windows

```sh
mkdir -p "${USERPROFILE}/.bridge"

curl -L "https://github.com/BlackReloaded/wsl2-ssh-pageant/releases/latest/download/wsl2-ssh-pageant.exe" -o "${USERPROFILE}/.bridge/wsl2-ssh-pageant.exe"

mkdir -p "${APPDATA}/gnupg"
echo use-agent > "${APPDATA}/gnupg/gpg.conf"
cat << EOF > "${APPDATA}/gnupg/gpg-agent.conf"
default-cache-ttl 600
enable-putty-support
enable-ssh-support
max-cache-ttl 7200
use-standard-socket
EOF
```

On va aussi configurer l'agent GPG pour qu'il démarre à l'ouverture de la session utilisateur :
```ps1
if (!$(Get-ScheduledTask -TaskName "Start GnuPG")) {
    $user = [System.Security.Principal.WindowsIdentity]::GetCurrent()
    $reload = New-ScheduledTaskAction -Execute "gpg-connect-agent.exe" -Argument "reloadagent /bye"
    
    $sessionTrigger = New-ScheduledTaskTrigger -AtLogOn

    $settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -DontStopOnIdleEnd
    Register-ScheduledTask -TaskName "Start GnuPG" -Description "Starts GnuPG agent" `
        -Trigger $sessionTrigger `
        -User $user.Name `
        -Action $reload `
        -Settings $settings
}
```

Si vous avez une carte à puce ou clé de sécurité configurable, pensez bien à installer *PuTTY* et à exécuter la commande suivante (après avoir branché la carte ou clé à l'ordinateur) :
```ps1
gpg --card-status > $null
if ($?) {
    plink -agent -v git@github.com
    plink -agent -v git@gitlab.com
}
```

On va aussi en profiter pour mettre à jour la configuration de signature des commits dans git :
```sh
git config --global commit.gpgsign true
git config --global gpg.program "C:\Program Files (x86)\GnuPG\bin\gpg.exe"
git config --global core.sshcommand "plink -agent"
```

#### Linux

Pour démarrer et éviter au sous-système d'utiliser ses propres agents SSH et GPG, {{< link "/static/docs/wsl.sh" >}}ici{{< /link >}} un script `sh` à `sourcer` dans le `bashrc` (au démarrager du terminal donc).