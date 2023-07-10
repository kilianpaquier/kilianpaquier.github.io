#!/bin/sh

listen_socket() {
  wsl2_ssh_pageant_bin="/mnt/c/Users/${USER}/.bridge/wsl2-ssh-pageant.exe"

  sock_path="$1" && shift
  fork_args="${sock_path},fork"
  # shellcheck disable=SC2124
  exec_args="${wsl2_ssh_pageant_bin} $@"

  if test -x "${wsl2_ssh_pageant_bin}"; then
    (setsid nohup socat UNIX-LISTEN:"${fork_args}" EXEC:"${exec_args}" >/dev/null 2>&1 &)
  else
    echo >&2 "WARNING: ${wsl2_ssh_pageant_bin} is not executable."
  fi
}

# SSH Socket
# Removing Linux SSH socket and replacing it by link to wsl2-ssh-pageant socket
export SSH_AUTH_SOCK="${HOME}/.ssh/agent.sock"
if ! ss -a | grep -q "${SSH_AUTH_SOCK}"; then
  rm -f "${SSH_AUTH_SOCK}"
  listen_socket "${SSH_AUTH_SOCK}"
fi

# GPG Socket
# Removing Linux GPG Agent socket and replacing it by link to wsl2-ssh-pageant GPG socket
export GPG_AGENT_SOCK="${HOME}/.gnupg/S.gpg-agent"
if ! ss -a | grep -q "${GPG_AGENT_SOCK}"; then
  rm -rf "${GPG_AGENT_SOCK}"
  listen_socket "${GPG_AGENT_SOCK}" --gpgConfigBasepath "C\:/Users/${USER}/AppData/Local/gnupg" --gpg S.gpg-agent
fi
