# @acpaas-ui/ngx-components/flyout

This module has the FlyoutModule already implemented on a button, giving it a dropdown / flyout functionality.

## Dependencies
* `@acpaas-ui/ngx-components/flyout`

## Usage

```javascript
import 'FlyoutButtonModule' from '@acpaas-ui/ngx-components/flyout'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Flyout button module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() align: string;` | `left` | The alignment of the flyout-zone. This can be `left` or `right` |
| `@Input() icon: string;` | empty | Add a Font Awesome icon to the button. |
| `@Input() label: string;` | empty | Add a label to the button. |
| `@Input() title: string;` | empty | Add a title attribute to the button. |
| `@Input() buttonSize: FlyoutButtonSize;` | `auto` | Defines the size of the flyout button, use it with a string or with the ButtonSize enum. Available options are `tiny`, `small`, `regular` and `large`. |
| `@Input() size: FlyoutSize;` | `auto` | By default a flyout doesn't have a fixed width and will wrap around its content. However, you can set an optional size (via string or FlyoutSize enum). Available options are `auto`, `small`, `medium`, `large` and `full`. |
| `@Input() outline: boolean;` | `false` | Give the button a outlined styling. |

#### Example

```
import { FlyoutButtonModule } from '@acpaas-ui/ngx-components/flyout';

@NgModule({
	imports: [
		FlyoutButtonModule
	]
});

export class AppModule {};`
```

```
<div auiFlyout size="small" align="left">
    <button auiFlyoutAction>Open flyout</button>
    <div auiFlyoutZone>
        <p>Hello world!</p>
        <button auiFlyoutClose>Close flyout</button>
    </div>
</div>
```

```
	<aui-flyout-button
		icon="fa fa-user"
		label="Open flyout"
		align="right"
		title="Click to open!"
		outline=true
		flyoutSize="small"
		buttonSize="large">
		<div class="u-margin">
			<p>Hello world!</p>
		</div>
	</aui-flyout-button>
```

```
<!-- FlyoutButtonSize enum example -->

// Controller
import { FlyoutButtonSize } from '@acpaas-ui/ngx-components/flyout';

public sizes = FlyoutButtonSize;

// Template
<aui-flyout-button [size]="sizes.Small">...</aui-flyout-button>
```

## Contributing

Visit our [Contribution Guidelines](./contribute.md) for more information on how to contribute.