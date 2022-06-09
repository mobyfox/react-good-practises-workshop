## Testing

- [jest](https://jestjs.io/docs/getting-started)
- [jest cheat-sheet](https://devhints.io/)
- [@testing-library/React](https://testing-library.com/docs/react-testing-library/intro/)
- [@testing-library cheat-sheet]()
- [post](https://dev.to/manuartero/setup-jest-from-scratch-in-a-vanilla-js-project-47o0)

### Who is who

- `jest`

  1. Behaviour Driven Development syntax

  ```js
  describe('module', () => {
    it('test case', () => {

    })
  })
  ```

  2. lifecycle methods

  ```js
  beforeEach()
  afterEach()

  beforeAll()
  afterAll()
  ```

  3. expect + basic assertions

  ```js
  expect(value)

    .not
    .toBe(value)
    .toBeInstanceOf(Class)
    .toBeTruthy()
    .toEqual(value)
    .toHaveProperty(keyPath, value)
    .toMatch(regexOrString)
    .toMatchObject(object)
    .toThrow(error)
    .toThrowErrorMatchingSnapshot()
  ```

  4. Mocks + Assertions

  ```js
  const fn = jest.fn()
  const fn = jest.fn(() => 'hello')

  expect(fn)
    .toHaveBeenCalled()
    .toHaveBeenCalledTimes(number)
    .toHaveBeenCalledWith(arg1, arg2, ...)
  ```

- `@testing-library/jest-dom`

  ```js
  getBy()
  findBy()
  ```

- `@testing-library/react`

  ```js
  render()
  renderHook()
  act()
  ```

### Mock objects

There are two ways to mock functions:

1. Either by creating a mock function to use in test code
  ```js
  jest.fn()
  ```

2. Writing a manual mock to override a module dependency.
  ```js
  jest.mock()
  ```

***

**Example project**

 - `cart.spec`
 - `item-grid`
 - `marketplace`

### Priorities

https://testing-library.com/docs/queries/about/#priority

practical -> https://testing-playground.com/
