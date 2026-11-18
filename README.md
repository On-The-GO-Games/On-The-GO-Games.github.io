# Nebula

Nebula is a free web proxy with games, apps, and settings. It is a fork of
[UseInterstellar/Interstellar](https://github.com/UseInterstellar/Interstellar), with a new logo, a black and blue theme,
a new navigation bar, and a FAQ page. The FAQ on the site explains where the code comes from.

Licensed under the **GNU Affero General Public License v3.0** (see [LICENSE](LICENSE)). If you run a modified copy as a
public website, you must offer its source code to the people who use it.

## Run in a GitHub Codespace

1. On the repo page, click **Code > Codespaces > Create codespace on main**.
2. Wait for the terminal to finish `pnpm install` and `pnpm build`.
3. Run:

   ```bash
   pnpm start
   ```

4. Open forwarded port **8080**. The server also hosts the proxy's Wisp endpoint, so the proxy works from that address.

Run `pnpm build` again after changing files in `static/`, then restart `pnpm start`.

## Run on your own computer

Requires Node 22 and pnpm (run `corepack enable` once).

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

Then open `http://localhost:8080`.

## Single-file launcher

[`nebula-launcher.html`](nebula-launcher.html) is one HTML file with no dependencies. Open it in a browser, paste the
address of your running server, and it opens Nebula. The address is saved in that browser.

To give the server a public address from your computer for free, install
[cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/) and run:

```bash
cloudflared tunnel --url http://localhost:8080
```

Cloudflare prints an address ending in `trycloudflare.com`. That address changes each time you restart the tunnel.

## Changes from the upstream project

- Renamed the site and removed upstream branding, Discord and Patreon links, and affiliate tags
- Removed the upstream popunder ad loader and the upstream analytics ID
- New logo, black and blue theme, floating navigation bar, and app-tile icon
- Added the FAQ page

Everything else (games, apps, settings, cloaking, and the proxy) comes from the upstream project.

## Credits

Built on [Interstellar](https://github.com/UseInterstellar/Interstellar) by its contributors. The proxy uses the
[Scramjet](https://github.com/MercuryWorkshop/scramjet) and [Wisp](https://github.com/MercuryWorkshop/wisp-js) projects.
