import * as React from "react";

import { Text, TextProps } from "./Themed";

export function ItalicText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "ubuntu", fontStyle: "italic" }]}
    />
  );
}
