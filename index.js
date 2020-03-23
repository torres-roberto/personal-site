document.addEventListener('DOMContentLoaded', (event) => {    
    let display = true;
    let profile = document.querySelector(".profile");
    let profileArea = document.querySelector('#profile-pic');
    
    profileArea.addEventListener('click', (e) => {
        if (display === true) {
            profile.classList.add("hidden-profile");
            display = false;
        }
        else if (display === false) {
            profile.classList.remove("hidden-profile");
            display = true;
        }
    });
});
