import startApp from 'bostonember/tests/helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Speaker Page', {

    setup: function() {
        App = startApp();

        var speakers = [{
            id: 1,
            name: "bugs bunny",
            presentation_ids: [1, 2]
        }, {
            id: 2,
            name: 'wile coyote',
            presentation_ids: [3]
        }, {
            id: 3,
            name: 'yosemite sam',
            presentation_ids: [4, 5, 6]
        }];

        var presentations = [{
            id: 1,
            title: "what's up doc?",
            speaker_id: 1
        }, {
            id: 2,
            title: "of course you know this means war",
            speaker_id: 1
        }, {
            id: 3,
            title: "getting the most from the acme catalogue",
            speaker_id: 2
        }, {
            id: 4,
            title: "shaad up",
            speaker_id: 3
        }, {
            id: 5,
            title: "ah hate rabbits",
            speaker_id: 3
        }, {
            id: 6,
            title: "the great ones",
            speaker_id: 3
        }];

        server = new Pretender(function() {

            this.get('/api/speakers', function(request) {
                return [200, {
                        "Content-Type": "application/json"
                    },
                    JSON.stringify({
                        speakers: speakers,
                        presentations: presentations
                    })
                ];
            });

            this.get('/api/speakers/:id', function(request) {
                var speaker = speakers.find(function(speaker) {
                    if (speaker.id === parseInt(request.params.id, 10)) {
                        return speaker;
                    }
                });

                //add presentation data to API stub,
                //speaker to match id requested
                var speakerPresentations = presentations.filter(function(presentation) {
                    if (presentation.speaker_id === speaker.id) {
                        return true;
                    }
                });



                return [200, {
                        "Content-Type": "application/json"
                    },
                    JSON.stringify({
                        speaker: speaker,
                        presentations: presentations
                    })
                ];
            });
        });
    },
    teardown: function() {
        Ember.run(App, 'destroy');
        server.shutdown();
    }
});

test('Should allow navigation to the speakers page from the landing page', function() {
    visit('/').then(function() {
        click('a:contains("Speakers")').then(function() {
            equal(find('h3').text(), 'Speakers');
        });
    });
});

test('Should list all speakers and number of presentations', function() {
    visit('/speakers').then(function() {
        equal(find('a:contains("bugs bunny (2)")').length, 1);
        equal(find('a:contains("wile coyote (1)")').length, 1);
        equal(find('a:contains("yosemite sam (3)")').length, 1);
    });
});

test('Should be able to navigate to a speaker page', function() {
    visit('/speakers').then(function() {
        click('a:contains("bugs bunny")').then(function() {
            equal(find('h4').text(), 'bugs bunny');
        });
    });
});

test('Should be able to visit a speaker page', function() {
    visit('/speakers/1').then(function() {
        equal(find('h4').text(), 'bugs bunny');
    });
});

test('Should list all presentations for a speaker', function() {
    visit('/speakers/1').then(function() {
        equal(find('li:contains("what\'s up doc?")').length, 1);
        equal(find('li:contains("of course you know this means war")').length, 1);
    });
});