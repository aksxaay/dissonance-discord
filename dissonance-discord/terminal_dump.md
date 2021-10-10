(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ nvm

Node Version Manager (v0.38.0)

Note: <version> refers to any version-like string nvm understands. This includes:
  - full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
  - default (built-in) aliases: node, stable, unstable, iojs, system
  - custom aliases you define with `nvm alias foo`

 Any options that produce colorized output should respect the `--no-colors` option.

Usage:
  nvm --help                                  Show this message
    --no-colors                               Suppress colored output
  nvm --version                               Print out the installed version of nvm
  nvm install [<version>]                     Download and install a <version>. Uses .nvmrc if available and version is omitted.
   The following optional arguments, if provided, must appear directly after `nvm install`:
    -s                                        Skip binary download, install from source only.
    -b                                        Skip source download, install from binary only.
    --reinstall-packages-from=<version>       When installing, reinstall packages installed in <node|iojs|node version number>
    --lts                                     When installing, only select from LTS (long-term support) versions
    --lts=<LTS name>                          When installing, only select from versions for a specific LTS line
    --skip-default-packages                   When installing, skip the default-packages file if it exists
    --latest-npm                              After installing, attempt to upgrade to the latest working npm on the given node version
    --no-progress                             Disable the progress bar on any downloads
    --alias=<name>                            After installing, set the alias specified to the version specified. (same as: nvm alias <name> <version>)
    --default                                 After installing, set default alias to the version specified. (same as: nvm alias default <version>)
  nvm uninstall <version>                     Uninstall a version
  nvm uninstall --lts                         Uninstall using automatic LTS (long-term support) alias `lts/*`, if available.
  nvm uninstall --lts=<LTS name>              Uninstall using automatic alias for provided LTS line, if available.
  nvm use [<version>]                         Modify PATH to use <version>. Uses .nvmrc if available and version is omitted.
   The following optional arguments, if provided, must appear directly after `nvm use`:
    --silent                                  Silences stdout/stderr output
    --lts                                     Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                          Uses automatic alias for provided LTS line, if available.
  nvm exec [<version>] [<command>]            Run <command> on <version>. Uses .nvmrc if available and version is omitted.
   The following optional arguments, if provided, must appear directly after `nvm exec`:
    --silent                                  Silences stdout/stderr output
    --lts                                     Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                          Uses automatic alias for provided LTS line, if available.
  nvm run [<version>] [<args>]                Run `node` on <version> with <args> as arguments. Uses .nvmrc if available and version is omitted.
   The following optional arguments, if provided, must appear directly after `nvm run`:
    --silent                                  Silences stdout/stderr output
    --lts                                     Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                          Uses automatic alias for provided LTS line, if available.
  nvm current                                 Display currently activated version of Node
  nvm ls [<version>]                          List installed versions, matching a given <version> if provided
    --no-colors                               Suppress colored output
    --no-alias                                Suppress `nvm alias` output
  nvm ls-remote [<version>]                   List remote versions available for install, matching a given <version> if provided
    --lts                                     When listing, only show LTS (long-term support) versions
    --lts=<LTS name>                          When listing, only show versions for a specific LTS line
    --no-colors                               Suppress colored output
  nvm version <version>                       Resolve the given description to a single local version
  nvm version-remote <version>                Resolve the given description to a single remote version
    --lts                                     When listing, only select from LTS (long-term support) versions
    --lts=<LTS name>                          When listing, only select from versions for a specific LTS line
  nvm deactivate                              Undo effects of `nvm` on current shell
    --silent                                  Silences stdout/stderr output
  nvm alias [<pattern>]                       Show all aliases beginning with <pattern>
    --no-colors                               Suppress colored output
  nvm alias <name> <version>                  Set an alias named <name> pointing to <version>
  nvm unalias <name>                          Deletes the alias named <name>
  nvm install-latest-npm                      Attempt to upgrade to the latest working `npm` on the current node version
  nvm reinstall-packages <version>            Reinstall global `npm` packages contained in <version> to current version
  nvm unload                                  Unload `nvm` from shell
  nvm which [current | <version>]             Display path to installed node version. Uses .nvmrc if available and version is omitted.
    --silent                                  Silences stdout/stderr output when a version is omitted
  nvm cache dir                               Display path to the cache directory for nvm
  nvm cache clear                             Empty cache directory for nvm
  nvm set-colors [<color codes>]              Set five text colors using format "yMeBg". Available when supported.
                                               Initial colors are:
                                                   g  b  y  r  e
                                               Color codes:
                                                 r/R = red / bold red
                                                 g/G = green / bold green
                                                 b/B = blue / bold blue
                                                 c/C = cyan / bold cyan
                                                 m/M = magenta / bold magenta
                                                 y/Y = yellow / bold yellow
                                                 k/K = black / bold black
                                                 e/W = light grey / white

Example:
  nvm install 8.0.0                     Install a specific version number
  nvm use 8.0                           Use the latest available 8.0.x release
  nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
  nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
  nvm alias default 8.1.0               Set default node version on a shell
  nvm alias default node                Always default to the latest available node version on a shell

(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ nvm ls-remote
        
       v10.13.0   (LTS: Dubnium)
       v10.14.0   (LTS: Dubnium)
       v10.14.1   (LTS: Dubnium)
       v10.14.2   (LTS: Dubnium)
       v10.15.0   (LTS: Dubnium)
       v10.15.1   (LTS: Dubnium)
       v10.15.2   (LTS: Dubnium)
       v10.15.3   (LTS: Dubnium)
       v10.16.0   (LTS: Dubnium)
       v10.16.1   (LTS: Dubnium)
       v10.16.2   (LTS: Dubnium)
       v10.16.3   (LTS: Dubnium)
       v10.17.0   (LTS: Dubnium)
       v10.18.0   (LTS: Dubnium)
       v10.18.1   (LTS: Dubnium)
       v10.19.0   (LTS: Dubnium)
       v10.20.0   (LTS: Dubnium)
       v10.20.1   (LTS: Dubnium)
       v10.21.0   (LTS: Dubnium)
       v10.22.0   (LTS: Dubnium)
       v10.22.1   (LTS: Dubnium)
       v10.23.0   (LTS: Dubnium)
       v10.23.1   (LTS: Dubnium)
       v10.23.2   (LTS: Dubnium)
       v10.23.3   (LTS: Dubnium)
       v10.24.0   (LTS: Dubnium)
       v10.24.1   (Latest LTS: Dubnium)
        v11.0.0
        v11.1.0
        v11.2.0
        v11.3.0
        v11.4.0
        v11.5.0
        v11.6.0
        v11.7.0
        v11.8.0
        v11.9.0
       v11.10.0
       v11.10.1
       v11.11.0
       v11.12.0
       v11.13.0
       v11.14.0
       v11.15.0
        v12.0.0
        v12.1.0
        v12.2.0
        v12.3.0
        v12.3.1
        v12.4.0
        v12.5.0
        v12.6.0
        v12.7.0
        v12.8.0
        v12.8.1
        v12.9.0
        v12.9.1
       v12.10.0
       v12.11.0
       v12.11.1
       v12.12.0
       v12.13.0   (LTS: Erbium)
       v12.13.1   (LTS: Erbium)
       v12.14.0   (LTS: Erbium)
       v12.14.1   (LTS: Erbium)
       v12.15.0   (LTS: Erbium)
       v12.16.0   (LTS: Erbium)
       v12.16.1   (LTS: Erbium)
       v12.16.2   (LTS: Erbium)
       v12.16.3   (LTS: Erbium)
       v12.17.0   (LTS: Erbium)
       v12.18.0   (LTS: Erbium)
       v12.18.1   (LTS: Erbium)
       v12.18.2   (LTS: Erbium)
       v12.18.3   (LTS: Erbium)
       v12.18.4   (LTS: Erbium)
       v12.19.0   (LTS: Erbium)
       v12.19.1   (LTS: Erbium)
       v12.20.0   (LTS: Erbium)
       v12.20.1   (LTS: Erbium)
       v12.20.2   (LTS: Erbium)
       v12.21.0   (LTS: Erbium)
       v12.22.0   (LTS: Erbium)
       v12.22.1   (LTS: Erbium)
       v12.22.2   (LTS: Erbium)
       v12.22.3   (LTS: Erbium)
       v12.22.4   (LTS: Erbium)
       v12.22.5   (LTS: Erbium)
       v12.22.6   (Latest LTS: Erbium)
        v13.0.0
        v13.0.1
        v13.1.0
        v13.2.0
        v13.3.0
        v13.4.0
        v13.5.0
        v13.6.0
        v13.7.0
        v13.8.0
        v13.9.0
       v13.10.0
       v13.10.1
       v13.11.0
       v13.12.0
       v13.13.0
       v13.14.0
        v14.0.0
        v14.1.0
        v14.2.0
        v14.3.0
        v14.4.0
        v14.5.0
        v14.6.0
        v14.7.0
        v14.8.0
        v14.9.0
       v14.10.0
       v14.10.1
       v14.11.0
       v14.12.0
       v14.13.0
       v14.13.1
       v14.14.0
       v14.15.0   (LTS: Fermium)
       v14.15.1   (LTS: Fermium)
       v14.15.2   (LTS: Fermium)
       v14.15.3   (LTS: Fermium)
       v14.15.4   (LTS: Fermium)
       v14.15.5   (LTS: Fermium)
       v14.16.0   (LTS: Fermium)
       v14.16.1   (LTS: Fermium)
       v14.17.0   (LTS: Fermium)
       v14.17.1   (LTS: Fermium)
       v14.17.2   (LTS: Fermium)
       v14.17.3   (LTS: Fermium)
       v14.17.4   (LTS: Fermium)
       v14.17.5   (LTS: Fermium)
       v14.17.6   (LTS: Fermium)
       v14.18.0   (Latest LTS: Fermium)
        v15.0.0
        v15.0.1
        v15.1.0
        v15.2.0
        v15.2.1
        v15.3.0
        v15.4.0
        v15.5.0
        v15.5.1
        v15.6.0
        v15.7.0
        v15.8.0
        v15.9.0
       v15.10.0
       v15.11.0
       v15.12.0
       v15.13.0
       v15.14.0
        v16.0.0
        v16.1.0
        v16.2.0
        v16.3.0
        v16.4.0
        v16.4.1
        v16.4.2
        v16.5.0
        v16.6.0
        v16.6.1
        v16.6.2
        v16.7.0
        v16.8.0
        v16.9.0
        v16.9.1
       v16.10.0
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ node -v
v10.19.0
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ node install 16.10.0
internal/modules/cjs/loader.js:638
    throw err;
    ^

Error: Cannot find module '/home/axsae/Documents/coding_projects/git/dissonance-discord/install'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ node -v
v10.19.0
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ nvm use noe
N/A: version "noe -> N/A" is not yet installed.

You need to run "nvm install noe" to install it before using it.
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ nvm use node
N/A: version "node -> N/A" is not yet installed.

You need to run "nvm install node" to install it before using it.
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ nvm install node
Downloading and installing node v16.10.0...
Downloading https://nodejs.org/dist/v16.10.0/node-v16.10.0-linux-x64.tar.xz...
############################################################################################################################################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v16.10.0 (npm v7.24.0)
Creating default alias: default -> node (-> v16.10.0)
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ node -v
v16.10.0
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ node -v
v16.10.0
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ la
dissonance-discord  venv
(venv) axsae@sonance:~/Documents/coding_projects/git/dissonance-discord$ 