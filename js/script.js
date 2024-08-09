function goToHomePage() {
    window.location.href = "pages/loading.html";
}

document.addEventListener('DOMContentLoaded', function () {
    const welcomeBody = document.getElementById('welcome-page');
    const loadingBody = document.getElementById('loading-page');
    const homeBody = document.getElementById('home-page');

    document.addEventListener('keyup', function (event) {

        if (event.key === "Enter" && welcomeBody) {
            goToHomePage();
        }

        if (event.key === "Escape" && homeBody) {
            showOptions();
        }
    });

    if (welcomeBody) {
        welcomeBody.addEventListener('click', goToHomePage);
    }

    if (document.body.id === 'loading-page') {
        const loadingBar = document.getElementById('loading-bar');
        const totalSegments = 8;
        let currentSegment = 0;

        function addSegment() {
            if (currentSegment < totalSegments) {
                const segment = document.createElement('div');
                segment.className = 'loading-bar-fill';
                loadingBar.appendChild(segment);

                // Trigger reflow to ensure the transition applies
                segment.offsetHeight;

                segment.style.opacity = '1';
                currentSegment++;

                setTimeout(addSegment, 500);
            } else {
                window.location.href = "home.html";
            }
        }

        addSegment();
    }

    const sections = document.querySelectorAll('.content-section');
    const options = document.getElementById('options');

    // Function to show content based on user selection
    window.showContent = (contentId) => {
        sections.forEach(section => {
            section.className = 'content-section'; // Reset all sections to hidden
        });
        document.getElementById(contentId).className = 'content-section-new'; // Show selected section
        options.style.display = 'none'; // Hide options
    };

    // Function to show initial options
    window.showOptions = () => {
        sections.forEach(section => {
            section.className = 'content-section'; // Hide all sections
        });
        options.style.display = 'flex'; // Show options
    };
});
