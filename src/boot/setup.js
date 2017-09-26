import * as React from "react";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";
export interface Props {}
export interface State {}
export default class Setup extends React.Component<Props, State> {
	render() {
		return (
			<StyleProvider style={getTheme(variables)}>
				<App />
			</StyleProvider>
		);
	}
}
