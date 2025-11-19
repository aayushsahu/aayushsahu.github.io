//----------------------------------------------------------------------
// Name Input Functionality
//----------------------------------------------------------------------
let firstname = "";

function viewOrHideCursor() {
    try {
        const firstnameInput = document.getElementById("firstname");
        if (!firstnameInput) {
            console.error("Firstname input element not found");
            return;
        }
        
        const visibility = window.getComputedStyle(firstnameInput).getPropertyValue("visibility");
        if (visibility === "hidden") {
            firstnameInput.style.visibility = "visible";
            firstnameInput.focus();
        } else if (visibility === "visible" && firstnameInput.value.trim().length === 0) {
            firstnameInput.style.opacity = "0.4";
            firstnameInput.style.visibility = "hidden";
        }
    } catch (error) {
        console.error("Error in viewOrHideCursor:", error);
    }
}

function checkFirstname(event) {
    try {
        const firstnameInput = document.getElementById("firstname");
        if (!firstnameInput) {
            console.error("Firstname input element not found");
            return;
        }
        
        const opacity = window.getComputedStyle(firstnameInput).getPropertyValue("opacity");
        
        if (opacity === "0.4" && firstnameInput.value.length > 0) {
            firstnameInput.style.opacity = "1";
        } else if (firstnameInput.value.length === 0) {
            firstnameInput.style.opacity = "0.4";
        }

        if (event.key === "Enter" && firstnameInput.value.trim().length > 0) {
            const introDiv = document.getElementById("intro");
            if (introDiv) {
                introDiv.scrollIntoView({ behavior: "smooth" });
                resetFirstname(firstnameInput);
                
                const fnameSpan = document.getElementById("fname");
                if (fnameSpan) {
                    fnameSpan.innerHTML = ' ' + firstname;
                }
            }
        }
    } catch (error) {
        console.error("Error in checkFirstname:", error);
    }
}

function resetFirstname(firstnameInput) {
    try {
        firstname = firstnameInput.value.trim();
        firstnameInput.value = "";
        firstnameInput.style.opacity = "0";
        firstnameInput.style.visibility = "hidden";
    } catch (error) {
        console.error("Error in resetFirstname:", error);
    }
}

//----------------------------------------------------------------------
// Scroll Progress Indicator
//----------------------------------------------------------------------
function updateScrollProgress() {
    try {
        const scrollProgress = document.getElementById("scroll-progress");
        if (!scrollProgress) return;
        
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + "%";
        scrollProgress.setAttribute("aria-valuenow", Math.round(scrolled));
    } catch (error) {
        console.error("Error updating scroll progress:", error);
    }
}

//----------------------------------------------------------------------
// Scroll to Top Functionality
//----------------------------------------------------------------------
function scrollToTop() {
    try {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } catch (error) {
        console.error("Error scrolling to top:", error);
    }
}

function toggleScrollToTopButton() {
    try {
        const scrollToTopBtn = document.getElementById("scroll-to-top");
        if (!scrollToTopBtn) return;
        
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    } catch (error) {
        console.error("Error toggling scroll to top button:", error);
    }
}

//----------------------------------------------------------------------
// Skill Rotation Animation
//----------------------------------------------------------------------
let oldX = 0;

function setOldX(event) {
    try {
        oldX = event.pageX;
    } catch (error) {
        console.error("Error in setOldX:", error);
    }
}

function addRotate(event) {
    try {
        let skill = event.target;
        
        // Find the skill-square parent if clicking on child elements
        while (skill && !skill.classList.contains("skill-square")) {
            skill = skill.parentElement;
        }
        
        if (!skill || skill.classList.contains("glassmorphism")) {
            return;
        }
        
        const hasRotation = skill.classList.contains("rotateRight") || skill.classList.contains("rotateLeft");
        
        if (!hasRotation) {
            if (event.pageX > oldX) {
                skill.classList.add("rotateRight");
                setTimeout(() => {
                    skill.classList.remove("rotateRight");
                }, 1000);
            } else if (event.pageX < oldX) {
                skill.classList.add("rotateLeft");
                setTimeout(() => {
                    skill.classList.remove("rotateLeft");
                }, 1000);
            }
        }
    } catch (error) {
        console.error("Error in addRotate:", error);
    }
}

//----------------------------------------------------------------------
// Error Handling for External Resources
//----------------------------------------------------------------------
function handleExternalResourceError() {
    // Handle jQuery load failure
    if (typeof jQuery === 'undefined') {
        console.warn("jQuery failed to load. Some features may not work.");
    }
    
    // Handle Bootstrap load failure
    if (typeof bootstrap === 'undefined') {
        console.warn("Bootstrap failed to load. Some styling may be affected.");
    }
    
    // Handle Font Awesome load failure
    const testIcon = document.createElement("i");
    testIcon.className = "fa fa-test";
    document.body.appendChild(testIcon);
    const computedStyle = window.getComputedStyle(testIcon, ":before");
    if (!computedStyle || !computedStyle.content || computedStyle.content === 'none') {
        console.warn("Font Awesome failed to load. Icons may not display correctly.");
    }
    document.body.removeChild(testIcon);
}

