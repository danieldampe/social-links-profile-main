import DOMHelper from "../helpers/dom-helper.js";

export default function SocialLinksProfile(profile) {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "social-links-profile";

    const {name, ubication, description, picture, social} = profile

    // *** *** *** Execution *** *** ***
    return DOMHelper.createElement("article", {class: COMPONENT_NAME}, 
        DOMHelper.createElement("div", {class: COMPONENT_NAME + "-hdr"},
            DOMHelper.createElement("img", {
                class: COMPONENT_NAME + "-picture",
                src: "./assets/images/" + picture,
                alt: name
            }),
            DOMHelper.createElement("h1", {class: COMPONENT_NAME + "-name"}, name),
            DOMHelper.createElement("p", {class: COMPONENT_NAME + "-ubication"}, ubication),
            DOMHelper.createElement("p", {class: COMPONENT_NAME + "-description"}, `"${description}"`)
        ),
        DOMHelper.createElement("div", {class: COMPONENT_NAME + "-body"},
            DOMHelper.createElement("ul", {class: COMPONENT_NAME + "-links"},
                DOMHelper.generate(social, (link, text) => 
                    DOMHelper.createElement("li", {class: COMPONENT_NAME + "-item"}, 
                        DOMHelper.createElement("a", {class: COMPONENT_NAME + "-link", href: link, target: "_blank"}, text)
                    )
                )  
            )
        )
    );
};
