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
    console.log("Show Player...", newPlayer)
    const listItem = document.createElement('li');
    listItem.innerHTML = newPlayer.name;

    const details_btn = document.createElement('button');
    details_btn.innerHTML = 'Get Info';
    //details_btn.setAttribute('id', 'details-btn');
    details_btn.setAttribute('name', 'id');
    details_btn.setAttribute('value', newPlayer.id);
    details_btn.onclick = (event)=>{
        const div_inside_one = document.createElement('div');
        div_inside_one.setAttribute('id', 'div_inside_one');

            const div_img = document.createElement('div');
            div_img.setAttribute('id', 'div_img');
                const img = document.createElement('img');
                img.src = newPlayer.imageURL;
                img.alt = `Image of ${newPlayer.name}`;
            div_img.appendChild(img);

            const div_h2_birth = document.createElement('div');
            div_h2_birth.setAttribute('id', 'div_h2_birth');
                const h2 = document.createElement('h2');
                h2.innerHTML = `${newPlayer.name}`;

                const dob_place = document.createElement('p');
                dob_place.innerHTML = `Place of Birth : ${newPlayer.place}<br>
                                        Date of Birth : ${newPlayer.dob}`;
            div_h2_birth.appendChild(h2);
            div_h2_birth.appendChild(dob_place);
        div_inside_one.appendChild(div_img);
        div_inside_one.appendChild(div_h2_birth);


        const div_inside_two = document.createElement('div');
        div_inside_two.setAttribute('id', 'div_inside_two');
            const div_details = document.createElement('div');
            div_details.setAttribute('id', 'div_details');                    
                const details = document.createElement('p');
                details.innerHTML = `Number of Matches : ${newPlayer.matches}<br>
                                        Fifties : ${newPlayer.fifties}<br>
                                        Centuries : ${newPlayer.centuries}<br>
                                        Wickets : ${newPlayer.wickets }<br>
                                        Total Score : ${newPlayer.score}<br>
                                        Average : ${newPlayer.average}`;   
            div_details.appendChild(details);

            const div_career = document.createElement('div');
            div_career.setAttribute('id', 'div_career');
                const career = document.createElement('p');
                career.innerHTML = `${newPlayer.career}`;
            div_career.appendChild(career);
        div_inside_two.appendChild(div_details);
        div_inside_two.appendChild(div_career);
        
        listItem.appendChild(div_inside_one);
        listItem.appendChild(div_inside_two);

        event.target.style.display = 'none';
        edit_btn.style.display = 'inline-block';
        close_btn.style.display = 'inline-block';
    }

    const edit_btn = document.createElement('button');
    edit_btn.innerHTML = 'Edit Info';
    edit_btn.setAttribute('id', 'edit-btn');
    edit_btn.setAttribute('name', 'id');
    edit_btn.setAttribute('value', newPlayer.id);
    edit_btn.style.display = 'none';
    edit_btn.onclick = (event)=>{
        console.log(newPlayer)
        document.getElementById('id').value = newPlayer.id;
        document.getElementById('name').value = newPlayer.name;
        document.getElementById('dob').value = newPlayer.dob;
        document.getElementById('imageURL').value = newPlayer.imageURL;
        document.getElementById('place').value = newPlayer.place;
        document.getElementById('career').value = newPlayer.career;
        document.getElementById('matches').value = newPlayer.matches;
        document.getElementById('score').value = newPlayer.score;
        document.getElementById('fifties').value = newPlayer.fifties;
        document.getElementById('centuries').value = newPlayer.centuries;
        document.getElementById('wickets').value = newPlayer.wickets;
        document.getElementById('average').value = newPlayer.average;
        document.getElementById('form-button').innerHTML = "Edit Player Info";
        document.getElementById('form-heading').innerHTML = "Edit Player Information";
        ulList.removeChild(listItem);
    }

    const close_btn = document.createElement('button');
    close_btn.style.display = 'none';
    close_btn.innerHTML = 'Close';
    close_btn.onclick = (event)=>{
        const childNodes = event.target.parentElement.childNodes;
        childNodes[4].style.display = 'none';
        childNodes[5].style.display = 'none';

        details_btn.style.display = 'inline-block';
        edit_btn.style.display = 'none';
        close_btn.style.display = 'none';
    }

    listItem.appendChild(details_btn);
    listItem.appendChild(edit_btn);
    listItem.appendChild(close_btn);

    listItem.style.display = 'none';
    ulList.appendChild(listItem);
}

function addPlayer(event)
{
    event.preventDefault();
    console.log("Form date...", event.target.dob.value)
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
    console.log("Form Submitted...", newPlayer);

    axios.post('http://localhost:4000/', newPlayer)
        .then((result)=>{
            console.log(result.data);
            showPlayer(result.data);
        })
        .catch(error=>console.log(error));
    
    document.getElementById('form').reset();
    document.getElementById('form-button').innerHTML = "Submit Player Info";
    document.getElementById('form-heading').innerHTML = "Add Player Information";
}

const search_input = document.getElementById('search-input');

search_input.addEventListener('keyup', function(event){
        const searchText = search_input.value.toLowerCase();
        const playersList = document.querySelectorAll('li');
        if(searchText!='')
        {
            for(var i=0; i<playersList.length; i++)
            {
                const playerName = playersList[i].firstChild.textContent.toLowerCase();
                if(playerName.indexOf(searchText) != -1)
                    playersList[i].style.display = 'block';
                else
                    playersList[i].style.display = 'none';
            }
        }
        else
        {
            for(var i=0; i<playersList.length; i++)
            {
                    playersList[i].style.display = 'none';
            }            
        }
})