const API_BASE = 'http://localhost:3000/api';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    const progressDateInput = document.getElementById('progressDate');
    if (progressDateInput) {
        progressDateInput.value = today;
    }
    loadProfile();
    loadProgress();
    loadFeedback();
});

// Navigation
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    const pageElement = document.getElementById(page);
    if (pageElement) {
        pageElement.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    window.scrollTo(0, 0);
}

// Load Program Page
function loadProgramPage(category) {
    navigateTo(category);
    loadCategoryProgram(category);
}

// Load category programs
function loadCategoryProgram(category) {
    const contentMap = {
        'strength': 'strengthContent',
        'endurance': 'enduranceContent',
        'yoga': 'yogaContent',
        'calisthenics': 'calisthenicsContent',
        'powerlifting': 'powerliftingContent'
    };

    const programNames = {
        'strength': 'strength',
        'endurance': 'endurance',
        'yoga': 'yoga',
        'calisthenics': 'calisthenics',
        'powerlifting': 'powerlifting'
    };

    const contentId = contentMap[category];
    const programName = programNames[category];

    if (contentId && programName) {
        fetch(`${API_BASE}/programs/${programName}`)
            .then(response => response.json())
            .then(data => {
                displayProgram(data, contentId);
            })
            .catch(error => {
                console.error('Error loading program:', error);
                document.getElementById(contentId).innerHTML = '<p>Error loading program. Please try again.</p>';
            });
    }
}

// Display program content
function displayProgram(data, containerId) {
    let html = '';
    
    html += `<div class="info-box"><p>${data.description}</p></div>`;
    
    if (data.overview) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0;">Overview</h4>`;
        html += `<p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">${data.overview}</p>`;
    }

    if (data.duration) {
        html += `<p style="color: #ccc; margin-bottom: 10px;"><strong style="color: #fff;">Duration:</strong> ${data.duration}</p>`;
    }

    if (data.difficulty) {
        html += `<p style="color: #ccc; margin-bottom: 20px;"><strong style="color: #fff;">Difficulty Level:</strong> ${data.difficulty}</p>`;
    }

    if (data.goals && data.goals.length > 0) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0;">Program Goals</h4>`;
        html += '<ul style="margin-left: 20px; color: #ccc; margin-bottom: 20px;">';
        data.goals.forEach(goal => {
            html += `<li style="margin-bottom: 8px;">${goal}</li>`;
        });
        html += '</ul>';
    }

    if (data.weekly_schedule && data.weekly_schedule.length > 0) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0;">Weekly Schedule</h4>`;
        data.weekly_schedule.forEach(day => {
            html += `<div class="workout-day">
                <strong>${day.day}</strong>
                <p>${day.focus}</p>
                <p style="font-size: 0.95rem;"><strong style="color: #fff;">Exercises:</strong> ${day.exercises}</p>
            </div>`;
        });
    }

    if (data.nutrition && data.nutrition.length > 0) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0;">Nutrition Guidelines</h4>`;
        data.nutrition.forEach(meal => {
            html += `<div class="meal-plan">
                <strong>${meal.time}</strong>
                <p>${meal.content}</p>
            </div>`;
        });
    }

    if (data.tips && data.tips.length > 0) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0;">Tips & Best Practices</h4>`;
        html += '<ul style="margin-left: 20px; color: #ccc;">';
        data.tips.forEach(tip => {
            html += `<li style="margin-bottom: 8px;">${tip}</li>`;
        });
        html += '</ul>';
    }

    document.getElementById(containerId).innerHTML = html;
}

// Load a specific program
function loadProgram(program) {
    fetch(`${API_BASE}/programs/${program}`)
        .then(response => response.json())
        .then(data => {
            let html = `<div class="section-title">${data.title}</div>`;
            html += displayProgramDetail(data);
            document.getElementById('programDetail').innerHTML = html;
            navigateTo('program-detail');
        })
        .catch(error => {
            console.error('Error loading program:', error);
            alert('Error loading program');
        });
}

