let ImageContainer = document.querySelectorAll(".imagecontainer");
let HeadingText = document.querySelectorAll(".text h1");
let ImageContainerReverse = Array.from(ImageContainer).reverse();
let ReverseHeadingText = Array.from(HeadingText).reverse();

gsap.to(ImageContainer, {
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2
})

gsap.to(HeadingText, {
    top: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2
})

gsap.to(HeadingText, {
    delay: 2,
    top: "100px",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2
})

gsap.to(ImageContainerReverse, {
    delay: 10,
    width: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2
})
gsap.to(ReverseHeadingText, {
    delay: 8,
    top: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2
})

gsap.to(ReverseHeadingText, {
    delay: 10,
    top: "100px",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2
})

setInterval(() => {
    gsap.to(ImageContainer, {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2
    })

    gsap.to(HeadingText, {
        top: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2
    })

    gsap.to(HeadingText, {
        delay: 2,
        top: "100px",
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2
    })

    gsap.to(ImageContainerReverse, {
        delay: 10,
        width: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2
    })

    gsap.to(ReverseHeadingText, {
        delay: 8,
        top: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2
    })

    gsap.to(ReverseHeadingText, {
        delay: 10,
        top: "100px",
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2
    })

}, 16000);