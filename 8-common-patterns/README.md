# Common React patterns

## Hooks

|                      |                 | when                                                           |
| -------------------- | --------------- | -------------------------------------------------------------- |
| **state management** |                 |                                                                |
|                      | `useState()`    | state 101                                                      |
|                      | `useReducer()`  | update specific parts of a complex state                       |
|                      | `useContext()`  | Parent state what will contain values accesible for N children |
| **optimisation**     |                 |                                                                |
|                      | `useMemo()`     | Transform API data and avoid heavy calculations                |
|                      | `useCallback()` | Avoid func. call on every render as trigger of `useEffect()`   |
| **other**            |                 |                                                                |
|                      | `useRef()`      | reference DOM element ; keep value between renders             |

## vs.

### `useReducer()` vs. `useState()`

```javascript
useReducer() --> dispatch() --> reduce --> re-render // replace part of the state.
useState()   --> setState() --> re-render // replace the whole state
```

### `useMemo()` vs. `useCallback()`

```javascript
state = useMemo(() => value + 1, [value]); // cached: value+1
fn = useCallback(() => value + 1, [value]); // cached: () => value+1
```