function displayProgramDetail(data) {
    let html = '';
    
    html += `<div class="info-box"><p>${data.description}</p></div>`;
    
    if (data.overview) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0; font-size: 1.2rem;">Overview</h4>`;
        html += `<p style="color: #ccc; line-height: 1.8; margin-bottom: 20px;">${data.overview}</p>`;
    }

    if (data.duration) {
        html += `<p style="color: #ccc; margin-bottom: 10px;"><strong style="color: #fff;">Duration:</strong> ${data.duration}</p>`;
    }

    if (data.difficulty) {
        html += `<p style="color: #ccc; margin-bottom: 20px;"><strong style="color: #fff;">Difficulty Level:</strong> ${data.difficulty}</p>`;
    }

    if (data.calorie_target) {
        html += `<p style="color: #ccc; margin-bottom: 20px;"><strong style="color: #fff;">Daily Calorie Target:</strong> ${data.calorie_target}</p>`;
    }

    if (data.goals && data.goals.length > 0) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0; font-size: 1.2rem;">Program Goals</h4>`;
        html += '<ul style="margin-left: 20px; color: #ccc; margin-bottom: 20px;">';
        data.goals.forEach(goal => {
            html += `<li style="margin-bottom: 8px;">${goal}</li>`;
        });
        html += '</ul>';
    }

    if (data.weekly_schedule && data.weekly_schedule.length > 0) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0; font-size: 1.2rem;">Weekly Schedule</h4>`;
        data.weekly_schedule.forEach(day => {
            html += `<div class="workout-day">
                <strong>${day.day}</strong>
                <p>${day.focus}</p>
                <p style="font-size: 0.95rem;"><strong style="color: #fff;">Duration:</strong> ${day.duration}</p>
                <p style="font-size: 0.95rem;"><strong style="color: #fff;">Exercises:</strong> ${day.exercises}</p>
            </div>`;
        });
    }

    if (data.nutrition && data.nutrition.length > 0) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0; font-size: 1.2rem;">Sample Daily Nutrition</h4>`;
        data.nutrition.forEach(meal => {
            html += `<div class="meal-plan">
                <strong>${meal.time}</strong>
                <p>${meal.content}</p>
            </div>`;
        });
    }

    if (data.macros) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0; font-size: 1.2rem;">Daily Macros Target</h4>`;
        html += `<div class="info-box">
            <p><strong style="color: #fff;">Protein:</strong> ${data.macros.protein}</p>
            <p><strong style="color: #fff;">Carbs:</strong> ${data.macros.carbs}</p>
            <p><strong style="color: #fff;">Fats:</strong> ${data.macros.fats}</p>
        </div>`;
    }

    if (data.tips && data.tips.length > 0) {
        html += `<h4 style="color: #e74c3c; margin: 25px 0 15px 0; font-size: 1.2rem;">Tips & Best Practices</h4>`;
        html += '<ul style="margin-left: 20px; color: #ccc;">';
        data.tips.forEach(tip => {
            html += `<li style="margin-bottom: 8px;">${tip}</li>`;
        });
        html += '</ul>';
    }

    return html;
}

// Profile Management
function saveProfile(e) {
    e.preventDefault();
    
    const profile = {
        name: document.getElementById('name').value,
        age: parseInt(document.getElementById('age').value),
        weight: parseFloat(document.getElementById('weight').value),
        height: parseInt(document.getElementById('height').value),
        gender: document.getElementById('gender').value,
        experience: document.getElementById('experience').value,
        goal: document.getElementById('goal').value,
        medical: document.getElementById('medical').value
    };

    fetch(`${API_BASE}/profiles`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)
    })
    .then(response => response.json())
    .then(data => {
        const successMsg = document.getElementById('profileSuccess');
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 3000);
        calculateAndDisplay(profile);
    })
    .catch(error => console.error('Error saving profile:', error));
}

function loadProfile() {
    fetch(`${API_BASE}/profiles`)
        .then(response => response.json())
        .then(profiles => {
            if (profiles && profiles.length > 0) {
                const profile = profiles[profiles.length - 1];
                document.getElementById('name').value = profile.name;
                document.getElementById('age').value = profile.age;
                document.getElementById('weight').value = profile.weight;
                document.getElementById('height').value = profile.height;
                document.getElementById('gender').value = profile.gender;
                document.getElementById('experience').value = profile.experience;
                document.getElementById('goal').value = profile.goal;
                document.getElementById('medical').value = profile.medical || '';
                
                calculateAndDisplay(profile);
            }
        })
        .catch(error => console.error('Error loading profile:', error));
}

function calculateAndDisplay(profile) {
    const heightM = profile.height / 100;
    const bmi = (profile.weight / (heightM * heightM)).toFixed(1);
    
    let bmr;
    if (profile.gender === 'Male') {
        bmr = 88.362 + (13.397 * profile.weight) + (4.799 * profile.height) - (5.677 * profile.age);
    } else {
        bmr = 447.593 + (9.247 * profile.weight) + (3.098 * profile.height) - (4.330 * profile.age);
    }
    
    const calories = Math.round(bmr * 1.5);
    const protein = Math.round(profile.weight * 2.2);

    document.getElementById('displayBMI').textContent = bmi;
    document.getElementById('displayCalories').textContent = calories;
    document.getElementById('displayMacro').textContent = protein;
    document.getElementById('profileDisplay').style.display = 'block';
}

