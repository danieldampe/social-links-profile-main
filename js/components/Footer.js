import DOMHelper from "../helpers/dom-helper.js";

export default function Footer() {
    const GITHUB_NAME = "danieldampe";
    const FRONTEND_MENTOR_URL = "https://www.frontendmentor.io?ref=challenge",
        GITHUB_PROFILE_URL = "https://github.com/" + GITHUB_NAME;
    return DOMHelper.createElement("footer", {class: "footer", style: {fontSize: "11px", textAlign: "center"}},
        "Challenge by ", 
        DOMHelper.createElement("a", {href: FRONTEND_MENTOR_URL, target: "_blank", style: {color: "hsl(228, 45%, 44%)"}}, 
            "Frontend Mentor"
        ),
        ". ",
        "Coded by ",
        DOMHelper.createElement("a", {href: GITHUB_PROFILE_URL, target: "_blank", style: {color: "hsl(228, 45%, 44%)"}}, 
            GITHUB_NAME
        ),
        "."
    );
};
