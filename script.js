const url = "https://api.github.com/users/";  // Api key

const input = document.getElementById("input");
const btn = document.getElementById("btn");

const image = document.getElementById("image");
const Name = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const follower = document.getElementById("follower");
const following = document.getElementById("following");
const locurl = document.getElementById("locurl");
const twitterurl = document.getElementById("twitterUrl");
const mail = document.getElementById("mail");
const starredurl = document.getElementById("webUrl");
const joindate = document.getElementById("joindate");


async function setDefalut(){
    const responce = await fetch("https://api.github.com/users/amirsuhaill");
    const data = await responce.json();

    image.src = `${data.avatar_url}`;
    username.innerText = `@${data?.login}`;
    username.href = `${data?.html_url}`;
    repos.innerText = `${data?.public_repos}`;
    follower.innerText = `${data?.followers}`;
    following.innerText = `${data?.following}`;
    starredurl.innerText = "github";
    starredurl.href = `${data?.html_url}`;

    const fetched_twitter = `${data?.twitter_username}`;
    const fetched_name = `${data?.name}`;
    const fetched_bio = `${data?.bio}`;
    const fetched_location = `${data?.location}`;
    const fetched_mail = `${data?.email}`;
    const fetched_date = `${data?.created_at}`;

    const date = fetched_date[8]+fetched_date[9];
    const month = fetched_date[5]+fetched_date[6];
    const year = fetched_date[0]+fetched_date[1]+fetched_date[2]+fetched_date[3];

    joindate.innerText = "joined: " + date + "-" + month + "-" + year;
    

    

    if(fetched_name === "null"){
        Name.innerText = "not available";
    }
    else{
        Name.innerText = fetched_name;
    }
    
    if(fetched_bio === "null"){
        bio.innerText = "not available";
    }
    else{
        bio.innerText = fetched_bio;
    }

    if(fetched_location === 'null'){
        locurl.innerText = "not available";
    }
    else{
        locurl.innerText = fetched_location;
    }

    if(fetched_twitter === "null"){
        twitterurl.innerText = "not available";
    }
    else{
        twitterurl.innerText = fetched_twitter;
        twitterurl.href = `https://x.com/${fetched_twitter}`;
    }

    if(fetched_mail === 'null'){
        mail.innerText = "not available";
    }
    else{
        mail.innerText = "e-mail";
        mail.href = `mailto: ${data?.email}`;
    }
}

setDefalut();

btn.addEventListener("click",() => {
    if(input.value !== ""){
        getUserdata(url + input.value);
    }
});

input.addEventListener('keydown' ,(e) =>{
    if(e === 'Enter'){
        if(input.value !== ""){
            getUserdata(url + input.value);
        }
    }
},false);

async function getUserdata(giturl){
    const responce = await  fetch(giturl);
    const data = await responce.json();
    if(!data){
        throw data;
    }
    else updateProfile(data);
}


function updateProfile(data){
    image.src = `${data.avatar_url}`;
    username.innerText = `@${data?.login}`;
    username.href = `${data?.html_url}`;
    repos.innerText = `${data?.public_repos}`;
    follower.innerText = `${data?.followers}`;
    following.innerText = `${data?.following}`;
    starredurl.innerText = "github";
    starredurl.href = `${data?.html_url}`;

    const fetched_twitter = `${data?.twitter_username}`;
    const fetched_name = `${data?.name}`;
    const fetched_bio = `${data?.bio}`;
    const fetched_location = `${data?.location}`;
    const fetched_mail = `${data?.email}`;
    const fetched_date = `${data?.created_at}`;


    const date = fetched_date[8]+fetched_date[9];
    const month = fetched_date[5]+fetched_date[6];
    const year = fetched_date[0]+fetched_date[1]+fetched_date[2]+fetched_date[3];

    joindate.innerText = "joined: " + date + "-" + month + "-" + year;

    if(fetched_name === "null"){
        Name.innerText = "not available";
    }
    else{
        Name.innerText = fetched_name;
    }
    
    if(fetched_bio === "null"){
        bio.innerText = "not available";
    }
    else{
        bio.innerText = fetched_bio;
    }

    if(fetched_location === 'null'){
        locurl.innerText = "not available";
    }
    else{
        locurl.innerText = fetched_location;
    }

    if(fetched_twitter === "null"){
        twitterurl.innerText = "not available";
    }
    else{
        twitterurl.innerText = fetched_twitter;
        twitterurl.href = `https://x.com/${fetched_twitter}`;
    }

    if(fetched_mail === 'null'){
        mail.innerText = "not available";
    }
    else{
        mail.innerText = "e-mail";
        mail.href = `mailto: ${data?.email}`;
    }
}