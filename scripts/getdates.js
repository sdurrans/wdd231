const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

const courses = [
    {
        code: "CSE 110",
        name: "Introduction to Programming",
        credits: 3,
        completed: false,
        Certificate: "Web and Computer Programming",
        description: "This foundational course introduces basic programming concepts such as variables, loops, conditionals, and functions, using a high-level language. It emphasizes problem-solving and logical thinking."
    },
    {
        code: "WDD 130",
        name: "Web Frontend Development I",
        credits: 3,
        completed: true,
        Certificate: "Web and Computer Programming",
        description: "An introductory web development course covering HTML, CSS, and responsive design. Students learn to create structured web pages and apply essential design principles."
    },
    {
        code: "CSE 111",
        name: "Programming with Functions",
        credits: 3,
        completed: false,
        Certificate: "Web and Computer Programming",
        description: "Expands on foundational programming by focusing on modular design through functions. Students learn to structure code effectively and solve real-world problems using functional decomposition."
    },
    {
        code: "CSE 210",
        name: "Programming with Classes",
        credits: 3,
        completed: false,
        Certificate: "Web and Computer Programming",
        description: "Introduces object-oriented programming concepts including classes, objects, inheritance, and encapsulation. Emphasizes writing reusable and maintainable code."
    },
    {
        code: "WDD 131",
        name: "Web Frontend Development II",
        credits: 3,
        completed: true,
        Certificate: "Web and Computer Programming",
        description: "A deeper dive into frontend development using CSS Grid, Flexbox, media queries, and basic JavaScript. Also includes accessibility standards and best practices."
    },
    {
        code: "WDD 231",
        name: "Web Frontend Development III",
        credits: 3,
        completed: false,
        Certificate: "Web and Computer Programming",
        description: "An advanced course in frontend development covering JavaScript frameworks (like React or Vue), API integration, and dynamic content rendering through real-world projects."
    },
];


courses.forEach(course => {
    if (course.code === "WDD 130" || course.code === "WDD 131") {
        course.completed = true;
    }
});

function displayCourses(filter = "All") {
    const courseContainer = document.querySelector(".course");
    courseContainer.innerHTML = "";

    const filteredCourses = courses.filter(course => {
        if (filter === "All") return true;
        if (filter === "WDD") return course.code.startsWith("WDD");
        if (filter === "CSE") return course.code.startsWith("CSE");
    });


    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course-card");
        if (course.completed) {
            courseDiv.classList.add("completed");
        }
        courseDiv.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>Credits: ${course.credits}</p>
        `;

        courseDiv.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        courseContainer.appendChild(courseDiv);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.querySelector(".total-credits").textContent = `Total Credits: ${totalCredits}`;
}

document.querySelector(".filter-buttons").addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {
        const filter = event.target.textContent;
        displayCourses(filter);
    }
});

const courseDetails = document.getElementById("course-details");

function displayCourseDetails(course) {
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.code}</h2>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
      <p>Certificate: ${course.Certificate}</p>
      <p>${course.description}</p>
    `;
    courseDetails.showModal();

    // Select the close button after it's added to the DOM
    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}


displayCourses();