const degrees = [
    {
        establishment: "UTN - Mar del Plata",
        career: "University degree in Programming",
        period: "February, 2022 - December 2025 (estimated)", 
    },
    {
        establishment: "Juan Gutenberg Institute",
        career: "High School diploma in natural sciences",
        period: "Finished in 2006",
    },
    {
        establishment: "Udemy",
        career: "Start Python from Zero",
        period: "Finished in 2021",
    },

    ]


const education = document.getElementById("education");

for (let course of degrees) {
    education.innerHTML += `
    <div class="education">
        <h1>${course.establishment}</h1>
        <p><b>Career</b>: ${course.career}</p>
        <p><b>Period</b>: ${course.period}</p>
    </div>`
}
