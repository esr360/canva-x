# canva-x

* [Overview](#overview)
* [Installation/Setup](#installation-setup)
* [UI Modules](#ui-modules)
* [Theme](#theme)
* [To-Do's](#to-dos)

## Overview

> [See a live demo of this project (Chrome only!)](http://edmundreed.com/canva)

* Images can be dragged from the left hand gallery into the right hand canvas
* Images in the canvas can be re-arranged
* Uses HTML5 drag & drop API (please use Chrome for viewing)
* Built using my [`One-Nexus`](https://github.com/esr360/One-Nexus) boilerplate (which in turn is built using my [`Synergy`](https://github.com/esr360/Synergy) framework)
* React is used for presentational components (using [FSC's](https://javascriptplayground.com/functional-stateless-components-react/))
* Although React is used for presentational components, this is not a typical React SPA (no state/store)
* The UI can be configured via [`ui/themes/canva/theme.json`](https://github.com/esr360/canva-x/blob/master/src/ui/themes/canva/theme.json) ([learn more](#theme))
* Most of the magic happens thorugh the [EditorPane](https://github.com/esr360/canva-x/tree/master/src/ui/modules/objects/editorPane) module

### Grid Recursion

Given the limitations in both time and scope, the experienced I ended up creating (as a POC) takes the pattern from the provided mockups and recurses it infinitely, so you would end up with something like:

<img src="http://edmundreed.com/canva/assets/images/infinite.png" width="600px">

This is achieved mostly through [clever use of CSS](https://github.com/esr360/canva-x/blob/master/src/ui/modules/objects/editorPane/editorPane.scss#L35), using [JavaScript to add the appropriate classes](https://github.com/esr360/canva-x/blob/master/src/ui/modules/objects/editorPane/editorPane.js#L42) when needed.

### React App

The prototype is a simple singe page formed up of three React components (`<Header>`, `<EditorNav>` and `<EditorPane>`):

```jsx
const Index = () => (
    <main>
        <Header />
        <EditorNav />
        <EditorPane />
    </main>
);

export default Index;
```

> [View Source](https://github.com/esr360/canva-x/blob/master/src/views/pages/index.jsx)

## Installation/Setup

* Built/tested using Node v6.11.4 

```bash
git clone https://github.com/esr360/canva-x.git
```

```bash
cd canva-x
```

```bash
npm install
```

```bash
npm start
```

http://localhost:3000/

## UI Modules

> UI modules are built using [Synergy](https://github.com/esr360/Synergy) to allow them to be configurable and scalable

* [Header](https://github.com/esr360/canva-x/tree/master/src/ui/modules/objects/header)
* [Button](https://github.com/esr360/canva-x/tree/master/src/ui/modules/elements/button)
* [EditorNav](https://github.com/esr360/canva-x/tree/master/src/ui/modules/objects/editorNav)
* [EditorPane](https://github.com/esr360/canva-x/tree/master/src/ui/modules/objects/editorPane)

## Theme

Any customizable/configurable aspects of the UI would in theory be controllable by [`ui/themes/canva/theme.json`](https://github.com/esr360/canva-x/blob/master/src/ui/themes/canva/theme.json):

```json
{
    "theme": {
        "colors": {
            "brand": {
                "brand-1": "#01c4cf",
                "brand-2": "#7d29e8"
            }
        },
        "header": {
            "background": {
                "gradient": {
                    "direction": "135deg",
                    "colors": ["brand-1",  "brand-2"]
                }
            }
        },
        "button": {
            "modifier(primary)": {
                "background": "white",
                "color": ["#COLOR", "greyscale", "grey-5"],
                "hover": {
                    "background": "darken(white, 5%)"
                }
            },
            "modifier(tertiary)": {
                "background": "rgba(black, 0.4)",
                "color": "rgba(white, 0.8)",
                "hover": {
                    "background": "rgba(black, 0.6)",
                    "color": "white"
                }
            }
        }
    }
}
```

Note that the theme is set via [`app.json`](https://github.com/esr360/canva-x/blob/master/src/app.json):

```json
{
    "app": {
        "ui": {
            "theme": "canva"
        }
    }
}
```

You can also overwrite theme-level configuration by passing values here:

```json
{
    "app": {
        "ui": {
            "theme": "canva",
            "modules": {
                "colors": {
                    "brand": {
                        "brand-1": "pink"
                    }
                }
            }
        }
    }
}
```

Now, regardless of your theme, the `brand-1` color would always be `pink`.

## To Do's

* Make responsive
* Add animation effects
* Fix cross-browser issues
* Address scaling of individual images in canvas