//----------------------------------------------------------------------
// Initialize on DOM Load
//----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    try {
        // Initialize scroll progress
        updateScrollProgress();
        window.addEventListener("scroll", function() {
            updateScrollProgress();
            toggleScrollToTopButton();
        });
        
        // Initialize scroll to top button
        toggleScrollToTopButton();
        
        // Check for external resource errors
        window.addEventListener("load", function() {
            setTimeout(handleExternalResourceError, 1000);
        });
        
        // Add keyboard navigation support
        document.addEventListener("keydown", function(event) {
            // Escape key to close/hide input
            if (event.key === "Escape") {
                const firstnameInput = document.getElementById("firstname");
                if (firstnameInput && firstnameInput.style.visibility === "visible") {
                    firstnameInput.style.opacity = "0.4";
                    firstnameInput.style.visibility = "hidden";
                    firstnameInput.blur();
                }
            }
        });
        
    } catch (error) {
        console.error("Error initializing page:", error);
    }
});

//----------------------------------------------------------------------
// Smooth scroll for anchor links
//----------------------------------------------------------------------
document.addEventListener("click", function(event) {
    try {
        const target = event.target.closest("a[href^='#']");
        if (target && target.getAttribute("href") !== "#") {
            const href = target.getAttribute("href");
            const targetElement = document.querySelector(href);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    } catch (error) {
        console.error("Error handling anchor link click:", error);
    }
});

//----------------------------------------------------------------------
// Timeline Experience Hover Functionality
//----------------------------------------------------------------------
let currentActiveIndex = -1;
let hideTimeout = null;
let isContentAreaHovered = false;

function showExperience(index) {
    try {
        // Don't do anything if already showing this experience
        if (currentActiveIndex === index) {
            return;
        }
        
        // Clear any pending hide timeout
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        
        // Hide all timeline items with smooth transition
        const allItems = document.querySelectorAll('.timeline-item');
        allItems.forEach((item, i) => {
            if (i !== index) {
                item.classList.remove('active');
            }
        });
        
        // Show the selected timeline item
        const targetItem = document.querySelector(`.timeline-item[data-timeline-index="${index}"]`);
        if (targetItem) {
            // Small delay for smoother transition if switching from another item
            if (currentActiveIndex !== -1) {
                setTimeout(() => {
                    targetItem.classList.add('active');
                }, 100);
            } else {
                targetItem.classList.add('active');
            }
            currentActiveIndex = index;
        }
        
        // Highlight the active marker
        const allMarkers = document.querySelectorAll('.timeline-marker');
        allMarkers.forEach((marker, i) => {
            if (i === index) {
                marker.classList.add('active-marker');
            } else {
                marker.classList.remove('active-marker');
            }
        });
        
        // Smooth scroll to keep content in view on mobile
        if (window.innerWidth <= 1200 && targetItem) {
            setTimeout(() => {
                targetItem.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }, 300);
        }
    } catch (error) {
        console.error("Error showing experience:", error);
    }
}

function hideExperience(index) {
    try {
        // Don't hide the experience - keep the last hovered one visible
        // This function is called when mouse leaves, but we want to keep showing the experience
        // Only clear any pending hide timeouts
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        // Do nothing else - keep the current experience visible
    } catch (error) {
        console.error("Error in hideExperience:", error);
    }
}

function keepExperienceVisible() {
    try {
        isContentAreaHovered = true;
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
    } catch (error) {
        console.error("Error keeping experience visible:", error);
    }
}

function allowExperienceHide() {
    try {
        isContentAreaHovered = false;
        // Keep the experience visible even when mouse leaves content area
        // Don't hide it - just clear any pending timeouts
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
    } catch (error) {
        console.error("Error in allowExperienceHide:", error);
    }
}

// Initialize: Show first experience by default
document.addEventListener("DOMContentLoaded", function() {
    try {
        // Show first experience immediately on load
        showExperience(0);
        
        // Add click support for mobile devices and keyboard navigation
        const markers = document.querySelectorAll('.timeline-marker');
        markers.forEach((marker, index) => {
            // Click support
            marker.addEventListener('click', function(e) {
                e.preventDefault();
                showExperience(index);
            });
            
            // Keyboard navigation support
            marker.setAttribute('tabindex', '0');
            marker.setAttribute('role', 'button');
            marker.setAttribute('aria-label', `Show experience ${index + 1}`);
            
            marker.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showExperience(index);
                }
            });
        });
        
        // Add keyboard arrow navigation
        document.addEventListener('keydown', function(e) {
            if (currentActiveIndex !== -1) {
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault();
                    const nextIndex = (currentActiveIndex + 1) % markers.length;
                    showExperience(nextIndex);
                } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prevIndex = (currentActiveIndex - 1 + markers.length) % markers.length;
                    showExperience(prevIndex);
                }
            }
        });
        
        // Improve touch interactions for mobile
        if ('ontouchstart' in window) {
            markers.forEach((marker, index) => {
                let touchStartTime = 0;
                marker.addEventListener('touchstart', function() {
                    touchStartTime = Date.now();
                });
                
                marker.addEventListener('touchend', function(e) {
                    const touchDuration = Date.now() - touchStartTime;
                    if (touchDuration < 300) { // Quick tap
                        e.preventDefault();
                        showExperience(index);
                    }
                });
            });
        }
    } catch (error) {
        console.error("Error initializing timeline:", error);
    }
});
