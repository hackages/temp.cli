# Static Collection

The static collection is a flat list of all static assets to be imported into the portal. This
includes:

 - containers
 - features (shared dependencies: angular, themes)
 - pages
 - templates
 - widgets


The main dependencies for a *Launchpad* project are:

 - requirejs
 - config (requirejs config, etc)
 - [collection-universal](https://bitbucket.org/backbase/lpc-collection-universal)
 - [collection-retail](https://bitbucket.org/backbase/lpc-collection-retail) (if
   you selected the retail edition).
 - [theme-default](https://bitbucket.org/backbase/lpm-theme-default)

You can see the [bower.json](bower.json) to see this, and set the versions to depend on.


The collection is built with `bower`. To build the collection you can run:

```
mvn clean package
```

This is essentially a wrapper around `bower install`.

This section contains the static only artifacts that will be use to build the portal FE 
(inc pages, containers, widgets, themes, css and js etc).


To import the components, run:

```
./npm run import-collection
```

or on Windows:

```
npm.cmd run import-collection
```

> Running `./npm [OPTIONS]` inside `statics/collection` directory will run locally installed version of npm.  
> Running `npm [OPTIONS]` will run globally installed version of npm.

This uses the [`bb-cli`](https://github.com/Backbase/bb-cli/tree/nightly) (nightly)

You can see the [package.json](package.json) to see how it runs this script.

The import script will:

 - Load the bower dependency list.
 - Order the bower dependency list, so (for example) templates are imported before pages/containers.
 - Zip each bower dependency.
    - If no model.xml exists then one will be generated automatically, and the component will be
      imported as a "feature".
    - The version of each dependency will be taken from bower, and added to the model.xml as
      a property.
 - Upload the zip using portal's REST API.

See the [`bb-cli`](https://github.com/Backbase/bb-cli/tree/nightly) (nightly) for more documentation.


Imported components will be moved to the contextRoot specified in the `backbase.properties` files.
By default this is `statics/dist/itemRoot`. There you will find the imported components, imported into
`statics/dist/itemRoot/{item type}/[BBHOST]/{item name}`.

You can reference your components from the web at `$(contextRoot)/{item type}/[BBHOST]/{item name}`/


Install:
  - [`bb-lp-cli`](https://www.npmjs.com/package/bb-lp-cli) and the
  - [`bb-cli`](https://www.npmjs.com/package/bb-cli)


 1. Clone the component repository.
   - It doesn't matter where you clone it to. You can clone it anywhere to your computer.
 1. Install the bower components.
   - `cd <component>; bower install`
 1. Run the build.
   - `cd <component>; bblp build`
 1. In a separate window, run the importer.
   - `cd <component>; bb import-item -w`

Now any changes you make will rebuild the `/dist` and be automatically imported into your running
portal.



If you have a custom component (widget/container/etc) in a separate *git* respository, simply add
it to the bower.json as a dependency. You can even add entire collections of components following
the example of the `collection-universal`.



TL;DR: To develop a new widget/container/etc simply add it to your statics and include it in the
collection's bower.json.


In this example we'll override the login widget. But this process should work for any custom 
component.

---

 > **Note:** It's *not* recommend to override a Launchpad Component. It should only be done if you
 intend to have your changes merged back into the Launchpad Codebase, and you will then remove 
 the override.

---

 1. In the collection:
    - `cd statics/collection`
    - `mkdir widgets`
 1. Clone the component repository into your project.
   - `git clone git@bitbucket.org:backbase/lpw-widget-login-multifactor.git`
     widgets/widget-login-multifactor`
   - `cd .../widgets/widget-login-multifactor`
 1. Install the bower components.
   - `bower install`
 1. Run the build:
   - `bblp build`
 1. In a separate terminal, run the importer.
   - `cd widgets/widget-login-multifactor`
   - `bb import-item -w`
 1. To include the widget in the collection's import, add it to the bower.json:

```json
    ...
    "dependencies": {
      ...
      "widget-login-multifactor": "./widgets/widget-login-multifactor#100.0.0"
      ...
    }
    ...
    "resolutions": {
      "widget-login-multifactor": "100.0.0"
    }
```

Be sure that `bower.json` in your local version of `widget-login-multifactor` is defining version to be `100.0.0`(example, it can really be any valid semver)

Add `filesystem-bower-resolver` to [.bowerrc](http://bower.io/docs/config/) if it is not already there.

```
{
  ...
  "resolvers": [
    "filesystem-bower-resolver"
  ]
}
```

[Read more](https://github.com/Backbase/filesystem-bower-resolver) about setting up `filesystem-bower-resolver`


Now when you build and import the collection your widget will be included in the catalog.


1. You need to create a configuration project module in which you'll store all the configuration files including `requirejs.conf.js`

```javascript
'use strict';
/**
 * Project requirejs config file
 * @param  {object}     global    window
 * @param  {function}   factory function definition
 * @return {object}     requirejs configuration
 */
(function(global, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(global);
    } else if (typeof requirejs === 'function') {
        require.config(factory(global));
    }
}(this, function(global) {

    return {
        paths: {
            'module-custom-extended':  [
                // 'features/[BBHOST]/module-custom-extended/dist/scripts',
                'features/[BBHOST]/module-custom-extended/scripts'
            ]
        },
        packages: [
            'module-currencies-extended'
        ],
        shim: {

        }
    };
}));
```


There are a few options to add the newly created `requirejs.conf.js` file into the page. The recommended one is to create copy of `container-page-layout` in your project.

```
collection
  - src
      - project-name
        - config
        - container-page-layout
        - module-custom-extended
        - module-name
        - widget-name

```

- container-page-layout/config.xml

```xml
<bb:resources>
    <link rel="stylesheet" type="text/css" href="styles/base.css"/>
    <script type="text/javascript" src="scripts/main.js"></script>
    <script src="$(contextRoot)/static/features/[BBHOST]/config-extended/requirejs.conf.js"></script>
</bb:resources>
```

And the bower collection

```json
  "dependencies": {
    "collection-universal": "x.x.x"
    "collection-retail": "x.x.x",
    "config-extended" : "./src/project/config",
    "container-page-layout" : "./src/project/container-page-layout"
  }
```




Troubleshooting:
If you encounter the following error:

```bb import-collection: 'config-extended' it not on the list. Probably a name mismatch```

Try clean up the packages and import them back in.

```
rm -rf bower_components && bower cache clean && bower i && npm run import-collection
```

Also make sure you have the bower storage set to local, for example check the `.bowerrc` file for storage property.

```json
{
  ....
  "storage": {
      "packages":"target/bower_components_cache"
  }
  ....
}
```






The collection will have the `theme-default` installed by default (see [bower.json](bower.json)).

To create a custom theme, clone the
[theme-default](https://bitbucket.org/backbase/lpm-theme-default) into your
project into the `themes` directory. See the *Custom Components* section for details on how to install it into this project.

The [theme-default](https://bitbucket.org/backbase/lpm-theme-default) has more
documentation on how to build your theme.
