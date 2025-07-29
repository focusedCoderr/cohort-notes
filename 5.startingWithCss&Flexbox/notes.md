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

- Display: flex of parent -> gives you ability to play with children of parent
- by default children are aligned on the main axis
- justify-content -> property used in parent to control the alignment of children along the main axis
- align-items -> property used in parent to control the alignment of children along the cross axis
- gap -> used in parent to control gap between the children
- flex-wrap -> used in parent to enable or prevent wrapping of children to the next line
- flex -> defined in children -> defines ratio of children w.r.t. each other ->

```html
<style>
	.child {
		flex: 1;
	}
	#item2 {
		flex: 2;
	}
</style>
```

now the item2 will occupy twice the size on the screen as compared to other children. flex always signifies the ratio.
If flex is not defined for the elements having class 'child', and flex:2 (2 or anything >0) is defined for #item2, then item 2 occupies all the remaining space.

- order:
- flex-direction
- align-self
- align-content???
