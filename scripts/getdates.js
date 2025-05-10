const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;


const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

const courses = [
    { code: "CSE 110", name: "Introduction to Programming", credits: 3, completed: false },
    { code: "WDD 130", name: "Web Frontend Development I", credits: 3, completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false },
    { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false },
    { code: "WDD 131", name: "Web Frontend Development II", credits: 3, completed: true },
    { code: "WDD 231", name: "Web Frontend Development III", credits: 3, completed: false }
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
displayCourses();