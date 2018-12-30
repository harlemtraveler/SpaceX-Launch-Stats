[_metadata_:title]:- "SpaceX Launch Stats"
[_metadata_:author]:- "Mr. Robot"
[_metadata_:date]:- "December 27, 2018"

# SpaceX Launch Stats

This is a simple application that uses the publicly available SpaceX API to provide Launch information for each mission. This is a Read Only project, so full CRUD is not available. The project was created with Apollo, GraphQL, React, Node.JS, and associated dependencies. Please excuse if there're any typos in the README.md document. This is an initial draft just to provide information and citations. If you have any questions, concerns, or recommendations, please feel free to message me. Thanks!

### Demo

[SpaceX Launch Stats](https://spacex-launch-stats-app.herokuapp.com/)

### Tutorial

**Course:** [GraphQL With React & Apollo | Express GraphQL Server](https://www.youtube.com/watch?v=SEMTj8w04Z8)
* **Instructor:** Brad Traversy
* **Duration:** 1 hour 42 minutes 1 second on-demand videos
* **Skill level:** Intermediate Level
* **Students:** N/A
* **Languages:** English
* **Lectures:** 4

## Getting Started

To follow this tutorial, simply click this [link](https://www.youtube.com/watch?v=SEMTj8w04Z8).

### Prerequisites

To run this project, you'll need the following:
* A text-editor (Atom, Sublime Text, VS Code, etc)
* JavaScript Enabled on your device
* Node.JS
* React.JS
* NPM - Node Package Manager
* create-react-app
* An internet connection

### Installing

Please reference the associated links for each dependency package:

[Node.JS](https://nodejs.org/en/download/)
[React](https://reactjs.org/docs/getting-started.html)
[NPM](https://docs.npmjs.com/getting-started/)
[Create React App](https://teamtreehouse.com/library/installing-and-using-create-react-app)

## Running the tests

No test required

## Deployment

Once development is complete you need to deploy the application. For the  purpose of this demo, we'll deploy to Heroku. You will need to have a Heroku account and the Heroku CLI installed prior to deployment.

For our React frontend to work with the GraphQL-Apollo backend on Heroku, we need to *build* the React frontend into a *public* directory within our GraphQL-Apollo backend server.

Add the following script to the *package.json* file located in the */client* directory(**It's VERY important that you're in the __/client__ directory**):

```
"build": "react-scripts build && mv build ../public"
```

Now, while still within the */client* directory, run the following command to build the React frontend for deployment:

```
npm run build && cd ..
```

The above command will navigate you back to the root of the application after it finishes running the build script.

The next step is to login Heroku via Heroku CLI and create a new application and link the local repository to the new remote Heroku repository. Run the below command and enter your Heroku credentials:

```
heroku login
```

Now createthe new Heroku application. You can specify a name for the application by replacing *<optional-app-name-here>* in the command below with your desired name, or you can leave out the option (represented by the placeholder text: *<optional-app-name-here>*) and let Heroku generate a random name for you:

```
heroku create <optional-app-name-here>
```

Now we have to link the local repository to the remote Heroku repository. To do this, follow the below instructions:

### Link Local Repository to Heroku Remote Repository:

#### Quick Instructions to Link:

```
Heroku git:remote -a <your-application-name-here>
```

#### Detailed Instructions to Link:

* Navigate to the Herkou webpage and login your account.
* Locate the new app you just created in the Heroku CLI and click into it.
* In the menu tab for the Heroku application, select *Deploy*.
* Copy the line within the instructions that begins with (replace *<your-application-name-here>* with your application's name):

```
Heroku git:remote -a <your-application-name-here>
```

### Push Changes to Remote Heroku Repository

* Paste the command into your Terminal (while still within the root of the application).
* Stage and Commit any lingering changes within the local repository:

```
git add .
git commit -m 'Commit changes remaining for Heroku deployment'
```

* Push local repository to remote Heroku repository:

```
git push heroku master
```

* Deployment complete!

### View Your Application

Upon successful deployment, the Heroku CLI will return a link to the deployed application in the Terminal. You can either copy/paste this link in your browser, or simply run the following command in Terminal:

```
heroku open
```

## Built With

**Device:**
* [JavaScript]
* [Node.js]
* [React.js]
* [GraphQL]
* [Apollo]
* [Atom - Text Editor]

## Authors

* **Timothy Keaveny** - *Initial work* - [Express GraphQL Server](https://github.com/harlemtraveler/SpaceX-Launch-Stats)

See also the list of [contributors](https://github.com/harlemtraveler/SpaceX-Launch-Stats/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Again, a huge thank you to [Brad Traversy](http://www.traversymedia.com/). Your tutorials are hands down the most compatible with my learning style. Keep it up!
