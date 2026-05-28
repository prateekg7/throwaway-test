## Stack
- Auth is handled in `src/auth.ts` using JWT.
- Tests live in `__tests__/` and use Jest.

## Conventions
- Never import directly from `src/utils/legacy/` — use the adapter in `src/adapters/`.
