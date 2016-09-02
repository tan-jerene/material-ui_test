# Chip

[Chips](https://material.google.com/components/chips.html) represent complex entities in small blocks, such as a contact.

While included here as a standalone component, the most common use will be in some form of input, so some of the behaviour demonstrated is not shown in context.

## Examples
### Example Chip
Examples of Chips, using an image Avatar, Font Icon Avatar, SVG Icon Avatar, "Letter" (string) Avatar and with custom colors.

Chips with the onRequestDelete property defined will display a delete icon.

{{demo='chips/ChipSimple.js'}}

### Example Array
An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick property is defined, the Chip can be focused, but does not gain depth while clicked or touchend.

{{demo='chips/ChipArray.js'}}


