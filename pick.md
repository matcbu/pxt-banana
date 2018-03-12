# pick

Select an available tropical fruit to eat.

```sig
tropic.peel(TropicalFruit.Banana)
```

## Parameters

* **type**: a `TropicalFruit` to eat, which is either: `banana`, `pineapple`, or `coconut`.

## Returns

* a [boolean](/types/boolean) value which is `true` if the fruit was picked, `false` if not.

## Example

Try and pick a coconut from a tropical tree. Can you peel it?

```blocks
let peeled = false
if (tropic.pick(TropicalFruit.Coconut)) {
    peeled = tropic.peel(TropicalFruit.Coconut)
}
```

## See also

[peel](/reference/tropic/peel)

```package
tropic
```