### Prerequisites
You must have [node.js](http://nodejs.org/) and npm installed before going further.

* [Gulp](http://gulpjs.com/) - The streaming build system
* [Bower](http://bower.io/) - A package manager for the web

### Installation
You can get started by cloning this project:

```
git clone git@github.com:AC-CodeProd/e-commerce.git
cd e-commerce
```

You can install dependencies by simply run the following command:

```
npm install
```

### Run the project 

**Development**

Once the installation is done, just run:

```
gulp
```
**Test**

For running unit tests one time then exit, just run:
```
gulp test:unit
```
Run end-to-end tests inside the test/e2e folder with protractor.**Note that you need to have the application running in order to run e2e tests. You can launch this task from another terminal instance.**
```
gulp test:e2e
```

**Production**

Once the development is done, just run:

```
gulp build
```

Enjoy ! =)