// Progress Tracking
function logProgress(e) {
    e.preventDefault();

    const progressEntry = {
        date: document.getElementById('progressDate').value,
        weight: parseFloat(document.getElementById('progressWeight').value) || null,
        bodyFat: parseFloat(document.getElementById('bodyFat').value) || null,
        workoutsCompleted: parseInt(document.getElementById('workoutsCompleted').value) || 0,
        notes: document.getElementById('progressNotes').value
    };

    fetch(`${API_BASE}/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(progressEntry)
    })
    .then(response => response.json())
    .then(data => {
        const successMsg = document.getElementById('progressSuccess');
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 3000);
        e.target.reset();
        document.getElementById('progressDate').value = new Date().toISOString().split('T')[0];
        loadProgress();
    })
    .catch(error => console.error('Error logging progress:', error));
}

function loadProgress() {
    fetch(`${API_BASE}/progress`)
        .then(response => response.json())
        .then(progressList => {
            const progressDisplay = document.getElementById('progressList');
            
            if (!progressList || progressList.length === 0) {
                progressDisplay.innerHTML = '<p style="text-align: center; color: #999;">No progress logged yet. Start tracking today!</p>';
                return;
            }

            const sortedList = progressList.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            progressDisplay.innerHTML = sortedList.map(entry => `
                <div class="progress-item">
                    <h4 style="color: #fff;">${new Date(entry.date).toLocaleDateString()}</h4>
                    ${entry.weight ? `<p style="color: #ccc;"><strong style="color: #fff;">Weight:</strong> ${entry.weight}kg</p>` : ''}
                    ${entry.bodyFat ? `<p style="color: #ccc;"><strong style="color: #fff;">Body Fat:</strong> ${entry.bodyFat}%</p>` : ''}
                    <p style="color: #ccc;"><strong style="color: #fff;">Workouts:</strong> ${entry.workoutsCompleted} sessions</p>
                    ${entry.notes ? `<p style="color: #ccc;"><strong style="color: #fff;">Notes:</strong> ${entry.notes}</p>` : ''}
                    <button class="btn" style="background: #e74c3c; padding: 6px 15px; font-size: 0.9rem; margin-top: 10px;" onclick="deleteProgress(${entry.id})">Delete</button>
                </div>
            `).join('');
        })
        .catch(error => console.error('Error loading progress:', error));
}

function deleteProgress(id) {
    fetch(`${API_BASE}/progress/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => loadProgress())
        .catch(error => console.error('Error deleting progress:', error));
}

// Feedback Management
function submitFeedback(e) {
    e.preventDefault();

    const feedback = {
        type: document.getElementById('feedbackType').value,
        subject: document.getElementById('feedbackSubject').value,
        text: document.getElementById('feedbackText').value,
        rating: document.getElementById('rating').value
    };

    fetch(`${API_BASE}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback)
    })
    .then(response => response.json())
    .then(data => {
        const successMsg = document.getElementById('feedbackSuccess');
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 3000);
        e.target.reset();
        loadFeedback();
    })
    .catch(error => console.error('Error submitting feedback:', error));
}

function loadFeedback() {
    fetch(`${API_BASE}/feedback`)
        .then(response => response.json())
        .then(feedbackList => {
            const feedbackDisplay = document.getElementById('feedbackList');
            
            if (!feedbackList || feedbackList.length === 0) {
                feedbackDisplay.innerHTML = '<p style="text-align: center; color: #999;">No feedback yet.</p>';
                return;
            }

            const sortedList = feedbackList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            
            feedbackDisplay.innerHTML = sortedList.map(fb => `
                <div style="padding: 15px; border-bottom: 1px solid #333;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <div>
                            <strong style="color: #fff;">${fb.subject}</strong>
                            <span style="color: #999; margin-left: 10px; font-size: 0.9rem;">${new Date(fb.createdAt).toLocaleDateString()}</span>
                        </div>
                        <span style="color: var(--accent);">${fb.rating}⭐</span>
                    </div>
                    <p style="color: #ccc; margin-bottom: 8px;">${fb.text}</p>
                    <p style="font-size: 0.85rem; color: #999;"><strong style="color: #fff;">Type:</strong> ${fb.type}</p>
                    <button class="btn" style="background: #e74c3c; padding: 6px 15px; font-size: 0.9rem; margin-top: 10px;" onclick="deleteFeedback(${fb.id})">Delete</button>
                </div>
            `).join('');
        })
        .catch(error => console.error('Error loading feedback:', error));
}

function deleteFeedback(id) {
    fetch(`${API_BASE}/feedback/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => loadFeedback())
        .catch(error => console.error('Error deleting feedback:', error));
}
