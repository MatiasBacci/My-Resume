const jobs = [
    {
        establishment: "Hotel Dos Reyes",
        job: "Valet Parking - Alternate Recepcionist",
        period: "December, 2019 - March 2023",
        location: "Mar del Plata, Buenos Aires, Argentina"
    },
    {
        establishment: "Vulkan Restó",
        job: "General Manager",
        period: "September, 2017 - September 2019",
        location: "Rincón de los Sauces, Neuquen, Argentina",
    },
    {
        establishment: "Hotel Dos Reyes",
        job: "Valet Parking",
        period: "August 2016 - September, 2017",
        location: "Mar del Plata, Buenos Aires, Argentina",
    },
    {
        establishment: "Cafe Corso",
        job: "Waiter - Cashier",
        period: "June, 2016- August 2016",
        location: "Mar del Plata, Buenos Aires, Argentina",
    },
    {
        establishment: "Gran Hotel Dorá - Hotel Astor",
        job: "Recepcionist",
        period: "September, 2009 - April, 2016",
        location: "Mar del Plata, Buenos Aires, Argentina",
    }
]

const expertise = document.getElementById("expertise");

for (let experience of jobs) {
    expertise.innerHTML += `
    <div class="expertise">
        <h1>${experience.establishment}</h1>
        <p><b>Job</b>: ${experience.job}</p>
        <p><b>Period</b>: ${experience.period}</p>
        <p><b>Location</b>: ${experience.location}</p>
    </div>`
}
