# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bugs = Speaker.create(name: 'bugs bunny')
wile = Speaker.create(name: 'wile coyote')
sam = Speaker.create(name: 'yosemite sam')

bugs.presentations.create(title: "what's up doc?")
bugs.presentations.create(title: "of course you know this means war")
wile.presentations.create(title: "getting the most out of the acme catalogue")
sam.presentations.create(title: "shaad up")
sam.presentations.create(title: "ah hates rabbits")
sam.presentations.create(title: "the great ones")
