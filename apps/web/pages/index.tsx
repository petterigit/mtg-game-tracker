import { MyComponent, defineCustomElements } from "ui-components-react";

defineCustomElements();

export default function Web() {
	return (
		<div>
			<h1>Web changing h1 here</h1>
			<MyComponent first="aaa" middle="beeee" last="ree" />
		</div>
	);
}
