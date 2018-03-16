# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Activity.destroy_all
Comment.destroy_all
Like.destroy_all
Follow.destroy_all

users = User.create([
{ username: 'Guest',
    email: "email@gmail.com",
    password: "password",
    avatar: "http://i.dailymail.co.uk/i/pix/2017/04/11/16/3F2782B200000578-0-image-m-8_1491925634006.jpg"
},{ username: 'Fred',
  email: "fred@gmail.com",
  password: "password",
  avatar: "http://3.bp.blogspot.com/-sC9vVftcp48/Tk19UAu4SSI/AAAAAAAABCE/Xq2nS_QQLmo/s1600/100_2892.JPG"
},{ username: 'Charlie',
  email: "charlie@gmail.com",
  password: "password",
  avatar: "https://thumbs.dreamstime.com/t/cyclist-jon-izagirre-insausti-col-du-tourmalet-france-july-movistarteam-climbing-difficult-road-to-col-du-tourmalet-51064580.jpg"
},{ username: 'Jim',
  email: "Jim@gmail.com",
  password: "password",
  avatar: "http://theclimbingcyclist.com/wp-content/uploads/2013/07/IMG_9582.jpg"
},{ username: 'Bob',
  email: "user2@gmail.com",
  password: "password",
  avatar: "http://i1.wp.com/ledomestiquetours.co.uk.88-208-244-163.jago-staging.com/wp-content/uploads/2015/07/Col-du-Tourmalet-Feeling-the-Pain.jpg"
},{ username: 'Linda',
  email: "user3@gmail.com",
  password: "password",
  avatar: "http://cdn.coresites.factorymedia.com/twc/wp-content/uploads/2014/12/an-intimate-portrait-of-the-tour-de-france-680x380.jpg"
},{ username: 'Laurette',
  email: "email4@gmail.com",
  password: "password",
  avatar: "https://sweatngears.files.wordpress.com/2011/06/sweatngears_tourseries_endura_ian-superman-wilkinson.jpg"
},{ username: 'Tim',
    email: "tim@gmail.com",
    password: "password",
    avatar: "http://www.cyclefiesta.com/multimedia/pyrenees/images/cycling-pyrenees.jpg"
},{ username: 'OtherGuy',
  email: "Otherguy@gmail.com",
  password: "password",
  avatar: "http://www.cyclefiesta.com/multimedia/pyrenees/images/cycling-pyrenees.jpg"
},{ username: 'Aislinn',
  email: "aislinn@gmail.com",
  password: "password",
  avatar: "http://www.cycletouringreview.com/wp-content/uploads/2011/07/And-Kat-Makes-it-to-the-Top.jpg"
},{ username: 'Zach',
  email: "zach@gmail.com",
  password: "password",
  avatar: "https://www.discoveradventure.com/media/image-cache/80212f2a-0c5e-4f45-aa1e-699a25766dc4/900-0-1-1000-650/1483950968-cycling_uphill_pyreneesjpg.jpg"
},{ username: 'Dan',
  email: "dan@gmail.com",
  password: "password",
  avatar: "http://i1.wp.com/ledomestiquetours.co.uk.88-208-244-163.jago-staging.com/wp-content/uploads/2015/07/Col-du-Tourmalet-Feeling-the-Pain.jpg"
},{ username: 'Lael',
  email: "lael@gmail.com",
  password: "password",
  avatar: "http://cdn.coresites.factorymedia.com/twc/wp-content/uploads/2014/12/an-intimate-portrait-of-the-tour-de-france-680x380.jpg"
},{ username: 'Taylor',
  email: "taylor@gmail.com",
  password: "password",
  avatar: "https://sweatngears.files.wordpress.com/2011/06/sweatngears_tourseries_endura_ian-superman-wilkinson.jpg"
}])

