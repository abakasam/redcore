# Preprocessor

A number of preprocessor directives can be used within redcode. These directives affect how the parser turns the source redcode into the load file.

Note these preprocessor directives are used a parse time and are not output directly into the parsed output itself.

## EQU

The `EQU` directive allows `constants` to be defined, which can then be referred to through out your code.  This works in a similar way to [labels](labels). The difference is that you explicitly specify the value of these `constants` rather than being implicitly set based on where they are declared within the redcode.

The syntax for the `EQU` directive is as follows

```redcode
name EQU value
```

Constant names follow the same naming rules as labels (see [labels](labels) for details).

The value can be either a number, a label, one of the [special constants](#special-constants) or even a [mathematical expression](#mathematical-expressions) combining a mixture of these values.

### Literal Number Constant

Here is an example of using `EQU` to set a constant within the classic `dwarf`:

```redcode
step EQU 3044
ORG  top
bmb: dat    #step #step
top: add.ab bmb, bmb
     mov    bmb, @bmb
     jmp    top
```

The parsed output will look like this:

```redcode
ORG 1
DAT.F #3044, #3044
ADD.AB $-1, $-1
MOV.I $-2, @-2
JMP.B $-2, $0
```

Notice that all references to `step` have been replaced with the value of `step` i.e. `3044`.

### Label Constant

You can also use a `label` when declaring a `constant` using the `EQU` directive. When you do this, the parser first replaces all references to the constant within code with the `label` that the `constant` is equal to. After this substitution has been made, labels are replaced with their relative addresses in the normal way, see [labels](labels) for details.

```redcode
mybmb EQU bmb
ORG  top
bmb: dat    #step #step
top: add.ab mybmb, mybmb
     mov    mybmb, @mybmb
     jmp    top
```
Notice here that `mybmb` and `bmb` are equivalent.

## Mathematical Expressions

Mathematical expressions can also be used within redcode. These are evaluated at parse time and replaced by the numeric result.

These expressions can be placed in any [operand](operands) within your code or at the value of a [EQU](#equ) directive.

Mathematical expressions can use the following operators:
* + addition
* - subtraction
* * multiplication
* / division
* % modulo

Multiplication and division operatiors have precendence (are evaluated first) over addition and subtraction.

```
5+2*3
```

For example, the above will be evaluated as 2*3=6, therefore 5+6 = **11**.

Brackets `(` and `)` can be used to control the order that the expression is evaluated.

```redcode
add (4/2-1)*5, 1
```

The `A` operand in the above example will be evaluated to `5` so the parsed output will be:

```redcode
ADD.AB $5, $1
```

The following example uses a mathematical expression to set the value of a `constant`:

```redcode
myconst EQU (1+2)/2
```

This will be evaluated as:

```redcode
myconst EQU 1
```

Note that when using division, the result is always rounded towards zero.

It is also possible to use [labels](labels) within mathematical expressions as follows:

```redcode
bmb dat 5, 5
    dat 0, 0
    mov bmb, bmb+1
```

This example will be parsed to:

```redcode
DAT.F #5, #5
DAT.F #0, #0
MOV.I $-2, $-1
```

The label `bmb` is replaced with `-2` since its address is two lower than the `mov` instruction. The `B` operand of the `mov` instruction is `bmb+1` which is therefore effectively `-2+1`, hence the parsed output for the `B` number of the `mov` instruction is `-1`.

## Special constants

**NOTE this feature is not yet implemented within corewar.io**

A number of preprocessor constants are defined in redcode. These constants are resolved during parsing and replaced with their numeric equivalent.

|Constant|Description|
|---|---|
|CORESIZE|The size of the [core](../corewar/core)|
|MAXCYCLES|The number of cycles which will be executed before a draw is declared|
|MAXPROCESSES|The maxmimum number of processes each warrior can have (see [Processes](../corewar/processes))|
|WARRIORS|The number of warriors which have been loaded into the Core|
|MAXLENGTH|The maximum length (number of instructions) a warrior can have|
|CURLINE|The absolute position (beginning at zero) of this line within the warrior's source code|
|MINDISTANCE|The closest that two warriors can be placed when loaded into core|
|VERSION|The version of the simulator used|
|PSPACESIZE|The size of P-space - see [P-Space](../corewar/pspace)|

## Assert

**NOTE this feature is not yet implemented within corewar.io**

When writing your warrior you may have a specific environment in mind. For example you may only want to deploy your warrior to a Core of size 8000. In order to make this clear and to prevent your warrior being loaded into a Core of the wrong size you can use the `assert` directive as shown in the following example:

```redcode
;assert CORESIZE==8000
```

The above snippet will prevent your warrior from being parsed and loaded into a core of any size other than 8000.

The following C like operators can be used within an `assert` directive to build a logical condition:

|Operator|Meaning|
|---|---|
|+|Addition|
|-|Subtraction|
|*|Multiplication|
|/|Division|
|%|Modulo|
|==|Equal|
|!=|Not equal|
|<|Less than|
|<=|Less than or equal|
|>|Greater than|
|>=|Greater than or equal|
|&&|Boolean and|
|\|\||Boolean or|
|!|Boolean not|

## FOR

**NOTE this feature is only partially implemented within corewar.io - FOR loops can be used but nested FOR loops and label references are not yet supported**

`FOR` blocks cause the redcode contained within to be output by the parser multiple times. This saves the author from manually duplicating a line of code and is useful for introducing padding within your warrior's source code.

The `FOR` block is used as shown in the following example:

```redcode
FOR 10
dat.f $1, $2
ROF
```
In this example, `FOR` begins the `FOR` block. The number `10` indicates that the contents of the `FOR` block should be repeated ten times. Next the instruction to be duplicated is included. Finally, the `FOR` block is terminated using the `ROF` keyword.

The above redcode will be parsed to produce the following output:

```redcode
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
```

A [label](labels) can be declared in front of the FOR block. Referencing the label within the FOR block will result in a different number being emitted for each sucessive instruction as the parser outputs the contents of the FOR block and each instruction gets further away from the label declaration.  This is demonstrated below:

```redcode
label FOR 4
dat.f $1+label, $1-label
ROF
```

This will be parsed to produce:

```redcode
dat.f $1, $1
dat.f $0, $2
dat.f $-1, $3
dat.f $-2, $4
```

It is also possible to nest `FOR` blocks within each other as follows:

```redcode
FOR 2
FOR 3
dat.f $1, $2
ROF
ROF
```

Becomes

```redcode
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
dat.f $1, $2
```

Finally, the `&` operator can be used within a `FOR` loop to add the loop counter to a label declaration as demonstrated in the following example:

```redcode
i FOR 3
loop&i dat.f $1, $1
ROF
```
Becomes

```redcode
loop01 dat.f $1, $1
loop02 dat.f $1, $1
loop03 dat.f $1, $1
```