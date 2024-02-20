// Function to remove divs with specific classes
function removeDivsWithClasses() {
    let divs = document.querySelectorAll('div');
    divs.forEach(div => {
        if (div.classList.contains('x9f619') &&
            div.classList.contains('xjbqb8w') &&
            div.classList.contains('x78zum5') &&
            div.classList.contains('x168nmei') &&
            div.classList.contains('x13lgxp2') &&
            div.classList.contains('x5pf9jr') &&
            div.classList.contains('xo71vjh') &&
            div.classList.contains('x1n2onr6') &&
            div.classList.contains('x1plvlek') &&
            div.classList.contains('xryxfnj') &&
            div.classList.contains('x1iyjqo2') &&
            div.classList.contains('x2lwn1j') &&
            div.classList.contains('xeuugli') &&
            div.classList.contains('x1q0g3np') &&
            div.classList.contains('xqjyukv') &&
            div.classList.contains('x6s0dn4') &&
            div.classList.contains('x1oa3qoh') &&
            div.classList.contains('x1nhvcw1')) {
            div.remove();
        }
    });
}

// Function to remove spans containing the text "View all"
function removeSpansWithText() {
    let spans = document.querySelectorAll('span');
    spans.forEach(span => {
        if (span.textContent.includes('View all')) {
            span.remove();
        }
    });
}

// Function to remove spans containing the text "Reels"
function removeSpansWithTextReels() {
    let spans = document.querySelectorAll('span');
    spans.forEach(span => {
        if (span.textContent.includes('Reels')) {
            span.remove();
        }
    });
}

// Function to remove divs containing the textContent "Explore"
function removeDivsWithTitleExplore() {
    let divs = document.querySelectorAll('div');
    divs.forEach(div => {
        let titleElement = div.querySelector('title');
        if (titleElement && titleElement.textContent === "Explore") {
            div.remove();
        }
    });
}

// Function to check if the current URL is Instagram
function isInstagram() {
    return window.location.hostname === "www.instagram.com";
}

// Function to perform removals
function performRemovals() {
    if (isInstagram()) {
        removeDivsWithClasses();
        removeSpansWithText();
        removeSpansWithTextReels();
        removeDivsWithTitleExplore();

        // Periodically perform removals
        setInterval(() => {
            performRemovals();
        }, 1000); // Adjust the interval as needed (e.g., every second)
    }
}

// Initial removal on page load
window.onload = performRemovals;
