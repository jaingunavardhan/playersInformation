const ulList = document.getElementById('list');

function getPlayers()
{
    axios.get('http://localhost:4000/')
        .then((result)=>{
            const players = result.data;
            for(var i=0; i<players.length; i++)
            {
                showPlayer(players[i]);
            }
        })
}

getPlayers();

function showPlayer(newPlayer)
{
    const listItem = document.createElement('li');
    listItem.innerHTML = newPlayer.name;

    const details_btn = document.createElement('button');
    details_btn.innerHTML = 'Get Info';
    details_btn.setAttribute('name', 'id');
    details_btn.setAttribute('value', newPlayer.id);

    const edit_btn = document.createElement('button');
    edit_btn.innerHTML = 'Edit Info';
    edit_btn.setAttribute('name', 'id');
    edit_btn.setAttribute('value', newPlayer.id);
    edit_btn.onclick = (event)=>{
        //document.getElementById('id').value = event.target.value;
    }


    listItem.appendChild(details_btn);
    listItem.appendChild(edit_btn);

    ulList.appendChild(listItem);
}

function addPlayer(event)
{
    event.preventDefault();
    console.log(event.target)
    const newPlayer = {
        id : event.target.id.value,
        name : event.target.name.value,
        dob : event.target.dob.value,
        imageURL : event.target.imageURL.value,
        place : event.target.place.value,
        career : event.target.career.value,
        matches : event.target.matches.value,
        score : event.target.score.value,
        fifties : event.target.fifties.value,
        centuries : event.target.centuries.value,
        wickets : event.target.wickets.value,
        average : event.target.average.value,
    }
    console.log(newPlayer);

    axios.post('http://localhost:4000/', newPlayer)
        .then((result)=>{
            console.log(result.data);
            showPlayer(result.data);
        })
        .catch(error=>console.log(error));
    
    event.target.reset();
}