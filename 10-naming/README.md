## Naming

> Isn't easy!

1. Do not use letters

```diff
- const y;
+ const years;
```

> Exception: `i` inside `iterables`

```ts
items.map((item, i) => ...)
```

2. Avoid programming keywords & empty words

```
list
set
hash
map
object
```

```
manager & controller
```

```diff
data & info:
-productData
-productInfo
```

3. Pronounceable Names

```diff
- const yyyymmdd;
+ const currentDate;
```
