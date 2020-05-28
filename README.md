# Subbit
## Hosted as well at www.subbit.net

### Subbit uses Ruby on Rails as a back end API and React for client side rendering


To run React client on port 3000, install dependencies and start
```
cd subbit-app
npm install && npm start
```

to run Rails api locally, run server on port 4000 
(make sure you are not in the subbit-app directory, but rather the root directory)
```
rails s -p 4000
```

to create database locally (sqlite3):
```
rails db:reset rails db:migrate rails db:seed
```

The seed csv is located in lib/seeds. Stops.csv only includes 4 stops being used. 
StopsFull.csv contains the rest of the stops in the city that have not been applied yet.
If you want to try it with every subway stop, change db/seeds.rb line 15 from Stops.csv to StopsFull.csv

#### I recently changed the rails backend to an api and added react, so some functionality is inactive right now
I'll add post comments back in pretty soon and clean up the commented out backend code that's not being used anymore to make it more readable

## Next Steps

* add more stops after a userbase is grown

* show posts in order of most votes (done)

* Also to provide location to users

* Comments on posts (done. needs to be added to api version)

* Messaging between users

* followers and following users

* send a user sign up email (done. needs to be added to api version)

* search for a post

# What is Subbit?

## Lost in New York?

#### Ever step out of a subway station and don't know what to do?
Go on subbit and search the feed for any subway station filled with user generated posts of whats going on. 

### Vote for your favorites!
Good posts get upvoted to the top of the page and bad posts sink down to the bottom, allowing for a fully user oriented experience to discover more about your neighborhood or a new stop.

### Post about anything!
* Pop up store by Prince St R? Yup.
* Cheap taco truck by King's Point B in Brooklyn? Got it.
* Those Joker Steps everyone wants to see for some reason off 167 St 4,B,D in the Bronx? Sure thing, but try some of the amazing food near by instead!.
* Really fat squirrel hanging out at Main St 7 in Queens? Why not?
* Never been to Staten Island? Check it out on Subbit!

#### currently, only opening up 4 stops on the full site 
there are 500 stops in nyc and that is overwhelming right now, so only 4 will be open, future stops will open soon!

Built by Fernando Pascual after spending a lot of time going to new subway stops and being overwhelemed by not knowing what to do. Now you can just hop on subbit when you hop off the train and see the top things going on near by as voted by the people of NYC!

Any advice, bugs, or feedback? Let me know!

This is still very much a work in progress, so would love to know features to add!

# Contact: nandopas2@gmail.com