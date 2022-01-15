# General Assembly - project 3
# Burnt Toast - MERN stack - film review site
The live project: [Burnt Toast](http://burnt-toast-ga.herokuapp.com/)

Collaboators: [Kirtan](https://github.com/kirtanp8) & [Shak](https://github.com/Shak-H)

### Timeframe: 10 days

<details>
  <summary>Goals</summary>
  <p>In the teams of three we’ve assigned you, build a full stack application.</p>
  <p>Use MERN stack - MongoDB, Express, React.js & Node.</p>
  <p>Include CRUD operations.</p>
  <p>For a challenge - include Authentication.</p>
  <p>Use SASS for styling</p>
  <p>For a challenge include one or more dependencies for React libraries</p>
  <p>It can be a direct clone of, or inspired by, an existing website.</p>
  <p>Make wireframes as well as a written plan in order for us to sign you off.</p>
</details>

<details>
  <summary>Overview :bulb:</summary>
  <p>Movie review website, on some level modeled after Rotten Tomatoes.</p>
  <p>Fully functional MERN stack application.</p>
  <p>CRUD operations - create, view, update and delete films on the database. </p>
  <p>+ Rate films others have posted.</p>
  <p>+ Add comments and ‘Like’ comments on particular films.</p>
  <p>Includes Authentication (Register / Login & perform restricted actions when logged in)</p>
  <p>Consistent styling throughout, achieved mainly with SASS.</p>
  <p>
    Two React libraries utilised - React-Reveal for some subtle animations and React-Bootstrap for some component styling, including a carousel that displays all       movies in the database (including new additions)
  </p>
  <p>Responsive design (works on a range of screen sizes)</p>
</details>

<details>
  <summary>Tech :gear:</summary>
  <ul>
    <li>
      <details>
        <summary>Frontend - React & Sass - 50% :</summary>
        <ul>
          <li>The client facing APP.</li>
          <liComponents of all shapes and sizes for getting and displaying data.></li>
          <li>Helper functions (configurable blueprints for sending requests).</li>
          <li>Various pages on which components are rendered.</li>
          <li>Index.js where the client facing app is injected into the document root (an HTML file).</li>
          <li>Positioning, fonts & colouring.</li>
          <li>Responsive design (media queries).</li>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary>Backend (JavaScript / MongoDB / Express / Node) 50% :</summary>
        <ul>
          <li>Configuration (the environment, the routes (endpoints) & secure routes</li>
          <li>Controllers (functions which handle incoming requests)</li>
          <li>Models - Exported schemas for data which will be added - this includes any relationships (embedded and reference relationships)</li>
          <li>db - contains data and seeds.</li>
        </ul>
      </details>
    </li>
  </ul>
</details>

<details>
  <summary>Approach :desktop_computer: :arrow_right: :desktop_computer:</summary>
  <div>
    <h3>Beginning - planning :</h3>
    <p>
      Immediately we set up a Trello board. We started with written plans for the front and backend respectively.
      <ul>
        <li>
          Backend plan: we listed the necessary schemas, controllers, routes, secure routes and described the index, environment and database we would be building.
        </li>
        <li>
          Frontend plan: we described the project, components and pages. - we also used wireframes as a visual aid and included those in the Trello board.
        </li>
      </ul>
    </p>
    <p>We then added three lists - ‘to do’, ‘in progress’, ‘done’ - in order to track progress.</p>
    <p>
      Once we had established the mongo database it was time to begin work on the backend code, starting with the environment & index - closely following the notes       we made during the previous segment of the course.
    </p>
    <p>
      We built the models we felt were necessary to deliver and MVP and established the required relationships. - My Teammate Shak largely took ownership over             this step as he was keen to practice it. 
    </p>
    <p>
      We then began writing controllers and routes simultaneously and testing them using Insomnia (analogous to postman which you also may be familiar with).             Testing in this way allows us to ensure our requests, our routes and our controllers are fully functional before starting work on the front end.
    </p>
    <p>
      We began work on the frontend once we were able to make the fundamental requests and get the appropriate errors returned if we did not provide a valid               authorization token. These specified requests were as follows: 
      <ul>
        <li>
          (POST) Register a user, Login, get the user data, add a movie to the database, (GET) get the data for one or all of the movies, (PUT) edit a movie,                 (DELETE) delete a movie.
        </li>
      </ul>
    </p>
  </div>
  <div>     
    <h3>Middle - bulk of the project :</h3>
    <p>
      Just before we began work on the frontend, an update was made to the react-router-dom architecture, which introduced a bonus challenge - to correctly               implement the new system we were unfamiliar with.
    </p>
    <p>
      We created a ‘helpers’ folder containing configurable callback functions for making our requests. In this way your request functions can all be located             and edited fairly easily if necessary down the line.
    </p>
    <p>
      Our thorough plan gave us a clear overview of the pages and components we would have to build for our MVP and we made quick progress with those -                   building out things like the navigation bar and the footer which would be seen on every page - then the register and login form which we used to retest             our requests and routes, successfully.
    </p>
    <p>
      The home page (carousel of movies within the database which is updated live) was challenging and I took ownership over that component, having worked               with the react bootstrap library in the past. 
    </p>
    <p>
      My Teammate Kirtan built a brilliant search bar system, utilising what he’d learned on his previous project.
    </p>
    <p>
      Building out things like the ‘movies’ page felt easy and went smoothly overall.
    </p>
  </div>
  <div>
    <h3>End - polishing & testing :</h3>
      <p>
        The later stages of the process involved adding to the backend. Shak and I worked out what kind of schemas and relationships we would need to allow a               logged in user the ability to comment on a movie and like existing comments. 
        <img src=https://user-images.githubusercontent.com/89402596/149163175-9747ba59-20d5-4359-97da-ef079aebd727.png />
      </p>
      <p>
        We had to write complex controllers for those operations, testing them on insomnia. Writing the controllers for liking and unliking a comment on a film             was especially challenging, grappling with the logic until It worked on insomnia was a satisfying process. - I took ownership over this logic.
        <img src=https://user-images.githubusercontent.com/89402596/149163006-10c58fb4-1456-4cfb-b9d7-8137572249fa.png />
      </p>
      <p>
        I then began work on the front end, which turned out to be even more challenging funnily enough. I was able to make the commenting system work in time             for the presentation but the like / unlike system still needed some small tweaks. - I felt there was room for improvement. 
      </p>
      <p>
        We then styled the project, finding fonts, a logo, and a color scheme that we felt suited the project. I took ownership over much of this stage of the             process. I found and implemented a second React library called react-reveal, which allowed me to include simple animations on all of the sites forms,               giving the site a slightly more dynamic feel. 
      </p>
  </div>
</details>

<details>
  <summary>Personal contributions (code) Backend:</summary>
  <p>Models - Embedded relationship within an embedded relationship</p>
  <img src=https://user-images.githubusercontent.com/89402596/149164171-fd62b783-5fb6-4312-9e3c-63f16f4af8c8.png />
  <p>Controllers - Add or delete a film rating</p>
  <img src=https://user-images.githubusercontent.com/89402596/149163897-88bff672-c882-4bc4-b35f-79822c9b5b32.png />
  <p>Controllers - Like an existing comment:</p>
  <img src=https://user-images.githubusercontent.com/89402596/149163671-3cb63059-1683-40b6-8846-0c87cf731905.png />
</details>

<details>
  <summary>Personal contributions (code) Frontend:</summary>
  <p>'helpers' - exported functions for making requests: </p>
  <img src=https://user-images.githubusercontent.com/89402596/149167174-2d9a1477-d0a3-428f-92e3-603269073dab.png />
  <br>
  <img src=https://user-images.githubusercontent.com/89402596/149167680-629b7dd0-74fd-4117-b680-afa2a16efc23.png />
  <p>
    Building a Carousel of all movies in the database at any given time. -- To do this make a request for all films in the database saving them to a stateful variable assigned an array of objects (films) -> map over this array of films -> create an instance of a 'Slide' component passing the individual film object as React props
  </p>
  <img src=https://user-images.githubusercontent.com/89402596/149164991-81944899-56b6-4c81-af85-50eb36e8b1b1.png />
</details>

<details>
  <summary>Visuals</summary>
  <p>Homepage :</p>
  <img src=https://user-images.githubusercontent.com/89402596/148926456-b9cdac8c-4c9d-413a-8e50-b6dc8bad171d.png />
  <p>View all films :</p>
  <img src=https://user-images.githubusercontent.com/89402596/148926563-8da54d73-2fce-48e3-8526-58cef765d67d.png />
  <p>View one film: </p>
  <img src=https://user-images.githubusercontent.com/89402596/148926681-6cb50114-fe97-4359-b5f5-b48506d84d70.png />
  <p>Add a film :</p>
  <img src=https://user-images.githubusercontent.com/89402596/148926730-fe21e5de-aba1-4690-b820-c2ce763f6f5f.png />
  <p>Profile page :</p>
  <img src=https://user-images.githubusercontent.com/89402596/148926800-2fb00561-71fb-4ab8-b4e4-78267df857a9.png />
</details>

<details>
  <summary>Key learnings :open_book:</summary>
  <ul>
    <li>Planning is everything.</li>
    <li>Create and populate a mongo database + working with express and node.</li>
    <li>Adapt when using newly updated architectures (react-router-dom)</li>
    <li>SASS makes for more readable and reusable CSS.</li>
    <li>React Reveal for simple animation of any component.</li>
    <li>Heavily customised react-bootstrap components can cause issues, be sure to allow time to achieve and test the intended effect.</li>
  </ul>
</details>

<details>
  <summary>Challenges & Wins :chart_with_upwards_trend:</summary>
  <ul>
    <li>
      Time management - packing as many features in as possible but making sure they all work effectively, removing the ones I couldn’t polish before                     deadline.
    </li>
    <li>Writing the logic for liking a comment was more complex than it sounds. I am yet to perfect the system.</li>
    <li>Creating working media queries to make an app fully responsive is no joke, this takes time and attention.</li>
    <li>
      Properly implementing useEffect() while working with props and components that instantiate inner components. (When you like a comment on a movie - it should       be updated live and the like button should become an unlike button in that moment, without refreshing the page). 
    </li>
  </ul>
</details>

<details>
  <summary>Possible future improvements</summary>
  <ul>
    <li>View other users profiles.</li>
    <li>Like button fully functioning + add like button to movies as well as comments.</li>
    <li>More interesting home page (possibly a list of the top-rated movies at that time). </li>
    <li>Improved styling - currently feels clunky and outdated.</li>
    <li>Media queries need considerable work.</li>
    <li>Forms could appear in pop ups instead of on separate pages.</li>
  </ul>
</details>

<details>
  <summary>Bugs</summary>
    <p>Some of the styling doesn’t work well when resizing the page (text jumps out of buttons and elements are laid on top of eachother)</p>
    <p>The Like button allows you to like a comment more than once.</p>
</details>
