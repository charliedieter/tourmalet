# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
{ username: 'Fred',email: "fred@gmail.com",
password: "password"
},{ username: 'Charlie',email: "charlie@gmail.com",
password: "password"
},{ username: 'Conner',email: "conner@gmail.com",
password: "password"
},{ username: 'Laurette',email: "user2@gmail.com",
password: "password"
},{ username: 'Zach',email: "user3@gmail.com",
password: "password"
},{ username: 'Aislinn',email: "email4@gmail.com",
password: "password"
},{ username: 'Guest',email: "email@gmail.com",
password: "password"
}])

activities = Activity.create([{title: "HI mom ",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: 3, distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Run"}])
