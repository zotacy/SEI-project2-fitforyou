Fit For You App

REQUIREMENTS- Project 2- Fit For You
A README.md file with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc. Inside Your 

Goal: Fit For You is an app for athletes! With Fit For You, people will be able to create a personal profile where they can keep track of workouts that they create. These workouts will be organized by their categories to make them easy to find. Eventually people will be able to share thier workouts with a close group of friends also on the app.

Project Links
   - Deployed: https://fitforyou.herokuapp.com/
   - Heroku: https://dashboard.heroku.com/apps/fitforyou
   - GitHub Repo: https://github.com/zotacy/SEI-project2-fitforyou

Technologies Used
- Javascript, CSS
- MVC Organization
- Node.js, Express.js, Postgres/ Sequelize
- GitHub/Git, Heroku

User Stories:
1. I want to have an understanding of what the web-app is about on the homepage.
2. I want to be able to create an account.
3. I want to be able to login/logout of my account.
4. When logged in, I want to be able to make new workouts.
5. When logged in I want to be able to view my workouts.
6. When logged in I want to be able to edit/delete my information and my workout information.
7. I want my information organized so that I can access it easily and by category.
8. I want the UI to be fluid and know where information is stored without needing additional directions.
9. I want to be able to connect with other users and share workouts (STRETCH GOAL).
10. I want to be able to make my account public or private (STRETCH GOAL).

Wireframes
   Lucid Chart (SQL Tables)- https://lucid.app/invitations/accept 94634b63-8457-43fe-bb32-4273a89c122a

MVP
   - Routes: Homepage, User Profile; create new Workout, view Workouts, edit workouts.
   - Render data each page and route
   - Basic functionalities to create and account, create workouts and access workouts.
   - Basic CSS styling.

PostMVP
   - Add storage & security for user account
   - Accounts can be private/public (anyone can see public workouts, eventually request friends, etc.)
   - Improve how workouts and exercises are routed and organized on the page. Add functionality for when and how they appear.
   - Improve CSS Styling
   - Add workout count to each category for easy, moderate, hard


Additional Libraries
   - Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

Code Snippet
- Code snippet used to create one of the boxes that store workouts in workouts.ejs
<div class= workoutItems>
   <h3>Running</h3>
   <% for(let i=0; i<workouts.length; i++) { %>
         <% if (workouts[i].exerciseId === 1) { %>
         <li>
            <a href="/users/profile/<%=user.id%>/workouts/<%=workouts[i].id%>"> <%= workouts[i].activity_name %> </a>
         </li>
         <% } %>
   <% } %>
</div>

Issues and Resolutions
    
SAMPLE.....
    ERROR: app.js:34 Uncaught SyntaxError: Unexpected identifier
    RESOLUTION: Missing comma after first object in sources {} object
