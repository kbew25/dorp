# Dorp Drupal Theme

## Setup (with dorp_theme_extras)
- Install, enable dorp_theme_extras module
- Download the Components module. `composer require drupal/components`
- Install the Components module. `drush en components -y`
- Clear caches
- Run `drush nt "[NEW NAME]"

## Setup (without dorp_theme_extras)
- Rename all files and folders with the word 'dorp' in it.
- Search within all files for 'dorp' and rename.
- Download the Components module. `composer require drupal/components`
- Install the Components module. `drush en components -y`
- Enable your new theme `/admin/appearance`

# Prerequisites
This theme assumes that you have:
- [Node](https://nodejs.org) >= 16.0.0
- Drupal [Component Library](https://www.drupal.org/project/components) module installed and enabled (to register and use custom Twig namespaces for Twig files in `src/` folder - see `dorp.info.yml` file)

# QuickStart
First you'll need to install all required packages for the theme and core:

If this is the first time installing the theme, run:
```bash
$ cd themes/custom/dorp/
$ yarn run setup
```
This will update the packages and then run install.

Otherwise just run install:

```bash
$ cd themes/custom/dorp/
$ yarn install
```

To install core modules run:

```bash
$ yarn run install:core
```

To update the packages only, run:
```bash
$ yarn run upgrade
```

# Commands
This theme uses yarn only.

## Compile everything:
```bash
$ yarn run build
```

This command will run the following scripts:
- `build:css` (compiles scss to css)
- `lint:js` (lints JS)
- `build:assets` (minifies theme images, svgs, icons)

## Compile CSS
```bash
$ yarn run build:css
```

This command will run the following scripts:
- `scsslint` (checks code in SCSS files against a set of rules defined in `.stylelintrc.json` file)
- `scss` (compiles SCSS files from `src` folder into a single `style.css` file placed in `dist` folder)
- `postcss` (adds vendor prefixes to `dist/style.css` file for target browsers defined in `.browserlistrc` file).

## Watch for changes:

### CSS:
```bash
$ yarn run watch:css
```

### All:
```bash
$ yarn run watch
```

This command will run css.

## Minify images:
```bash
$ yarn run images
```

This command will run the following scripts:
- `images:clean` (deletes all images from `dist/images` folder)
- `images:minify` (minifies all images from `src/assets/images` folder and places them in `dist/images`)


## SVGs:
All SVG icons should be placed in the `src/assets/icons` directory.

When `yarn run build` task is run, SVGs in that folder will be cleaned and optimised (all redundant and useless information will be removed, IDs and classes will be prefixed with the SVG filename or an arbitrary string, etc.) - these options are set in the .svgo.config.js file.

Optimised SVGs will be placed in the `dist/images` folder.

Thanks to a postcss task, it's possible to use those SVGs in stylesheets as encoded images, for example:
`background-image: svg-load('images/arrow-down.svg');`
will be compiled to:
`background-image: url("data:image/svg+xml;charset[....]");`

See [https://github.com/TrySound/postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) for further instructions on how to inline SVGs.


# Folder structure
```
|- src/
| |- abstracts/        # contains theme variables, functions & mixins
| |- assets/
| | |- icons/          # contains all SVG icons
| | └─ images/         # contains all theme images
| |- base/             # contains styling for basic elements - forms, text, headings, etc.
| |- components/       # each component folder contains its Twig, SCSS, and JS
| | └─ [...]
| |- patterns/
| | └─ [...]
| |- scripts/
| | └─ global.js       # theme's main JS file, contains globally used scripts that are not component-specific
| └─ style.scss        # theme's main sass file
|- dist/
| |- images/           # minified theme images
| └─ style.css         # compiled CSS
|- templates/          # Drupal twig templates. These will `@include` the templates found in `src/partials/components/`
|- .browserslistrc     # defines target browsers
└─ .stylelintrc.json   # SASS linting rules
```

# Grid framework
Developers choice! There's a flexboxgrid file which is optional.

# Browser support
This theme is set up to support 2 latest versions of browsers with global use > 0.5% (see `.browserslistrc` file).
If you want to check which browsers that includes, run:
```bash
$ npx browserslist
```
This data is used by different packages, such as autoprefixer and babel.

For more information see [browserlist npm package](https://www.npmjs.com/package/browserslist).

# Why "Dorp" you ask?
"Dorp" meaning “village” in Dutch, was the origin name of Drupal.