activities = Activity.create([{title: "Morning Ride",
  description: "",
  polyline: "g}pwFfctbM}JeI][UUMCwC}BKRC?OO_A~BqKqIaEcD[c@_DiCaFaEiJuHOOuB_BiC_ByFsDMGaBUaASQIs@K}AYeEm@qAW}EgAWIwAWc@A_ACCZENMLMBmBOiFo@_Ec@gBUaE[h@eB",
  athlete_id: users[0] , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Evening Ride",
  description: "",
  polyline: "whrwFlutbMuBuIIMtCuHIaAOi@CqCr@oBMKO[CW@UBMBG]WKGuBuAqL}HaG{DkDyB{IcGiFgDgFiDgG}DlB{FhBsF",
  athlete_id: users[0] , distance: "4.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Afternoon Run",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[0] , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Run",
  elevation: 400},
{title: "Weak sauce",
  description: "",
  athlete_id: users[0] , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Run",
  elevation: 400},
{title: "Morning Ride ",
  description: "",
  polyline: "alrwF|usbMXYNWZoABI]URi@`CeGOSoAeAcEcDmBaBhEuMnCoIxDaM`GmRwBuAaEoCwEwCwBwAiD_CiEqCiGcEc[mSgQeLuOcKsMsI_Cy@mBqAk@o@u@s@m@c@Y[sA{@_C}A{CoBOESIeAYaC{AKSOO_Au@c@W]YEMeAs@{FyDyBwAaCyAyB}AiDyB_JaGoMsIc@[wB~GkAxDwC`J}@zCeBpFMT{BjHOh@zBxAxFrD_CrHyBxGc@`AQj@CP?DK@I?GAgBiAc@QUE[AWDc@PwAt@k@PiAPo@B_A?}ASu@Qa@Oc@WUSW_@KYGWMHi@PC?EAOk@",
  athlete_id: users[0] , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Last ride in NY",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[0] , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Morning Ride ",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[0] , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Afternoon Ride",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[0], distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Evening Ride",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[3], distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Morning Ride ",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[0], distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Winter Legs :(",
  description: "",
  polyline: "whrwFlutbMuBuIIMtCuHIaAOi@CqCr@oBMKO[CW@UBMBG]WKGuBuAqL}HaG{DkDyB{IcGiFgDgFiDgG}DlB{FhBsF",
  athlete_id: users[3] , distance: "1.32",
  est_moving_time: "26:55",
  type_of: "Run",
  elevation: 400},
{title: "Afternoon Ride ",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[2] , distance: "1.17",
  est_moving_time: "27:29",
  type_of: "Ride",
  elevation: 400},
{title: "Morning Run",
  description: "",
  polyline: "g}pwFfctbM}JeI][UUMCwC}BKRC?OO_A~BqKqIaEcD[c@_DiCaFaEiJuHOOuB_BiC_ByFsDMGaBUaASQIs@K}AYeEm@qAW}EgAWIwAWc@A_ACCZENMLMBmBOiFo@_Ec@gBUaE[h@eB",
  athlete_id: users[0] , distance: "1.17",
  est_moving_time: "33:47",
  type_of: "Run",
   elevation: 400}
])

comments = Comment.create([{author_id: users[3], activity_id: activities[11], content: "killin it!"},
{author_id: users[7], activity_id: activities[11], content: "heeeeeeyyyyoooo"}])

likes = Like.create([{liker_id: 7, activity_id: 12},
{liker_id: users[3], activity_id: activities[9]},
{liker_id: users[6], activity_id: activities[11]},
{liker_id: users[6], activity_id: activities[11]},
{liker_id: users[4], activity_id: activities[11]},
{liker_id: users[3], activity_id: activities[11]}])

follows = Follow.create([{follower_id: 2, followed_id: 1},
{follower_id: users[3], followed_id: users[0]},
{follower_id: users[4], followed_id: users[0]},
{follower_id: users[5], followed_id: users[0]},
{follower_id: users[6], followed_id: users[0]},
{follower_id: users[7], followed_id: users[0]},
{follower_id: users[8], followed_id: users[0]},
{follower_id: users[9], followed_id: users[0]},
{follower_id: users[0], followed_id: users[2]},
{follower_id: users[0], followed_id: users[3]},
{follower_id: users[0], followed_id: users[4]},
{follower_id: users[0], followed_id: users[5]},
{follower_id: users[0], followed_id: users[6]},
{follower_id: users[0], followed_id: users[7]}])
