# MERN file upload S3

https://github.com/coding-to-music/mern-file-upload-s3

https://mern-file-upload-s3.herokuapp.com/

By Krishan Sharma https://github.com/Krishan27

https://github.com/Krishan27/MERN_FILE_UPLOAD_AWS_S3

## local setup

```java
npm run dev
```

Output:

```java

> mern-file-upload-s3@0.1.0 dev
> concurrently "react-scripts start" "nodemon ./bin/www"

[1] [nodemon] 2.0.4
[1] [nodemon] to restart at any time, enter `rs`
[1] [nodemon] watching path(s): *.*
[1] [nodemon] watching extensions: js,mjs,json
[1] [nodemon] starting `node ./bin/www`
[1] MongoDB Connected...
[0] ℹ ｢wds｣: Project is running at http://0.0.0.0:3000/
[0] ℹ ｢wds｣: webpack output is served from
[0] ℹ ｢wds｣: Content not from webpack is served from /mnt/volume_nyc1_01/mern-file-upload-s3/public
[0] ℹ ｢wds｣: 404s will fallback to /
[0] Starting the development server...
[0]
[0] Browserslist: caniuse-lite is outdated. Please run:
[0] npx browserslist@latest --update-db
[0] Compiled with warnings.
[0]
[0] ./src/components/NewFileUpload.js
[0]   Line 45:13:  'description' is assigned a value but never used   no-unused-vars
[0]   Line 45:26:  'selectedFile' is assigned a value but never used  no-unused-vars
[0]
[0] ./src/components/FileUpload.js
[0]   Line 46:55:  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank
```

## Error I am getting on Heroku

```java
2022-03-21T07:21:51.000000+00:00 app[api]: Build succeeded
2022-03-21T07:21:59.934782+00:00 heroku[web.1]: Starting process with command `npm start`
2022-03-21T07:22:01.609173+00:00 app[web.1]:
2022-03-21T07:22:01.609203+00:00 app[web.1]: > mern-file-upload-s3@0.1.0 start
2022-03-21T07:22:01.609203+00:00 app[web.1]: > react-scripts start
2022-03-21T07:22:01.609203+00:00 app[web.1]:
2022-03-21T07:22:03.526805+00:00 app[web.1]: ℹ ｢wds｣: Project is running at http://172.17.208.118/
2022-03-21T07:22:03.526967+00:00 app[web.1]: ℹ ｢wds｣: webpack output is served from
2022-03-21T07:22:03.527102+00:00 app[web.1]: ℹ ｢wds｣: Content not from webpack is served from /app/public
2022-03-21T07:22:03.527151+00:00 app[web.1]: ℹ ｢wds｣: 404s will fallback to /
2022-03-21T07:22:03.527268+00:00 app[web.1]: Starting the development server...
2022-03-21T07:22:03.527269+00:00 app[web.1]:
2022-03-21T07:22:03.683352+00:00 heroku[web.1]: Process exited with status 0
2022-03-21T07:22:03.738166+00:00 heroku[web.1]: State changed from starting to crashed
2022-03-21T07:22:03.746741+00:00 heroku[web.1]: State changed from crashed to starting
2022-03-21T07:22:12.211716+00:00 heroku[web.1]: Starting process with command `npm start`
2022-03-21T07:22:13.671041+00:00 app[web.1]:
2022-03-21T07:22:13.671057+00:00 app[web.1]: > mern-file-upload-s3@0.1.0 start
2022-03-21T07:22:13.671057+00:00 app[web.1]: > react-scripts start
2022-03-21T07:22:13.671057+00:00 app[web.1]:
2022-03-21T07:22:15.618915+00:00 app[web.1]: ℹ ｢wds｣: Project is running at http://172.16.46.178/
2022-03-21T07:22:15.619117+00:00 app[web.1]: ℹ ｢wds｣: webpack output is served from
2022-03-21T07:22:15.619244+00:00 app[web.1]: ℹ ｢wds｣: Content not from webpack is served from /app/public
2022-03-21T07:22:15.619295+00:00 app[web.1]: ℹ ｢wds｣: 404s will fallback to /
2022-03-21T07:22:15.619419+00:00 app[web.1]: Starting the development server...
2022-03-21T07:22:15.619420+00:00 app[web.1]:
2022-03-21T07:22:15.782648+00:00 heroku[web.1]: Process exited with status 0
2022-03-21T07:22:15.858244+00:00 heroku[web.1]: State changed from starting to crashed
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
