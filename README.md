# MVP-APP
This is going to be my solution for the full-stack assessment. As I am not a full-stack Java Script developer yet, I will not be able to build the back-end
with MongoDB, Express and Node.js, not to mention to contenerize my solution. 
To create an mvp-app my only option is to use Firebase, which I have already used
to create my [Fakebook](https://alexerdei73.github.io/fakebook/) app. I will use [reactfire](https://github.com/FirebaseExtended/reactfire) to connect [React](https://reactjs.org/) with [Firebase](https://firebase.google.com/). The app will show some parts of medical records, which are in a standardized format. 

## Protecting Data
The Firebase Auth product protects the data. If you want to try the app, you need to use the following credentials to login and get access to the data:

email: doctorAdmin@gmail.com
password: doctorAdmin

## First Solution Plan
The JSON objects, which I am supposed to use as data, are really huge and in a format, which is currently unknown for me. I plan to use a pre-written UI component set, which is designed for the data to visualise it. You can see it here [FHIR-UI](https://github.com/healthintellect/fhir-ui). These are React components, so this MVP app will be a React app. I will use Material UI as a first time user, because the UI components require this anyway. I will not build a back-end as I have never done it yet, so my chances are very little to be successful in the given time. I will use Firebase back-end and connect it to React with Reactfire as I have already done it. Firebase firestore is a great database, but I would need to write code, just to push the large JSON files there. Writting a JSON parser is out of possibility, so I will put some basic data from the objects to the database, so we can search by name or patient ID. The database will point to the JSON data files, which I will upload to Firebase storage. I will protect the data with Firebase Auth. As an MVP product I am trying to implement some basic search and patient personal data visualisation by the patient card UI component. If everything goes well, and the UI component is able to read the data from the given JSON objects, I will be able to provide an acceptable basic solution. It is of course front-end development instead of full-stack, but it will result a very simple MVP app.

## Further planning
I have played with the [FHIR-UI](https://github.com/healthintellect/fhir-ui) and managed to make their sample code work on my developer machine for the patient card component, both with their test data and the JSON objects, which are provided by the code challenge. This is very promising.
The usage of material components are still new for me and it looks a bit different from Bootstrap, which I have experience with. This can cause serious problems, because I have just a couple of days to create this solution.
Another good news is that the [Firebase_Realtime_Database](https://firebase.google.com/products/realtime-database) can import JSON files even from the console of the app. This is really great news, because it opens up the way to create a serious app with these tools. I will be unable to do this, but I try to demonstrate, how it is possible.

## Version Problems
The npm packages, which are in the dependancy tree, are legacy packages. Luckily everything seems to be working fine, but it seems we cannot use easily the newest material-ui packages and nothing seems to be a perfect fit for the newest React versions (>=18.0.0). Luckily everything seems to be working, although not without error messages. I should fix these, and it would be possible if I had more time. I will not do it for this version tough. When you try the code, you need to apply the following command to install the npm packages:

npm install --legacy-peer-deps

You can read about what the flag does [here](https://stackoverflow.com/questions/66239691/what-does-npm-install-legacy-peer-deps-do-exactly-when-is-it-recommended-wh)

## Indexing the Firestore Realtime Database
Although the JSON files can be uploaded, any search in the database is very expensive on data, because the objects are nested and huge. I need to add some basic index fields to make searching easier, otherwise the app runs out very quickly from the free tier of Firebase.

## Full Stack - Technical Assesment
Our tech teams are curious, driven, intelligent, pragmatic, collaborative and open-minded and you should be too.

## Testing Goals
We are testing your ability to rapidly prototype an application underpinned by good software engineering practises that demonstrate a broad range of skills within a full stack (front end, mid-tier and backend) from a blank canvas. You will need to use your intellect, creativity, judgement and be comfortable making decisions to produce a solution. Your solution does not need to be a complete applications but should demonstrate you understand how to build software with good software engineering practises.

You will have approximately 1 week to complete this task but can as much or as little time as you deem necessary to demonstrate your understanding of the problem, your range of skills and approach to problem solving.

Some successful candidates have spent as little as 3 hours whilst others have used the full week because they've enjoyed exploring different ideas, technologies and approaches.

## The Task
You are required to build a prototype healthcare application that presents a summary of the patients care record to a clinician in a healthcare setting using the data provided.

You will have approximately 1 week to complete this task and should focus on an MVP but you are free to take this as far as you wish.

## The Solution
Your MVP can use any of the following technologies along with **any frameworks, libraries you feel appropriate**:

- **Frontend** - Typecript/Javascript, React / Angular (Preferaably React)
- **Middleware Programming Languages** - Java / Python / JavaScript / Typescript
- **DBs** - MongoDB / MySql / Postgres / SQLServer Express / Filesystem

You should containerise your application using docker / docker-compose. 

## Context
[FHIR](/https://www.hl7.org/fhir/overview.html) is a popular standard within healthcare used by healthcare systems to exchange data and represent details of paitents in a standardised way. Some sample FHIR data has been generated in the data directory using a tool called [synthea](https://www.hl7.org/fhir/overview.html). 

As FHIR is a standard there may be many libraries and UI widgets you can use freely. Google is your friend.

## Submit your solution	
Create a public Github repository and push your solution including any documentation you feel necessary. Commit often - we would rather see a history of trial and error than a single monolithic push. When you're finished, please send us the URL to the repository.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
