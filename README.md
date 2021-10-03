<p align="center">
  <img height="200" src="logo.png" alt="Your Logo">
  <h1 align="center">Your project name</h1>
  <p align="center">Project description</p>

</p>
<p align="center">
  <a href="https://github.com/<your user>/<your repo>/releases">
    <img src="https://img.shields.io/github/release/<user>/<repo>.svg?color=bright_green&label=latest">
  </a>
  <a href="https://github.com/<user>/<repo>/actions">
    <img src="https://img.shields.io/github/workflow/status/<user>/<repo>/ci?label=ci">
  </a>
  <a href="https://codecov.io/gh/<user>/<repo>">
    <img src="https://codecov.io/gh/<user>/<repo>/branch/main/graph/badge.svg?token=<token>"/>
  </a>
</p>

---

# Contents

- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [License](#license)

## Quick Start

```shell
$ deno run --allow-net app.ts
```

## Documentation

- `app.ts` - Entrypoint script to run
- `deps.ts` - A single place to hold and reference dependencies
- `server.ts` - Constucts the server object
- `.github` - Contains workflows to update actions, dependencies and run tests
- `resources` - Contains all Drash resources
- `tests` - Contains all tests for the project

## License

MIT
