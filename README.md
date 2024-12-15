[![Continuous Integration](https://github.com/kaiosilveira/collapse-hierarchy-refactoring/actions/workflows/ci.yml/badge.svg)](https://github.com/kaiosilveira/collapse-hierarchy-refactoring/actions/workflows/ci.yml)

ℹ️ _This repository is part of my Refactoring catalog based on Fowler's book with the same title. Please see [kaiosilveira/refactoring](https://github.com/kaiosilveira/refactoring) for more details._

---

# Collapse Hierarchy

<table>
<thead>
<th>Before</th>
<th>After</th>
</thead>
<tbody>
<tr>
<td>

```javascript
class Employee { ... }
class Salesman extends Employee { ... }
```

</td>

<td>

```javascript
class Employee { ... }
```

</td>
</tr>
</tbody>
</table>

Often enough, simplicity pays off. This is also true when we reach clearer interfaces and relationships. The side-effect, though, is that sometimes we find out that we no longer need a certain hierarchies. This refactoring helps with collapsing those into the base class.

## Working example

Our working example is a simple program that contains a class hierarchy formed by `Person` and `Student`, with the only difference being that `Student` has an associated `age`, while `Person` does not. Our goal is to collapse `Student` into `Person`.

### Test suite

The test suite is pretty simple and covers the getters of each class. That's all we need to be safe to proceed.

### Steps

We start by pulling up `age` from `Student` to `Person`:

```diff
diff --git Person
 export class Person {
-  constructor(name) {
+  constructor(name, age) {
     this.name = name;
+    this.age = age;
   }
 }

diff --git Student...
 export class Student extends Person {
   constructor(name, age) {
-    super(name);
-    this.age = age;
+    super(name, age);
   }
 }
```

Then, we update the calling code to use `Person` instead of `Student`:

```diff
diff --git client...
-const student = new Student('John Doe', 25);
+const student = new Person('John Doe', 25);
 console.log(`Student name: ${student.name}, age: ${student.age}`);
```

Which free us remove the, now unused, `Student` class:

```diff
-export class Student extends Person {
-  constructor(name, age) {
-    super(name, age);
-  }
-}
```

And that's it!

### Commit history

Below there's the commit history for the steps detailed above.

| Commit SHA                                                                                                                | Message                                                  |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [0e5ea86](https://github.com/kaiosilveira/collapse-hierarchy-refactoring/commit/0e5ea867ed8da91f1eaa72ce8676330c7d50cfec) | pull up `age` from `Student` to `Person`                 |
| [ae45f4d](https://github.com/kaiosilveira/collapse-hierarchy-refactoring/commit/ae45f4d8e5816bc085837b72d320944b6d661e93) | update calling code to use `Person` instead of `Student` |
| [ba4019a](https://github.com/kaiosilveira/collapse-hierarchy-refactoring/commit/ba4019a21cd7da55f844d5cf607d0f266cef7bc9) | remove unused `Student` class                            |

For the full commit history for this project, check the [Commit History tab](https://github.com/kaiosilveira/collapse-hierarchy-refactoring/commits/main).
