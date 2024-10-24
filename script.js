const quizzes = {
    'accounting': [
        { name: 'Accounting Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/accounting/paper-1' },
        { name: 'Accounting Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/accounting/paper-2' }
    ],
    
    'business': [
        { name: 'Business Studies Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/business-studies/paper-1' },
        { name: 'Business Studies Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/business-studies/paper-2' }
    ],
    'business studies': [
        { name: 'Business Studies Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/business-studies/paper-1' },
        { name: 'Business Studies Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/business-studies/paper-2' }
    ],
    
    'cat': [
        { name: 'CAT Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/cat/paper-1' },
        { name: 'CAT Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/cat/paper-2' }
    ],
'computer applications technology': [
        { name: 'CAT Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/cat/paper-1' },
        { name: 'CAT Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/cat/paper-2' }
    ],            
    'economics': [
        { name: 'Economics Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/economics/paper-1' },
        { name: 'Economics Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/economics/paper-2' }
    ],
    'geography': [
        { name: 'Geography Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/geography/paper-1' },
        { name: 'Geography Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/geography/paper-2' }
    ],
    'history': [
        { name: 'History Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/history/paper-1' },
        { name: 'History Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/history/paper-2' }
    ],
    'life sciences': [
        { name: 'Life Sciences Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/life-sciences/paper-1' },
        { name: 'Life Sciences Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/life-sciences/paper-2' }
    ],
    
    'chemistry': [
        { name: 'Life Sciences Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/life-sciences/paper-1' },
        { name: 'Life Sciences Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/life-sciences/paper-2' }
    ],            
    
    'biology': [
        { name: 'Life Sciences Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/life-sciences/paper-1' },
        { name: 'Life Sciences Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/life-sciences/paper-2' }
    ],            
    
    
    'physical sciences': [
        { name: 'Physical Sciences Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/physical-sciences/paper-1' },
        { name: 'Physical Sciences Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/physical-sciences/paper-2' }
    ],
    'physics': [
        { name: 'Physical Sciences Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/physical-sciences/paper-1' },
        { name: 'Physical Sciences Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/physical-sciences/paper-2' }
    ],            
    'tourism': [
        { name: 'Tourism Paper 1', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/tourism/paper-1' },
        { name: 'Tourism Paper 2', link: 'https://sites.google.com/view/quizbrawl/grades/grade-12/tourism/paper-2' }
    ]
};

// Search Button Click Event
document.getElementById('search-btn').addEventListener('click', function() {
    const subjectInput = document.getElementById('subject').value.toLowerCase().trim();
    const quizLinksDiv = document.getElementById('quiz-links');
    const errorMessageDiv = document.getElementById('error-message');

    quizLinksDiv.innerHTML = ''; // Clear previous results
    errorMessageDiv.innerHTML = ''; // Clear previous error message

    if (subjectInput === '') {
        errorMessageDiv.innerText = 'Please enter a subject.';
        return;
    }

    if (quizzes[subjectInput]) {
        quizzes[subjectInput].forEach(quiz => {
            const quizLink = document.createElement('a');
            quizLink.href = quiz.link;
            quizLink.innerText = quiz.name;
            quizLink.target = '_blank';
            quizLinksDiv.appendChild(quizLink);
            quizLinksDiv.appendChild(document.createElement('br')); // Adds line break
        });
    } else {
        errorMessageDiv.innerText = 'No quizzes available for this subject.';
    }
});

// Star Rating Functionality
const stars = document.querySelectorAll('.star');
let rating = 0;

stars.forEach(star => {
    star.addEventListener('click', function() {
        rating = parseInt(star.getAttribute('data-value'));
        updateStars(rating);
    });
});

function updateStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

document.getElementById('rating-submit-btn').addEventListener('click', function() {
    const errorMessageDiv = document.getElementById('rating-error-message');

    if (rating === 0) {
        errorMessageDiv.textContent = 'Please select a rating by clicking on a star.';
        return;
    }

    errorMessageDiv.textContent = ''; // Clear previous error
    alert(`You rated this ${rating} stars!`);
    // Handle actual rating submission here, e.g., send to backend
});

    // Function to show the quiz container after a delay
    function showContainer() {
        const container = document.getElementById('sub-container');
        container.style.display = 'block';
    }

    // Set a delay before showing the container (e.g., 2 seconds)
    setTimeout(showContainer, 2000);

    document.getElementById('submit-btn').addEventListener('click', function () {
        var email = document.getElementById('email').value;
        var errorMessage = document.getElementById('error-message');

        // Validate email format
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        // Prepare the mailto link
        var mailtoLink = 'mailto:hierarchydigital@gmail.com'
                        + '?subject=Quiz Brawl Update Subscription'
                        + '&body=Please add this user to the update list: ' + encodeURIComponent(email);

        // Open the default email client with the prepared content
        window.location.href = mailtoLink; // Use href to forcefully open the mail app
    });

    // Function to show the quiz container after a delay
    function showContainer() {
        const container = document.getElementById('signup-container');
        container.style.display = 'block';
    }

    // Set a delay before showing the container (e.g., 2 seconds)
    setTimeout(showContainer, 2000);