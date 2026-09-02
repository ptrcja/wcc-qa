# Contributing Guidelines

---

Firstly thanks for your contributions!!! :sparkling_heart::sparkling_heart:

## PRE-REQUISITE

1. 📖 Read up on fork & pull request models
2. 🍴 Fork this repo to your account
3. 🌱 Create a branch for the change you intend to make in your fork
4. ✍️ Make your changes to the above created branch in your fork
5. 🔨 Follow the contributing guidelines below
6. 🔧 Send a pull request from your fork's branch to our `main` branch
7. :running_woman: Share your PR with the code owners on Slack
8. 🎉 Get your pull request approved - success!

> If you are a Women Coding Community member with write access to this repository, you can
> create your branch here directly instead of forking.

## Getting the tests running

Before making changes, make sure the suite runs on your machine. The
[README](README.md) covers this in full — in short:

```bash
npm install
npx playwright install          # browsers, needed for the admin/UI project
cp tests/.env.example tests/.env
```

Fill in `tests/.env` with the API host, API key and role credentials, then check everything
is wired up:

```bash
npm run typecheck
npm run test:api
```

`tests/.env` is git-ignored and must stay that way. **Never commit real credentials.**

## ⭐ How To Make A Pull Request:

**1.** Start by making a Fork of the [**Women Coding Community/wcc-qa**](https://github.com/Women-Coding-Community/wcc-qa)
repository. Click on
the <a href="https://github.com/Women-Coding-Community/wcc-qa/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>
Fork symbol at the top right corner.

**2.** Clone your new fork of the repository in the terminal/CLI on your computer with the
following command:

```bash
git clone https://github.com/<your-github-username>/wcc-qa.git
```

**3.** Navigate to the newly created project directory:

```bash
cd wcc-qa
```

**4.** Create a new branch. Name it with a prefix that says what kind of change it is:

```bash
git checkout -b feature/mentor-profile-tests
```

| Prefix     | Use it for                                         |
| ---------- | -------------------------------------------------- |
| `feature/` | a new test, flow or helper                         |
| `fix/`     | fixing a broken test or helper                     |
| `test/`    | test-only changes to something that already exists |
| `docs/`    | documentation only                                 |

**5.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Additional way to Sync forked repository with origin repository using Git CLI:

```bash
git remote add upstream git@github.com:Women-Coding-Community/wcc-qa.git
```

```bash
git checkout origin main
```

```bash
git pull upstream main
```

```bash
git push origin main
```

```bash
git checkout -b create_my_new_branch_from_main
```

#### Check out the [Github Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) to learn more about syncing a forked repository.

**6.** Make your changes to the source code.

**7.** Stage your changes and commit:

```bash
git add <file/folder>
```

```bash
git commit
```

**8.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**9.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!
Opening one loads the repository's pull request template. Fill in every section — what you
changed, the issue it closes, the type of change and your test evidence — and work through the
checklist before asking for a review.

**10.** **Congratulations!** You've made your first contribution to
[**Women Coding Community**](https://github.com/Women-Coding-Community/wcc-qa)! 🙌🏼

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move
the project forward. Otherwise, it will be given constructive feedback and suggestions for the
changes needed to add the PR to the codebase._**

## Find something to work on

The first step to start contributing is to find something to work on.
Help is always welcome, and no contribution is too small!

Please browse the current open [issues](https://github.com/Women-Coding-Community/wcc-qa/issues).

If you are adding a test rather than fixing one, check
[`tests/api/TEST_PLAN.md`](tests/api/TEST_PLAN.md) first — it lists the flows and test cases
already planned, so you can pick one up instead of duplicating work. Every API test ID needs a
row in that file, added in the same change.

## Code Pattern Guide :memo:

The suite is type-safe end to end, and new tests are expected to follow the existing layering.
The [API Architecture](README.md#api-architecture) section of the README explains it in full.
In short:

- **Clients** (`helpers/apifactory/clients/`) — transport only. One method per endpoint,
  returning the raw `APIResponse`. No assertions, no parsing.
- **Services** (`helpers/apifactory/services/`) — build the request payload, optionally call
  `ensureSuccess`, and always return `TypedAPIResponse<T>`.
- **Fixtures** (`helpers/fixtures/`) — role-scoped API access (`adminApi`, `mentorApi`, …) and
  the page objects. Import the merged `test` from `helpers/fixtures`.

A few conventions worth knowing:

- Use bare imports resolved through the tsconfig `paths` (`helpers/fixtures`), not relative
  `../../` paths.
- Validate responses with the Zod schemas in `helpers/datafactory/schemas/` so shape drift
  fails the test.
- Build test data with the Faker factories rather than hardcoding values.
- Name API specs `[name].flow.spec.ts` and admin specs `[name].spec.ts`. The full table is
  in [CLAUDE.md](CLAUDE.md), which also holds the mandatory and recommended patterns in detail.

## Style Guide for Git Commit Messages :memo:

This repository uses [conventional commits](https://www.conventionalcommits.org/). Start the
subject line with the type of change, followed by a colon:

```
feat: Add mentor profile update tests
fix: Correct the tokenFor worker fixture
docs: Add contributing guidelines
```

Common types are `feat`, `fix`, `docs`, `test`, `refactor` and `chore`.

**How you can add more value to your contribution logs:**

- Use the present tense. (Example: "Add feature" instead of "Added feature")
- Use the imperative mood. (Example: "Move item to...", instead of "Moves item to...")
- Limit the first line (also called the Subject Line) to _50 characters or less_.
- Capitalize the Subject Line.
- Separate subject from body with a blank line.
- Do not end the subject line with a period.
- Wrap the body at _72 characters_.
- Use the body to explain the _what_, _why_, _vs_, and _how_.

## Best practices

- Run the checks before opening a PR:

  ```bash
  npm run lint
  npm run format
  npm run typecheck
  ```

  These three only report problems. `npm run lint:fix` and `npm run format:fix` apply what
  ESLint and Prettier can fix on their own.

  A Husky pre-commit hook also runs lint-staged over the files you staged and re-stages
  whatever it fixes. If ESLint reports something it cannot fix automatically, the commit is
  aborted so you can resolve it first. The hook installs itself on `npm install`, so there is
  nothing extra to set up.

- Make sure `npm run lint` and `npm run typecheck` pass before you ask for a review.
- Keep pull requests small and focused on one issue. Several small PRs are easier to review
  than one large one, and they get merged faster.
- Never commit `tests/.env`, saved sessions from `tests/admin/.auth/`, or any real
  credentials.
- Never attach traces, HTML reports or `test-results/` to an issue or a pull request. They
  capture request headers, including `Authorization` tokens and `X-API-KEY`. Paste the
  relevant terminal output instead.
- Write clear and meaningful git commit messages.
- If the PR will _completely_ fix a specific issue, include `fixes #123` in the PR body (where
  123 is the specific issue number the PR will fix). This will automatically close the issue
  when the PR is merged.
- Make sure you don't include `@mentions` or `fixes` keywords in your git commit messages.
  These should be included in the PR body instead.
- When you make a PR for a small change (such as fixing a typo, style change, or grammar fix),
  please squash your commits so that we can maintain a cleaner git history.
- Make sure you include a clear and detailed PR description explaining the reasons for the
  changes, and ensuring there is sufficient information for the reviewer to understand your PR.
- Additional Readings:
  - [chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/)
  - [github.com/blog/1506-closing-issues-via-pull-requests](https://github.com/blog/1506-closing-issues-via-pull-requests)
  - [davidwalsh.name/squash-commits-git](https://davidwalsh.name/squash-commits-git)

## Reporting issues OR suggesting changes/features to the existing repo:

1. In order to discuss changes, you are welcome to
   [open an issue](https://github.com/Women-Coding-Community/wcc-qa/issues/new/choose) about
   what you would like to contribute. Enhancements are always encouraged and appreciated.
2. A repository owner will review the issue and provide feedback.

## Code of Conduct

This project follows the Women Coding Community
[Code of Conduct](https://www.womencodingcommunity.com/code-of-conduct). By taking part, you
are expected to uphold it.

## All the best! 🥇
