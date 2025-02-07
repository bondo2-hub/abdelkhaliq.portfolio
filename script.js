document.addEventListener('DOMContentLoaded', function() {
    const featureBoxes = document.querySelectorAll('.project');

    featureBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            featureBoxes.forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.style.filter = 'blur(10px)';
                    otherBox.style.transform = 'scale(0.9)';
                }
            });
        });

        box.addEventListener('mouseleave', () => {
            featureBoxes.forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.style.filter = 'none';
                    otherBox.style.transform = 'scale(1)';
                }
            });
        });
    });
});
