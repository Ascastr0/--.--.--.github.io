const COLORS = ["#fff2", "#563060", "#EFCFD4", "#B0E9D5"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
    const layer = [];
    for (let i = 0; i < totalStars; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
};

generateSpaceLayer("2px", ".space-1", 200, "25s");
generateSpaceLayer("3px", ".space-2", 100, "20s");
generateSpaceLayer("5px", ".space-3", 25, "15s");


const IMAGES_FOLDER = "ims/"; 
const TOTAL_IMAGES = 23;

const createFloatingImage = () => {
    const img = document.createElement("img");

    const randomIndex = Math.floor(Math.random() * TOTAL_IMAGES) + 1;
    img.src = `${IMAGES_FOLDER}img${randomIndex}.png`;

    img.className = "floating-image";

    img.style.left = `${Math.random() * 90}vw`;
    img.style.top = `${Math.random() * 90}vh`;

    const randomX = Math.random() * 200 - 100; 
    const randomY = Math.random() * 200 - 100; 
    img.style.setProperty("--translateX", `${randomX}px`);
    img.style.setProperty("--translateY", `${randomY}px`);

    document.body.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 4000);
};

setInterval(createFloatingImage, 3000);