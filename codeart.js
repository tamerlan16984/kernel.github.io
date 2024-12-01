document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('art-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;//setting canvas dimentions
    canvas.height = window.innerHeight;

    function radian(degree) {
        return degree * Math.PI / 180;//converting degrees to radian
    }

    function drawBroccoli(x, y, length, angle, depth, context) {
        if (depth === 0) {
            // Drawing a brocolli like branches
            const numFlorets = 5 + Math.random() * 10;
            for (let i = 0; i < numFlorets; i++) {
                const offsetX = (Math.random() - 0.5) * length;
                const offsetY = (Math.random() - 0.5) * length;

                context.fillStyle = `hsl(120, ${50 + Math.random() * 20}%, ${30 + Math.random() * 20}%)`;//filling with green color
                context.beginPath();
                context.arc(x + offsetX, y + offsetY, Math.random() * 10 + 5, 0, Math.PI * 2);
                context.fill();//drawing a circle for top of brocolli
            }
            return;//recursion stops
        }

        const endX = x + length * Math.cos(radian(angle));
        const endY = y + length * Math.sin(radian(angle));//calculating the endpoint of the branch

        context.strokeStyle = `hsl(120, 40%, ${20 + depth * 5}%)`;
        context.lineWidth = depth;//Making sure branches get thicker at higher depths
        context.beginPath();//starts drawing the branch
        context.moveTo(x, y);
        context.lineTo(endX, endY);
        context.stroke();
        //recursively drawing smaller branches starting from endpoints
        drawBroccoli(endX, endY, length * 0.8, angle - 25, depth - 1, context);
        drawBroccoli(endX, endY, length * 0.8, angle + 25, depth - 1, context);
        drawBroccoli(endX, endY, length * 0.6, angle, depth - 1, context);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);//clearing canvas before drawing

        const startX = canvas.width / 2;
        const startY = canvas.height;

        drawBroccoli(startX, startY, 120, -90, 8, ctx);
    }

    draw();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();//redrawing the brocolli whenever the window size changes
    });
});
// greeting message script
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    // Adding greeting message based on the time of day
    const now = new Date();
    const hours = now.getHours();

    const greeting = document.createElement('p');
    if (hours >= 6 && hours < 12) {
        greeting.textContent = "Good Morning! Welcome to our website!";
    } else if (hours >= 12 && hours < 18) {
        greeting.textContent = "Good Afternoon! Thanks for stopping by!";
    } else {
        greeting.textContent = "Good Evening! Enjoy your visit!";
    }

    // Style for the greeting message
    greeting.style.color = "white";
    greeting.style.fontSize = "1.2rem";
    greeting.style.marginTop = "10px";
    greeting.style.textAlign = "center";

    // Inserting the greeting message after the logo
    const logo = header.querySelector('img'); 
    logo.insertAdjacentElement('afterend', greeting);
});
