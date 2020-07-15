The Daily Lotto
  
  Description:  

Created by Team 4:
  - Mitchell -- github.com/MitchReed123
  - Mizue -- github.com/mobara121
  - Brittany -- github.com/bmagee2
  
  
App Features


App Endpoints

  Users: ~/user
  
        POST /signup        => Registers new user account
        POST /AdminSignUp   => Admin account added
        POST /login         => Logs in a user
        GET /               => Gets all users for Admin
        UPDATE/:id          => Admin & User can update user info
        DELETE/:id          => Admin & User can delete user profile

  Lottos: ~/lotto
  
        GET/            => Gets all lotto info
        POST/           => Inputs new data to DB
        GET/:id         => Gets an individual input by ID
        PUT/:id         => Updates a specific item in the DB by ID
        DELETE/:id      => Deletes a specific item in the DB by ID

  Destinations: ~/destination
  
        GET/            => Shows all the destinations available to on DB
        POST/           => Allows a user to post a new location that the Admin then can Delete/Update
        GET/:id         => Pulls specific Destinations to view
        PUT/:id         => Allows the Admin user to update/fix a location that was submitted to the table
        DELETE/:id      => Allows the Admin user to delete a location that is on the DB       
