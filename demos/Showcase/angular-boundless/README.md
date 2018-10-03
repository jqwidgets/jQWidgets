# create-jqwidgets-angular-app
Please refer to its documentation:
  - [Getting Started](https://github.com/jqwidgets/create-jqwidgets-angular-app/blob/master/README.md#getting-started) 
  - [jQWidgets Angular Documentation](http://www.jqwidgets.com/angular-components-documentation/)

This project is based on [Angular CLI](https://cli.angular.io/).

## Quick Overview
```sh
npm i -g create-jqwidgets-angular-app 

create-jqwidgets-angular-app my-app
cd my-app
npm start
```

Then open [http://localhost:4200/](http://localhost:4200/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## Getting Started

### Installation

Install it once globally:

```sh
npm install -g create-jqwidgets-angular-app
```

**Make sure you have the latest version of [Node](https://nodejs.org/en/) on your machine**.

### Creating an App

```sh
create-jqwidgets-angular-app my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── e2e
├── node_modules
├── src
├── .angular-cli.json
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── README.md
├── tsconfig.json
├── tslint.json
```

Subfolders are not shown in order to keep it short.<br>
Once the installation is done, you can run some commands inside the project folder:

### `npm start`
Builds the app in development mode and starts a web server. <br />
Open [http://localhost:4200](http://localhost:4200) to view it in the browser. <br />
The page will reload if you make edits.

### `npm run build`
Builds the app in production mode and stores it in the `dist/` directory.

### Adding other jQWidgets

This project will show you the `Angular jQWidgets Grid`. But of course you will want to use some other widgets too. <br />
For that you need to add their core files first. This is done in the `.angular-cli.json` file. <br />
Inside you will find a `scripts` property in which you must add the needed `jqx` core files. 

## Why Use This?

**If you’re getting started** with `jQWidgets` and `Angular`, using `create-jqwidgets-angular-app` is the easiest way to do this.  <br />
Just install, run and you will see an Angular jQWidgets Grid on your page. <br />
Then you can customize the project as much as you want, making something great.
