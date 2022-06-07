## how to add `ts` => baby steps

- From a pure `js` project
- We're to add `ts` checking to our `js` files. Just checking for type incoherences
- Allow implicit `'any'` first.

```bash
$» npm install -D typescript
```

```bash
$» npm install -D @types/node @types/react @types/react-dom @types/jest
```

## Minimal typescript configuration

```json
{
  "compilerOptions": {
    /* Language and Environment */
    "module": "ESNext",
    "jsx": "react-jsx",
    "lib": [
      "DOM", // window, document...
      "ESNext" // Full ECMAScript API
    ],
    "types": [],
    "skipLibCheck": true /* Skip type checking all .d.ts files. */,
    /* JavaScript Support */
    "allowJs": true /* allow import js file */,
    "moduleResolution": "node" /* allow resolveJsonModule */,
    "resolveJsonModule": true /* allow import json file */,
    "checkJs": true /* check .js files */,
    /* output */
    "noEmit": true /* Disable emitting files from a compilation. */,
    /* Interop Constraints */
    "allowSyntheticDefaultImports": true /* import xx from  */,
    "esModuleInterop": true /* enable allowSyntheticDefaultImports */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */
  }
}
```

### Implicit `'any'`

```log
[error] TS7006: Parameter 'onPerfEntry' implicitly has an 'any' type.
```

```diff
-// "noImplicitAny": true,
+ "noImplicitAny": false,
```

---

If `.svg` error: `react-app-env.d.ts`

```ts
/// <reference types="react-scripts" />
```

***

### Good References

> ℹ️ : [typescript - cheatsheet](https://www.typescriptlang.org/cheatsheets)

> ℹ️ : [tsconfig.json](https://www.typescriptlang.org/tsconfig)
