# peel

Try to peel a tropical fruit to eat.

```sig
tropic.peel(TropicalFruit.Banana);
```

## Parameters

* **fruit**: a `TropicalFruit` to peel and eat, which is either: `banana`, `pineapple`, or `coconut`.

## Returns

* a [boolean](/types/boolean) value which is `true` if the fruit was peeled, `false` if not.

## Example

Try and pick a coconut from a tropical tree. Can you peel it?

```blocks
let peeled = false
if (tropic.pick(TropicalFruit.Coconut)) {
    peeled = tropic.peel(TropicalFruit.Coconut)
}
```

## See also

[pick](/reference/tropic/pick)

```package
tropic
```