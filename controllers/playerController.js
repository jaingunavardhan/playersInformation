const Player = require('../models/player.js');

exports.getPlayers = (request, response, next)=>{
    console.log("Get players...");
    Player.findAll()
        .then((players)=>{
            console.log("Players...", players);
            response.json(players);
        })
        .catch(error=>console.log(error));
}

exports.postPlayer = (request, response, next)=>{
    console.log("Post player...", request.body);
    if(request.body.id == '')
    {
        Player.create( {
            name : request.body.name,
            dob : request.body.dob,
            imageURL : request.body.imageURL,
            place : request.body.place,
            career : request.body.career,
            matches : request.body.matches,
            score : request.body.score,
            fifties : request.body.fifties,
            centuries : request.body.centuries,
            wickets : request.body.wickets,
            average : request.body.average
        })
        .then(createdPlayer=>{
                response.json(createdPlayer);
        })
        .catch(error=>console.log(error));
    }
    else
    {
        Player.findByPk(request.body.id)
            .then((player)=>{
                player.name = request.body.name,
                player.dob = request.body.dob,
                player.imageURL = request.body.imageURL,
                player.place = request.body.place,
                player.career = request.body.career,
                player.matches = request.body.matches,
                player.score = request.body.score,
                player.fifties = request.body.fifties,
                player.centuries = request.body.centuries,
                player.wickets = request.body.wickets,
                player.average = request.body.average
                player.save()
                    .then((updatedPlayer)=>{
                        response.json(updatedPlayer);
                    })
            })
            .catch(error=>console.log(error));
    }
}