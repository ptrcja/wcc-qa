## Description

<!--- Describe your changes in detail. Why is this change required? What problem does it solve? -->
<!--- Add notes if anything is left unclear or incomplete. -->

## Related Issue

<!--- Every PR should link to an issue. If none exists, please open one and discuss it with the maintainers first. -->

Closes #

## Type

- [ ] New test coverage
- [ ] Test fix (flaky, broken, or incorrect test)
- [ ] Framework change (fixtures, clients, services, factories, schemas)
- [ ] Bug fix
- [ ] Documentation
- [ ] Tooling / CI
- [ ] Other

## Test Evidence

<!--- Which projects did you run, and what was the result? e.g. `npm run test:api` — 42 passed. -->
<!--- ⚠️ Never attach traces, HTML reports, or `test-results/` — they capture Authorization and X-API-KEY headers. -->
<!--- Paste the relevant terminal output or assertion error instead. See SECURITY.md. -->

## Pull request checklist

- [ ] This PR is linked to an issue
- [ ] `npm run lint` and `npm run typecheck` pass locally
- [ ] Tests have been added or updated for this change
- [ ] `tests/api/TEST_PLAN.md` has a row for every new test ID (API flows only)
- [ ] No secrets committed — credentials stay in `tests/.env`, and no token, password, or API key is logged or hardcoded
- [ ] I have performed a self-review of my own code

<!--  Thanks for sending a pull request! -->
