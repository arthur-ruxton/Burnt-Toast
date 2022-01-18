# General Assembly - project 3
# [Burnt Toast](http://burnt-toast-ga.herokuapp.com/) - MERN stack - film review site

Collaboators: [Kirtan](https://github.com/kirtanp8) & [Shak](https://github.com/Shak-H)

### Timeframe: 10 days

<details>
  <summary>Goals :dart:</summary>
  <p>In the teams of three we’ve assigned you, build a full stack application.</p>
  <p>Use MERN stack - MongoDB, Express, React.js & Node.</p>
  <p>Include CRUD operations.</p>
  <p>For a challenge - include Authentication.</p>
  <p>Use SASS for styling.</p>
  <p>For a challenge include one or more dependencies for React libraries.</p>
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
    <h3>Planning :</h3>
    <p>
      Immediately we set up a Trello board. We started with written plans for the front and backend respectively.
      <ul>
        <li>
          Backend plan: we listed the necessary schemas, controllers, routes, secure routes and described the index, environment and database we would be building.
        </li>
        <li>
          Frontend plan: we described the project, components and pages. - we also used wireframes as a visual aid and included those in the Trello board.
        </li>
          We then added three lists - ‘to do’, ‘in progress’, ‘done’ - in order to track progress.
        </li>
      </ul>
    </p>
    <img src="https://user-images.githubusercontent.com/89402596/149979693-9c0ab063-e8ef-4023-a320-8ffa8d3d6294.png">
  </div>
  <div>     
    <h3>Work split :</h3>
    <h4>Shak took ownership of :</h4>
    <ul>
      <li>Project Idea (a movie review website called burnt toast, based on rotten tomatoes)</li>
      <li>Backend setup (Implementing index.js, the environment & config, basic models & routes setup).</li>
      <li>Some route testing using insomnia.</li>
      <li>Some CSS - specifically positioning of elements in the header section.</li>
    </ul>
    <h4>Kirtan took ownership of :</h4>
   <ul>
      <li>The fairly complex search-bar feature.</li>
      <li>ALL Media queries.</li>
      <li>Some other CSS - helping Shaq with the header section, Profile-Page, ALL scrolling effects. </li>
      <li>Adding data to the database to help with testing.</li>
    </ul>
    <h4>I took ownership of :</h4>
     <ul>
       <li>Structural design & wireframes.</li>
       <li>Model relationships, routes & controllers for the more complex crud operations.</li>
       <li>Authentication (front and backend).</li>
       <li>Lots of route testing using insomnia.</li>
       <li>Seeding the database.</li>
       <li>Exported helper functions for making requests on the front end.</li>
       <li>All forms.</li>
       <li>Mapping over data to build dynamic components like the carousel.</li>
       <li>Most components and their styling for computer screens - using the SCSS system.</li>
       <li>Both libraries - being the only person familiar with Bootstrap & React Reveal at the time.</li>
       <li>Project deployment.</li>
      </ul>
  </div>
  <div>
    <h3>Building features :</h3>
    <h4>Backend Setup :<h4>
      <p>
        Establishing the Mongo database, then fundamental models, routes and controllers etc was all possible by closely following our notes, Shak - started us off         with the environment & index.js. <br>
        We pair coded and group coded regularly using VS.code liveshare and I tested routes often, using Insomnia (analogous to postman which you also may be               familiar with). Testing in this way allows us to ensure our requests, our routes & controllers are functional before starting work on the frontend.
        <img src="https://user-images.githubusercontent.com/89402596/149984176-48405186-afcf-41fa-8d5b-1e87350ab706.png" />
        <img src="https://user-images.githubusercontent.com/89402596/149984387-7c0b7345-8a66-4e47-9cca-d7f27d7d9893.png" />
      </p>
    <h4>Frontend Setup :<h4>  
      <p>
        I began work on the frontend once we were able to make the basic requests. 
        These requests were as follows:
        <ul>
          <li>(POST) Register a user, Login, add a movie to the database.</li>
          <li>(GET) get the users data, get the data for one or all of the movies.</li>
          <li>(PUT) edit a movie.</li>
          <li>(DELETE) delete a movie.</li>
        </ul>
      </p>
      <p>
        Just before I began work on the frontend, an update was made to the react-router-dom architecture, which introduced a bonus challenge - to correctly                 implement the new system I was unfamiliar with. <br>
        I created a ‘helpers’ folder containing configurable callback functions for making our requests. In this way the request functions can all be located and           edited fairly easily if necessary down the line.
      </p>
      <p><b>Examples of helper functions I wrote - backend:</b></p>
      <img src="https://user-images.githubusercontent.com/89402596/149986130-9d5cc629-7749-48fa-9e4c-753ec31a101b.png" />
    <h4>Frontend build :</h4>
      <p>
        Our plan gave us a clear overview of the components we would have to build for our MVP and I made quick progress there - building things like the nav bar           and the footer which would be seen on every page - then the register and login form. <br>
        Much of the logic for building these pages and components works in the same sort of way - request data from the database, map over it and display it                 appropriately. <br>
        The home page (carousel of movies within the database which is updated live) was challenging and I took ownership over that component too, having worked             with the react bootstrap library in the past. <br>
        Kirtan built a complex search bar system, utilising what he’d learned on his previous project - an outstanding feature of the frontend. 
      </p>
      <p><b>
        Carousel I built by mapping over objects in the database: 
        Code snippets - personal contributions - backend:
        <img src=https://user-images.githubusercontent.com/89402596/149164991-81944899-56b6-4c81-af85-50eb36e8b1b1.png />
      </b><p>
    <h4>Backend update:</h4>
      <p>
        Shak and I worked out which schemas and relationships we would need to allow a logged in user the ability to comment on a movie and like existing comments.         I wrote complex controllers for those operations, testing them on insomnia to make sure they worked. <br>
        I then hooked up the front end, which was surprisingly challenging. The like / unlike system still needs some small tweaks on the frontend. - I felt there           was room for improvement. 
      </p>
      <p><b>
        Schema relationships - embedded within embedded:
        <img src="https://user-images.githubusercontent.com/89402596/149988379-9357124a-a7ef-4882-863e-595a420b8384.png" />
      <b></p>
      <p><b>
        Example of controller for complex crud opperations :
        <img src="https://user-images.githubusercontent.com/89402596/149988786-29fa1c06-7a92-4662-b738-a3afe926cc3b.png" />
      </b></p>
  </div>
  <div>
    <h3>Styling :</h3>
    <p>
      Shaks name idea gave us the theme / colour scheme of the site. He did lots of tweaking on styling. 
      Kirtan wrote all media queries, scrolling effects and styles for features like the header and footer.
      I took ownership of :
      <ul>
        <li>The logo & typefaces</li>
        <li>Shaping / positioning most of the components.</li>
        <li>
          I found & implemented a second React library called Reveal, which allowed me to make simple animations on all of the forms, giving the site a slightly               more dynamic feel.
        </li>
    </ul>
    </p>
      <p><b>
        Example of imported files and nested rules using SCSS:
        <img src="https://user-images.githubusercontent.com/89402596/149990009-fbf61770-99de-4ae2-8fa5-c0ce7e5bb8f7.png" />
      </b></p>
  </div>
</details>

<details>
  <summary>Visuals :art:</summary>
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
  Planning is everything. <br>
  Create and populate a Mongo database + working with express and node. <br>
  Adapt when using newly updated architectures (react-router-dom). <br>
  SASS makes for more readable and reusable CSS. <br>
  React Reveal for simple animation of any component. <br>
  Heavily customised react-bootstrap components can cause issues, be sure to allow time to achieve and test the intended effect.
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
  <summary>Possible future improvements :flight_departure:</summary>
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
  <summary>Bugs :bug:</summary>
    <p>Some of the styling doesn’t work well when resizing the page (text jumps out of buttons and elements are laid on top of eachother)</p>
    <p>The Like button allows you to like a comment more than once.</p>
</details>
