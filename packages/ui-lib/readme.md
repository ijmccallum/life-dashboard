# UI Library React / expo / nodegui-react

Creates UI components that can be used by both Expo and nodegui-react. This is how those two systems work on their own:

UI components

import { Renderer, View, Text, Window } from "@nodegui/react-nodegui";


|        | react-nodegui | expo | ui-lib |
|--------|---------------|------|--------|
| Window | x             |      |        |
| View   | x             |      |        |
| Text   | x             |      |        |
|        |               |      |        |
|        |               |      |        |
|        |               |      |        |
|        |               |      |        |
|        |               |      |        |

**Expo**

```jsx
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});

<View style={styles.container}>
<Text style={styles.container}>
```

**nodegui-react** 

```jsx
import { Text, View } from "@nodegui/react-nodegui";

const styles = "background-color: #fff;"

<View style={styles}>
<Text style={styles}>
```

---

Any system will have to pass it's own `Text` and `View` components to this UI lib. These system specific components will be passed css as an object, they must be able to handle this / translate it into whatever format they require.

**ui-lib**

The ui lib assumes that the passed in `Text` component can handle css as an object.

```jsx
const PageHeading = (Text) => {
  <Text style={{backgroundColor: '#fff'}}>{children}</Text>
}
```

**Expo**

The ExpoText component receives this css as an object and passes it through the react-native StyleSheet function before passing it onto the react-native `Text` component.

```jsx
import { Text, StyleSheet } from 'react-native';
import { PageHeading } from "ui-lib";

const ExpoText = (style) => {
  const styleBuilder = (cssObj) => {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff'
      },
    });
    return styles.container;
  }
  return <Text style={styleBuilder(cssObj)}>
}

<PageHeading Text={Text}>Page Heading</PageHeading>
```

**nodegui-react** 

The NodeGuiText component receives this css as an object and translates it into a plain css string (somehow) before passing it on to the react-nodegui `Text` component..

```jsx
import { Text } from "@nodegui/react-nodegui";
import { PageHeading } from "ui-lib";

const NodeGuiText = (style) => {
  const styleBuilder = (cssObj) => {
    //cssObj to cssString
  }
  return <Text style={styleBuilder(cssObj)}>
}

<PageHeading Text={NodeGuiText}>Page Heading</PageHeading>
```

---

So 

