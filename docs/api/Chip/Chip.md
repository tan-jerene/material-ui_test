Chip
====


Props
-----

| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----| 
|backgroundColor | `string` | `rgb(224,224,224)` | Override the background color of the chip.|
|children | `node` | | Used to render elements inside the Chip.| 
|className | `node` | | CSS `className` of the root element.|
|labelColor | `string` | `rgba(0,0,0,0.87)` | Override the label color.|
|labelStyle | `Object` | | Override the inline-styles of the label|
|onClick | `function` | | Call back function when the `Chip` element is clicked.
| | | | **Signature:** |
| | | | `function(event:object) => void` |
| | | | *event:* `Click` event targeting the element. |
|onRequestDelete| `function` | | Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.|
| | | | **Signature:** |
| | | | `function(event:object) => void` |
| | | | *event:* `Click` event targeting the deleteIcon element. |
|style| `Object` | | Override the inline-styles of the root element.|
