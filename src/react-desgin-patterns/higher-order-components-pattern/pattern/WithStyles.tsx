import React from "react";

export default function WithStyles(Component: React.ComponentType<any>) {
  return (props: { [key: string]: any }) => {
    const style = { padding: 10, margin: 10 };
    return <Component style={style} {...props} />;
  };
}
