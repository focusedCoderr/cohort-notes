# Grid

![My Image](./gridImage.png)

- Grid used to control items along two axis - horizontal as well as vertical
- A container is used in which grid is defined by `display: grid` property.
- By default, `display: grid` will create columns and rows, based on the content. But if you want to take control over the layout of the grid i.e. to define the rows and columns of the grid, we use `grid-template-columns` and `grid-template-rows` property in the grid container.

### Defining Columns:

- `grid-template-columns: 20% 20% 20% 20% 20%` -> creates grid of 5 columns which will occupy 20% of the available area each.
- `grid-template-columns: 100px 100px 100px 100px 100px` -> creates grid of 5 columns which will occupy 100 px each.
- `grid-template-columns: 20% 100px 30% 100px 100px` -> we can use any combination of px, %, em etc to assign the amount of space to be used by each column
- `grid-template-columns: repeat(100, 5%)` -> will create a grid which will have 100 columns, wach of which will occupy 5% of the available space.

### Defining Rows:

- `grid-template-rows: 20% 20% 20% 20% 20%` -> creates grid of 5 rows which will occupy 20% of the available area each. Note: This is 20% of the height of the container. So you will have to define the height of the contaier first. Otherwise the rows will be created, but they will not have height, because height is related to the height of the container.
- `grid-template-rows: 100px 100px 100px 100px 100px` -> creates grid of 5 rows which will occupy 100 px each.
- `grid-template-rows: 20% 100px 30% 100px 100px` -> we can use any combination of px, %, em etc to assign the amount of space to be used by each row
- `grid-template-rows: repeat(100, 5%)` -> will create a grid which will have 100 rows, each of which will occupy 5% of the available space.

### Placing Items in the grid

- To place an item in the grid, first select that item using css selector and then, use the following properties in the items:

- `grid-column-start : 1` -> specifies that the item will be placed from the first grid column line.
- `grid-column-end: 5` -> specifies that the item will end at the 5th column line
- `grid-column-start: 5` and `grid-column-end : 3` -> this is also valid. This just means that the item will be placed in two columns.
- `grid-column-start: 2` and `grid-column-end: span 2` -> this means that the item will be placed in two columns



- `grid-row-start : 1` -> specifies that the item will be placed from the first grid row line.
- `grid-row-end: 4` -> specifies that the item will end at the 4th row line
- `grid-row-start: 4` and `grid-row-end : 2` -> this is also valid. This just means that the item will be placed in two rows.
- `grid-row-start: 2` and `grid-row-end: span 2` -> this means that the item will be placed in two rows

#### Shorthands

- `grid-row: grid-row-start / grid-row-end` -> for eg. : if I have to place item from second to fourth row -> `grid-row: 2 / 5` or `grid-row: 2/ span 3`

Similarly

- `grid-column: grid-column-start / grid-column-end` -> for eg. : if I have to place item from first to fourth column -> `grid-row: 1 / span 4`

Now instead of writing separate `grid-row` and `grid-column` -> there is a shorthand for this as well:

- `grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end` -> for eg. : In a grid having 5 rows and 6 columns, if we have to place the item in the last row and last column: `grid-area: 5 / 6 / 6 / 7`
## item-level

- grid-column-start:
- grid-column-end:
- grid-row-start:
- grid-row-end:
- grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end
- grid-template-areas:
-
