

const DEFAULT_PROFILE_PICTURE_FOR_ALL_USER = 'https://robohash.org/username.png'


const callback = (mutationList, observer) => {

    ChangeProfilePicturesOfOtherUsers();
    ChangeSmallProfilePicture();
    ChangeMyprofilePicture();
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