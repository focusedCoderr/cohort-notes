# Flexbox

- Gives the ability to play with the child elements of an element <br><br>

  ![My Image](./Main&CrossAxis.png)

```html
<head>
	<style>
		.parent {
			display: flex;
		}
	</style>
</head>
<body>
	<div class="parent">
		<div class="child">Item 1</div>
		<div class="child" id="item2">Item 2</div>
		<div class="child">Item 3</div>
		<div class="child">Item 4</div>
	</div>
</body>
```

- `display: flex` of parent -> gives you ability to play with children of parent
- by default children are aligned on the main axis
  <br>
- `justify-content` -> property used in parent to control the alignment of children along the main axis.

  - Commonly used values are:
    - flex-start
    - flex-end
    - center
    - space-between
    - space-around

  <br>

- `align-items` -> property used in parent to control the alignment of children along the cross axis
  - Commonly used values are:
    - flex-start
    - flex-end
    - center
    - stretch
    - baseline
      <br>
- `gap` -> used in parent to control gap between the children
  <br>
- `flex-wrap` -> used in parent to enable or prevent wrapping of children to the next line
  <br>
- `flex` -> defined on the child elements -> basically it defines how the size of a child element varies with respect to the size of other child elements in the same flexbox -> it defines how much an element can increase or decrease its size if there is sufficient space or limited space -> shorthand for three properties -> `flex: flex-grow flex-shrink flex-basis` :

  - flex-grow
  - flex-shrink
  - flex-basis

    - `flex-grow`: defines how much a child element can grow in size with respect to other child elements if there is space available to grow.
      - `flex-grow : 1` -> means the child element can grow if the space is available
      - `flex-grow: 2 or above` -> means the child element will grow in the ratio of this value
      - `flex-grow: 0` -> this is default value of all items if flex is not defined -> this means that by default the child elements will not grow even if there is space available.
    - `flex-shrink`: defines how much a child element shrink in size if space becomes lesser
      - `flex-shrink: 1` -> means child element can shrink if space becomes lesser
      - `flex-shrink: 2 or more` -> means the child element will shrink with a factor of 2 or whatever the value is if space becomes lesser -> keep in mind this value always apply in ratio -> for eg. : if there are two child elements in the flexbox and one has a shrink value of 1 and the other has a shrink value of 3 -> this means that the second child elements will shrink thrice as fast as the first element.
      - `flex-shrink: 1` -> default value if flex is not defined -> it means that by default the items in the flexbox will shrink if space becomes a constraint
    - `flex-basis` : it defines that, before applying the grow and shrink values, what should be the size of the child element
      - `flex-basis: 0` : this means that before applying the shrink and grow values, the size is to be considered zero no matter what the content size is of the child element
      - `flex-basis: auto`: this means that before applying grow and shrink values, the size of the child element is according to the content inside the child element.
      - `flex-basis: auto` : This is the default value if flex is not defined on the element

  - Now, that we have have understood what all these values mean, if it is written that `flex: 1` this means : `flex: 1 1 auto` -> all the default values are put if not given  
    <br>

- order: used on child element. By default order of each element is 0 -> basically means priority -> value can be a negative integer, 0 or positive integer. lower the value -> more priority the element has -> elements laid out on the axis (main or cross) based on their priority -> lower order value element -> laid out first, then higher, higher , ...highest.
  <br>

- flex-direction: defined on parent -> value can be row, row-reverse, column, column-reverse -> whatever the value of flex-direction is -> that direction becomes the main axis
  - for example: let us say flex-direction is :
    1. row -> main axis -> left to right | cross axis -> top to bottom
    2. row-reverse -> main axis -> right to left | cross axis -> top to bottom
    3. column -> main axis -> top to bottom | cross axis -> left to right
    4. column-reverse -> main axis -> bottom to top | cross-axis -> left to right
       <br>
- align-self: defined on child element -> adjusts the position of individual child along the cross-axis.
  - Commonly used values are:
    - flex-start
    - flex-end
    - center
    - stretch
    - baseline
      <br>
- align-content: used on the parent element -> only valid when `flex-wrap: wrap` is enabled and there are elements in the second line as well i.e. there are so many elements in one line of the main axis that wrapping is done and now some elements have wrapped to the second line or further to third or fourth or so on. -> it basically describes the gap between two or more subsequent lines of wrapped elements on the cross axis -> if there is only one line of elements, this is property will have no effect. Possible values:
  - flex-start
  - center
  - flex-end
  - space-between
  - space-around
  - space-evenly
  - stretch
    <br>
- flex-flow: shorthand to apply two properties in one go i.e. `flex-direction` and `flex-wrap` -> format: `flex-flow: flex-direction flex-wrap` -> for eg.: `flex-flow: column wrap`
  <br>
