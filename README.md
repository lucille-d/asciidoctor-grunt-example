# asciidoctor-grunt-example

The goal of this example is to showcase  documentation generation with [AsciiDoctor](http://asciidoctor.org/ "AsciiDoctor") and Grunt.

## Installation

1. Clone the repository
2. From the root folder, run `npm install` to install the dependencies
3. To generate the documentation, run `grunt`


## Features

See the [Grunt file](./Gruntfile.js) for the full configuration.
The example serves the following purposes:
* generating html documentation the _adoc_ files from the _doc/_ folder to the _build/_ folder
* copying the images used in the documentation into the _build/_ folder
* copy the stylesheet into the _build/_ folder
* highlight the syntax of code snippet inside the documentation

## Asciidoctor options

### in [Gruntfile.js](./Gruntfile.js)
* `header_footer: true`
* `safeMode: 'safe'`
* `attributes: 'linkcss'`


### in [index.adoc](./doc/index.adoc)
* `:toc: right`
* `:icons: font`
* `:nofooter:`
* `:imagesdir: images`
* `:source-highlighter: highlightjs`
