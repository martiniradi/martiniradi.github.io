// Format date range
function formatDateRange(startDate, endDate) {
    const options = { year: 'numeric', month: 'short' };
    const start = new Date(startDate).toLocaleDateString('en-US', options);
    const end = endDate ? new Date(endDate).toLocaleDateString('en-US', options) : 'Present';
    return `${start} - ${end}`;
}

// Format date for awards
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Render experience items
function renderExperience() {
    const container = document.getElementById('experience-list');

    experienceData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';

        div.innerHTML = `
            <div class="timeline-header">
                <div class="timeline-icon">
                    <img src="assets/icons/${item.logo}.svg" alt="${item.company}">
                </div>
                <div class="timeline-content">
                    <h3 class="timeline-title">${item.position}</h3>
                    <div class="timeline-company">${item.company}</div>
                    <div class="timeline-date">${formatDateRange(item.dateStart, item.dateEnd)}</div>
                    <div class="timeline-description">${item.description}</div>
                </div>
            </div>
        `;

        container.appendChild(div);
    });
}

// Render awards
function renderAwards() {
    const container = document.getElementById('awards-list');

    awardsData.forEach(award => {
        const div = document.createElement('div');
        div.className = 'award-card';

        const content = `
            <div class="award-icon">
                <img src="assets/icons/${award.icon}.svg" alt="Award">
            </div>
            <h3 class="award-title">${award.title}</h3>
            <div class="award-awarder">${award.awarder}</div>
            <div class="award-date">${formatDate(award.date)}</div>
            <div class="award-description">${award.description}</div>
        `;

        if (award.url) {
            const link = document.createElement('a');
            link.href = award.url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.innerHTML = content;
            div.appendChild(link);
        } else {
            div.innerHTML = content;
        }

        container.appendChild(div);
    });
}

// Render publications
function renderPublications() {
    const container = document.getElementById('publications-list');

    publicationsData.forEach((pub) => {
        const div = document.createElement('div');
        div.className = 'publication-card';

        let linksHtml = '';
        const links = [];

        if (pub.url) {
            links.push(`<a href="${pub.url}" target="_blank" rel="noopener" class="publication-link">View Publication →</a>`);
        } else if (pub.preprint) {
            links.push(`<a href="${pub.preprint}" target="_blank" rel="noopener" class="publication-link">View Preprint →</a>`);
        }

        if (pub.cite) {
            links.push(`<a href="javascript:void(0)" onclick="showCitation('${pub.cite}')" class="publication-link">Cite (BibTeX)</a>`);
        }

        if (links.length > 0) {
            linksHtml = `<div class="publication-links">${links.join(' | ')}</div>`;
        }

        let awardsHtml = '';
        if (pub.awards && pub.awards.length > 0) {
            const awardBadges = pub.awards.map(award => {
                if (typeof award === 'string') {
                    return `<span class="award-badge">${award}</span>`;
                } else if (award.url) {
                    return `<a href="${award.url}" target="_blank" rel="noopener" class="award-badge award-badge-link">${award.text}</a>`;
                } else {
                    return `<span class="award-badge">${award.text}</span>`;
                }
            }).join('');
            awardsHtml = `<div class="publication-awards">${awardBadges}</div>`;
        }

        // Highlight user's name in authors list (make it bold)
        const highlightedAuthors = pub.authors.replace(
            /Bernardo Martin-Iradi/gi,
            '<strong>Bernardo Martin-Iradi</strong>'
        );

        div.innerHTML = `
            <h3 class="publication-title">${pub.title}</h3>
            <div class="publication-authors">${highlightedAuthors}</div>
            <div class="publication-venue">${pub.venue}, ${pub.year}</div>
            ${awardsHtml}
            ${linksHtml}
        `;

        container.appendChild(div);
    });
}

// Citation modal functions
function showCitation(bibPath) {
    const modal = document.getElementById('citation-modal');
    const citationText = document.getElementById('citation-text');

    // Fetch and display BibTeX content
    fetch(bibPath)
        .then(response => response.text())
        .then(text => {
            citationText.textContent = text;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        })
        .catch(() => {
            citationText.textContent = 'Error loading citation. Please try again.';
            modal.classList.add('show');
        });
}

function closeCitationModal() {
    const modal = document.getElementById('citation-modal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

function copyCitation(event) {
    const citationText = document.getElementById('citation-text').textContent;
    navigator.clipboard.writeText(citationText).then(() => {
        // Show feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.backgroundColor = '#059669';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
        }, 2000);
    }).catch(() => {
        alert('Failed to copy citation. Please select and copy manually.');
    });
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('citation-modal');
    if (event.target === modal) {
        closeCitationModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCitationModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Update active link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Dark Mode Toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved dark mode preference or default to light mode
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderExperience();
    renderAwards();
    renderPublications();
    initDarkMode();
});
