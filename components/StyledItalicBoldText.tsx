import * as React from "react";

import { Text, TextProps } from "./Themed";

export function BoldItalicText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: "ubuntu", fontWeight: "bold", fontStyle: "italic" },
      ]}
    />
  );
}
