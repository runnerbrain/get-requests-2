'use strict';

function displayRepos(repos){
    // $('.repos_list_area').empty();
    console.log(repos.length)
    for(let i = 0; i < repos.length; i++){
        $('.repos_list').append(`<li>${repos[i].name}, <a href="${repos[i].html_url}">link</a></li>`);
    }
}

function getRepos(githubHandle){
    const url = `https://api.github.com/users/${githubHandle}/repos`;
    fetch(url)
    .then(response => response.json())
    .then(responseJson =>{
        //console.log(responseJson);
        $('.repos_list_area').removeClass('hidden');
        displayRepos(responseJson);
    })
    .catch(err => console.log(err))
}

function grabUserHandle(){
    $('form').submit(function(event){
        event.preventDefault();
        let githubHandle = $('#githubHandle').val();
        console.log(`in grabUserHandle function ${githubHandle}`);
        $('.repos_list').empty();
        getRepos(githubHandle);
    });
}

function handleUserReposForm(){
    grabUserHandle();
}

$(function(){
    handleUserReposForm();
})