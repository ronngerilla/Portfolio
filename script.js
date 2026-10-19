// =========================================
// RONN PORTFOLIO
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // LOADING SCREEN - FIXED
    // =========================================

    const loadingScreen =
        document.getElementById("loadingScreen");


    function removeLoader() {

        if (!loadingScreen) {
            return;
        }

        loadingScreen.classList.add("hide");


        setTimeout(function () {

            loadingScreen.style.display = "none";

        }, 700);

    }


    // Always remove loader after 1.8 seconds
    setTimeout(
        removeLoader,
        1800
    );


    // Extra failsafe
    setTimeout(
        removeLoader,
        3000
    );


    // =========================================
    // CURSOR GLOW
    // =========================================

    try {

        const cursorGlow =
            document.getElementById(
                "cursorGlow"
            );


        let mouseX = 0;
        let mouseY = 0;

        let glowX = 0;
        let glowY = 0;


        document.addEventListener(
            "mousemove",
            function (event) {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                if (cursorGlow) {

                    cursorGlow.style.opacity =
                        "1";

                }

            }
        );


        document.addEventListener(
            "mouseleave",
            function () {

                if (cursorGlow) {

                    cursorGlow.style.opacity =
                        "0";

                }

            }
        );


        function animateGlow() {

            glowX +=
                (mouseX - glowX) *
                0.12;

            glowY +=
                (mouseY - glowY) *
                0.12;


            if (cursorGlow) {

                cursorGlow.style.left =
                    glowX + "px";

                cursorGlow.style.top =
                    glowY + "px";

            }


            requestAnimationFrame(
                animateGlow
            );

        }


        animateGlow();

    }

    catch (error) {

        console.log(
            "Cursor glow error:",
            error
        );

    }


    // =========================================
    // DARK / LIGHT MODE
    // =========================================

    try {

        const themeToggle =
            document.getElementById(
                "themeToggle"
            );


        const savedTheme =
            localStorage.getItem(
                "ronnTheme"
            );


        if (
            savedTheme === "light"
        ) {

            document.body.classList.add(
                "light-mode"
            );


            if (themeToggle) {

                themeToggle.textContent =
                    "🌙";

            }

        }

        else {

            if (themeToggle) {

                themeToggle.textContent =
                    "☀";

            }

        }


        if (themeToggle) {

            themeToggle.addEventListener(
                "click",
                function () {

                    document.body.classList.toggle(
                        "light-mode"
                    );


                    const lightMode =
                        document.body
                            .classList
                            .contains(
                                "light-mode"
                            );


                    themeToggle.textContent =
                        lightMode
                            ? "🌙"
                            : "☀";


                    localStorage.setItem(
                        "ronnTheme",
                        lightMode
                            ? "light"
                            : "dark"
                    );

                }
            );

        }

    }

    catch (error) {

        console.log(
            "Theme error:",
            error
        );

    }


    // =========================================
    // TYPING ANIMATION
    // =========================================

    try {

        const typingText =
            document.getElementById(
                "typingText"
            );


        const words = [

            "Information Technology Student",

            "Technology Learner",

            "Future IT Professional"

        ];


        let wordIndex = 0;
        let letterIndex = 0;
        let deleting = false;


        function typeText() {

            if (!typingText) {
                return;
            }


            const word =
                words[wordIndex];


            if (!deleting) {

                typingText.textContent =
                    word.substring(
                        0,
                        letterIndex + 1
                    );


                letterIndex++;


                if (
                    letterIndex ===
                    word.length
                ) {

                    deleting =
                        true;


                    setTimeout(
                        typeText,
                        1400
                    );


                    return;

                }

            }

            else {

                typingText.textContent =
                    word.substring(
                        0,
                        letterIndex - 1
                    );


                letterIndex--;


                if (
                    letterIndex === 0
                ) {

                    deleting =
                        false;


                    wordIndex =
                        (
                            wordIndex + 1
                        ) %
                        words.length;

                }

            }


            setTimeout(
                typeText,
                deleting
                    ? 45
                    : 80
            );

        }


        typeText();

    }

    catch (error) {

        console.log(
            "Typing animation error:",
            error
        );

    }


    // =========================================
    // SMOOTH SCROLL
    // =========================================

    try {

        const links =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const href =
                            this.getAttribute(
                                "href"
                            );


                        if (
                            !href ||
                            href === "#"
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                href
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({

                                behavior:
                                    "smooth"

                            });

                        }

                    }
                );

            }
        );

    }

    catch (error) {

        console.log(
            "Smooth scroll error:",
            error
        );

    }


    // =========================================
    // ACTIVE NAVIGATION
    // =========================================

    try {

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const navLinks =
            document.querySelectorAll(
                ".top-header nav a"
            );


        function updateNavigation() {

            let current =
                "home";


            sections.forEach(
                function (section) {

                    const sectionTop =
                        section.offsetTop -
                        180;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        current =
                            section.id;

                    }

                }
            );


            navLinks.forEach(
                function (link) {

                    link.classList.remove(
                        "active-link"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) ===
                        "#" + current
                    ) {

                        link.classList.add(
                            "active-link"
                        );

                    }

                }
            );

        }


        window.addEventListener(
            "scroll",
            updateNavigation
        );


        updateNavigation();

    }

    catch (error) {

        console.log(
            "Navigation error:",
            error
        );

    }


    // =========================================
    // SCROLL REVEAL
    // =========================================

    try {

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );


        if (
            "IntersectionObserver" in window
        ) {

            const observer =
                new IntersectionObserver(

                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target
                                        .classList
                                        .add(
                                            "visible"
                                        );


                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },

                    {
                        threshold: 0.1
                    }

                );


            revealElements.forEach(
                function (element) {

                    observer.observe(
                        element
                    );

                }
            );

        }

        else {

            revealElements.forEach(
                function (element) {

                    element.classList.add(
                        "visible"
                    );

                }
            );

        }

    }

    catch (error) {

        console.log(
            "Reveal animation error:",
            error
        );


        document
            .querySelectorAll(
                ".reveal"
            )
            .forEach(
                function (element) {

                    element.classList.add(
                        "visible"
                    );

                }
            );

    }


    // =========================================
    // BACK TO TOP
    // =========================================

    try {

        const backToTop =
            document.getElementById(
                "backToTop"
            );


        function updateBackToTop() {

            if (!backToTop) {
                return;
            }


            if (
                window.scrollY >
                500
            ) {

                backToTop.classList.add(
                    "show"
                );

            }

            else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }


        window.addEventListener(
            "scroll",
            updateBackToTop
        );


        updateBackToTop();


        if (backToTop) {

            backToTop.addEventListener(
                "click",
                function () {

                    window.scrollTo({

                        top: 0,

                        behavior:
                            "smooth"

                    });

                }
            );

        }

    }

    catch (error) {

        console.log(
            "Back to top error:",
            error
        );

    }


    // =========================================
    // RONN ASSIST CHATBOT
    // =========================================

    try {

        const chatToggle =
            document.getElementById(
                "chatToggle"
            );


        const chatWidget =
            document.getElementById(
                "chatWidget"
            );


        const chatClose =
            document.getElementById(
                "chatClose"
            );


        const chatForm =
            document.getElementById(
                "chatForm"
            );


        const chatInput =
            document.getElementById(
                "chatInput"
            );


        const chatMessages =
            document.getElementById(
                "chatMessages"
            );


        const quickButtons =
            document.querySelectorAll(
                ".quick-btn"
            );


        // OPEN CHAT
        if (
            chatToggle &&
            chatWidget
        ) {

            chatToggle.addEventListener(
                "click",
                function () {

                    chatWidget.classList.toggle(
                        "open"
                    );


                    if (
                        chatWidget.classList
                            .contains(
                                "open"
                            ) &&
                        chatInput
                    ) {

                        setTimeout(
                            function () {

                                chatInput.focus();

                            },
                            100
                        );

                    }

                }
            );

        }


        // CLOSE CHAT
        if (
            chatClose &&
            chatWidget
        ) {

            chatClose.addEventListener(
                "click",
                function () {

                    chatWidget.classList.remove(
                        "open"
                    );

                }
            );

        }


        // QUICK BUTTONS
        quickButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const question =
                            this.getAttribute(
                                "data-question"
                            );


                        if (question) {

                            sendMessage(
                                question
                            );

                        }

                    }
                );

            }
        );


        // FORM
        if (
            chatForm &&
            chatInput
        ) {

            chatForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const message =
                        chatInput.value
                            .trim();


                    if (!message) {
                        return;
                    }


                    chatInput.value =
                        "";


                    sendMessage(
                        message
                    );

                }
            );

        }


        function sendMessage(
            message
        ) {

            addMessage(
                message,
                "user-message"
            );


            setTimeout(
                function () {

                    const reply =
                        getReply(
                            message
                        );


                    addMessage(
                        reply,
                        "bot-message"
                    );

                },
                400
            );

        }


        function addMessage(
            message,
            className
        ) {

            if (!chatMessages) {
                return;
            }


            const element =
                document.createElement(
                    "div"
                );


            element.className =
                className;


            element.textContent =
                message;


            chatMessages.appendChild(
                element
            );


            chatMessages.scrollTop =
                chatMessages
                    .scrollHeight;

        }


        function getReply(
            message
        ) {

            const text =
                message.toLowerCase();


            if (
                text.includes("hello") ||
                text.includes("hi") ||
                text.includes("hey")
            ) {

                return "Hello! I'm Ronn's portfolio assistant. Ask me about his course, school, hobbies, or contact information.";

            }


            if (
                text.includes("name") ||
                text.includes(
                    "who is ronn"
                )
            ) {

                return "His name is Ronn Dewey Gerilla. He is a 3rd year Information Technology student.";

            }


            if (
                text.includes("course") ||
                text.includes("degree") ||
                text.includes("program")
            ) {

                return "Ronn is taking Bachelor of Science in Information Technology.";

            }


            if (
                text.includes("school") ||
                text.includes(
                    "university"
                )
            ) {

                return "Ronn studies at Philippine Christian University.";

            }


            if (
                text.includes("year")
            ) {

                return "Ronn is currently a 3rd year college student.";

            }


            if (
                text.includes("hobby") ||
                text.includes(
                    "hobbies"
                )
            ) {

                return "Ronn enjoys boxing and playing online games.";

            }


            if (
                text.includes("boxing") ||
                text.includes("box")
            ) {

                return "Ronn enjoys boxing because it helps him stay active, focused, and disciplined.";

            }


            if (
                text.includes("game") ||
                text.includes(
                    "gaming"
                )
            ) {

                return "Ronn enjoys playing online games during his free time to relax and have fun.";

            }


            if (
                text.includes("email")
            ) {

                return "Ronn's email is ronn.gerilla.coi@pcu.edu.ph.";

            }


            if (
                text.includes("phone") ||
                text.includes(
                    "number"
                ) ||
                text.includes(
                    "contact"
                )
            ) {

                return "You can contact Ronn at 09633825452 or through ronn.gerilla.coi@pcu.edu.ph.";

            }


            if (
                text.includes("thank")
            ) {

                return "You're welcome! Feel free to ask another question.";

            }


            return "You can ask me about Ronn's course, school, year level, boxing, online games, email, or phone number.";

        }

    }

    catch (error) {

        console.log(
            "Chatbot error:",
            error
        );

    }


    // =========================================
    // FINAL LOADER FAILSAFE
    // =========================================

    setTimeout(
        removeLoader,
        3500
    );

});