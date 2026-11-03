# Portfolio development

Branch: `feat/devops-portfolio`.

The portfolio is plain HTML, CSS, and JavaScript. Vite handles local development and static output; there are no runtime package dependencies or external font requests.

## Run locally

Use Node.js 22.12+ (or a newer supported version) and the pnpm version pinned in `package.json`.

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Vite. For a production build:

```sh
pnpm build
pnpm preview
```

Deploy the generated `dist/` directory to a static host when ready. Relative build asset paths support hosting under a subdirectory. No deployment has been configured.

## Edit the page

- `index.html`: identity, navigation, projects, skills, and contact links.
- `src/styles.css`: layout, responsive rules, color variables, and motion.
- `src/main.js`: footer year and one-time entrance animations.
- `public/favicon.svg`: small initials favicon.

The original GitHub profile README is preserved. All portfolio content and navigation remain available without JavaScript. Animations respect the operating system's reduced-motion preference.

## Design directions

**Recommended and implemented: understated engineering.** Deep green charcoal, mint accents, spacious typography, monospace labels, and a simple build/provision/operate illustration. Motion: 600 ms section reveals, 200–220 ms hover transitions, and smooth anchor navigation. Suitable for showing both infrastructure and software work without making the page look like a monitoring dashboard.

**Alternative: light editorial.** Warm ivory background, dark ink, restrained blue links, larger serif headlines, and thin dividers. Keep the same sections, use fade-only entrances, and emphasize longer project case studies. This would make the page feel more like a personal technical publication.

**Alternative: technical blueprint.** Dark navy, pale blue accents, a subtle CSS grid behind the hero, and small architecture diagrams in project sections. Use short staggered reveals for diagram nodes. Keep continuous motion out of reading areas and disable it for reduced motion.

Only the recommended style is implemented. To change direction, start with the variables in `:root`; adjust surface, text, and border colors together and verify contrast. Avoid scroll hijacking, looping typing effects, and heavy animation packages for this small page.

## Repository review

Reviewed public README files and repository file trees on 2026-11-02. This was a portfolio-content review, not a full code audit or verification of live deployments. Descriptions deliberately avoid uptime, usage, performance, or security guarantees.

- [homelab](https://github.com/palmieridev/homelab): strongest platform example. Talos/Kubernetes context, committed Helmfile values, Kustomize resources, networking/storage/observability documentation, and operational guides. The README and newer ingress migration files differ, so the page avoids claiming a specific active ingress controller.
- Openlocal combines [openlocal-web](https://github.com/palmieridev/openlocal-web) and [openlocal-api](https://github.com/palmieridev/openlocal-api) in one featured project, with links to both repositories. The Astro/TypeScript frontend provides the marketplace and store-management experience; the Go/Fiber API includes PostgreSQL migrations, typed SQL, a job worker, Docker Compose, and CI. Good future case study: the storefront-to-inventory flow and database migration lifecycle.
- [aws-secrets-encryption](https://github.com/palmieridev/aws-secrets-encryption): focused IaC example. KMS, Secrets Manager, RDS, and IAM modules; checked the secrets module configuration. The page describes infrastructure code without asserting production deployment or successful end-to-end rotation.
- [user-gateway](https://github.com/palmieridev/user-gateway): complementary identity example. Cognito, API Gateway, IAM, Lambda implementation, environment directories, validation workflows, and test scripts.
- [spectra](https://github.com/palmieridev/spectra): reviewed README and top-level structure. Useful future research/ML entry, but SDSS data ingestion is described as unfinished. Avoid presenting it as a validated scientific product.
- [autograder-ipn](https://github.com/palmieridev/autograder-ipn): currently an architectural proposal, with README and placeholder app/package directories. Omitted from implemented project highlights.

Private repositories were excluded from public portfolio content. Profile identity, skills, and contact details come from the existing README; the page omits the phone number and time-sensitive experience count.

## Suggested next content

Add a short case study to each featured project: the problem, an architecture diagram, one tradeoff you made, and an outcome you can substantiate. Add screenshots or measured results only after checking them against the project. Confirm the public-facing role wording and contact details before publishing.
