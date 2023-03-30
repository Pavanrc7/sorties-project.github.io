const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];

productContainers.forEach((item, i) => {
    let containerDimentaions = item.getBoundingclientReact()
    let containerWidth = containerDimentaions.width;

    nxtBtn[i].addEventListener('clock', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtn[i].addEventListener('clock', () => {
        item.scrollLeft -= containerWidth;
    })
})