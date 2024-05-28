

let DEFAULT_PROFILE_PICTURE_FOR_ALL_USER = 'https://robohash.org/username.png'

const callback = (mutationList, observer) => {

    ChangeProfilePicturesOfOtherUsers();
    ChangeSmallProfilePicture();
    ChangeMyprofilePicture();
    changeProfileInChat();
};


// mutationObserver for observing the dom changes
const observer = new MutationObserver(callback);
const bodyofPage = document.querySelector("body");
const config = { childList: true, subtree: true };


observer.observe(bodyofPage, config);


// helper function 

const ChangeMyprofilePicture = () => {

    const myProfileImages = document.querySelectorAll('.avatar');

    myProfileImages.forEach((image) => {

        image.src = DEFAULT_PROFILE_PICTURE_FOR_ALL_USER
    })
}

const ChangeProfilePicturesOfOtherUsers = () => {

    const profilePicSelector = 'img.ivm-view-attr__img--centered.evi-image.lazy-image.ember-view';

    //  'EntityPhoto-circle-' or 'EntityPhoto-square-' 
    const profilePics = Array.from(document.querySelectorAll(profilePicSelector)).filter(img => {
        const classNames = img.className.split(' ');
        return classNames.some(className => className.startsWith('EntityPhoto-circle-') || className.startsWith('EntityPhoto-square-'));
    });

    profilePics.forEach((image) => {
        image.src = DEFAULT_PROFILE_PICTURE_FOR_ALL_USER
    })

}

const ChangeSmallProfilePicture = () => {

    const myProfileImages = document.querySelectorAll('.ivm-view-attr__img--centered ivm-image-view-model__circle-img');

    myProfileImages.forEach((image) => {

        image.src = DEFAULT_PROFILE_PICTURE_FOR_ALL_USER
    })
}

const changeProfileInChat = () => {

    const myProfileImages = document.querySelectorAll('.presence-entity__image');

    myProfileImages.forEach((image) => {

        image.src = DEFAULT_PROFILE_PICTURE_FOR_ALL_USER
    })
}


const fetchTheImage = async () => {

    let response = await fetch("https://api.pexels.com/v1/search?query=person&per_page=1", {
        method: "GET",

        headers: {
            'Authorization': "YCjRfJK9rTjfsXcsUsnjn7Ap3uy7z4vZDtzw8Iacn0L4VvpVZBKePspx"
        },
    });

    let body = await response.json()
    return body.photos[0].src.landscape
}



const main = async () => {
    DEFAULT_PROFILE_PICTURE_FOR_ALL_USER = await fetchTheImage()
   
}

main().catch((err) => {

    console.log(err)
})