document.addEventListener("DOMContentLoaded", function() {
    const snowflakes = document.querySelectorAll(".snowflake");

    function createSnowfall() {
        snowflakes.forEach((snowflake, index) => {
            const delay = Math.random() * 2; // Randomize the delay for each snowflake
            snowflake.style.animationDelay = `${delay}s`;
        });
    }

    createSnowfall();
});