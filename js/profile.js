const profileobj = {
    emailadres : "302958475@student.rocmondriaan.nl",
    username : "pkobal",
    birthday : "16.03.05",
    profilephoto : "/",
    biography : "Patryk Obal is 18 jaar oud. Hij komt uit Polen en woont rond 5 jaar in de Nederland.",
    bannerColor : "",
    skills : ["Javascript", "HTML", "CSS"],
    projects : [
        {
            projectName : "Hoger Lager",
            teamMates : [
                {
                    fullName : "Jona", link : "",
                    fullName : "Thijs", link : "",
                }
            ],
            description : "Het spel Hoger Lager was mijn eertse Javascript Project!",
            img : "/",
            link : "#"
        },
        {
            projectName : "Boter kaas en eieren",
            teamMates : [],
            description : "Het spel Boter kaas en eieren was mijn tweede project en het minst leuke tot nu toe!",
            img : "/",
            link : "#"
        },
        {
            projectName : "Webcatalogus",
            teamMates : [
                {
                    fullName : "Jona", link : "",
                }
            ],
            description : "Het spel Boter kaas en eieren was mijn tweede project en het minst leuke tot nu toe!",
            img : "/",
            link : "#"
        }
    ],
    course : "Software Developer",
}

console.log(profileobj);

const myUserNameView = document.querySelector('.my-username');
myUserNameView.textContent = profileobj.username;