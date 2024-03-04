import SocialLinksProfile from "./components/SocialLinksProfile.js";
import Footer from "./components/Footer.js";

// *** *** *** Variables *** *** ***
const $root = document.getElementById("root"),
    $main = document.getElementById("main");

// *** *** *** Functions *** *** ***

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(
        SocialLinksProfile({
            name: "Jessica Randall",
            ubication: "London, United Kingdom",
            description: "Front-end developer and avid reader",
            picture: "avatar-jessica.jpeg",
            social: new Map([
                ["GitHub", "https://github.com/danieldampe"],
                ["Frontend Mentor", "https://www.frontendmentor.io/profile/danieldampe"],
                ["LinkedIn", "#"],
                ["Twitter", "#"],
                ["Instagram", "#"]
            ])
        })
    );
    $root.append(
        Footer()
    );
});
