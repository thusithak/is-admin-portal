

# Identity Server - Admin Portal

&nbsp;
&nbsp;

## Table of Contents

- [Requirements](#requirements)
- [Installing the App](#installing-the-app)
- [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)

&nbsp;

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v8.0.0

    $ npm --version
    5.0.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---
&nbsp;
## Installing the app

    $ git clone https://github.com/thusithak/is-admin-portal.git
    $ cd is-admin-portal
    $ git checkout non-webpack-based
    $ npm install




&nbsp;

## Running the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

&nbsp;

## Folder Structure

After creation, your project should look like this:

```
is-admin-portal/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    AdminPortal.js
    index.css
    index.js
```

&nbsp;
&nbsp;
