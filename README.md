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
      We pair coded and group coded regularly using VS.code liveshare and I tested routes often, using Insomnia (analogous to postman which you also may be familiar       with). Testing in this way allows us to ensure our requests, our routes and our controllers are fully functional before starting work on the front end.
      <img src="https://user-images.githubusercontent.com/89402596/149984176-48405186-afcf-41fa-8d5b-1e87350ab706.png" />
      <img src="https://user-images.githubusercontent.com/89402596/149984387-7c0b7345-8a66-4e47-9cca-d7f27d7d9893.png" />
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
