document.addEventListener('DOMContentLoaded', function() {
    // Inicializar particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // Gráfico de habilidades
    const ctx = document.getElementById('skillsChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Power BI', 'Python', 'SQL', 'Excel', 'Data Visualization', 'Data Analysis', 'Diseño Web', "Locker Studio"],
                datasets: [{
                    label: 'Nivel de Habilidad',
                    data: [9, 8, 7, 9, 8, 8, 8, 8],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        ticks: {
                            stepSize: 2
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    } else {
        console.error('El elemento canvas con id "skillsChart" no se encontró');
    }

    // Gráfico de proyectos completados
    const projectsCompletedOptions = {
        series: [75],
        chart: {
            height: '100%',
            width: '100%',
            type: 'radialBar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#fff',
                        fontSize: '17px'
                    },
                    value: {
                        formatter: function(val) {
                            return parseInt(val);
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ABE5A1'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Proyectos Completados'],
    };

    const projectsCompletedChart = new ApexCharts(document.querySelector("#projectsCompletedChart"), projectsCompletedOptions);
    projectsCompletedChart.render();

    // Gráfico de satisfacción del cliente
    const clientSatisfactionOptions = {
        series: [{
            name: 'Satisfacción',
            data: [4.5, 4.8, 4.7, 4.9, 4.6]
        }],
        chart: {
            height: '100%',
            width: '100%',
            type: 'bar',
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "/5";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        xaxis: {
            categories: ["Proyecto 1", "Proyecto 2", "Proyecto 3", "Proyecto 4", "Proyecto 5"],
            position: 'top',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "/5";
                }
            }
        },
        title: {
            text: 'Satisfacción del Cliente',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444'
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    const clientSatisfactionChart = new ApexCharts(document.querySelector("#clientSatisfactionChart"), clientSatisfactionOptions);
    clientSatisfactionChart.render();

    // Animación de datos curiosos
    const funFacts = {
        dataProcessed: { el: document.getElementById('dataProcessed'), max: 100, unit: ' GB' },
        visualizationsCreated: { el: document.getElementById('visualizationsCreated'), max: 50, unit: '' },
        queriesWritten: { el: document.getElementById('queriesWritten'), max: 200, unit: '' },
        // Removemos portfolioVisits de aquí ya que ahora es un valor estático
    };

    // Removemos la parte que actualizaba portfolioVisits

    Object.values(funFacts).forEach(fact => {
        let current = 0;
        const interval = setInterval(() => {
            current = Math.min(current + 1, fact.max);
            fact.el.textContent = current + fact.unit;
            if (current === fact.max) clearInterval(interval);
        }, 50);
    });

    // Manejo del formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        };
        console.log('Enviando datos del formulario:', formData);
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            console.log('Respuesta recibida:', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:', data);
            if (data.success) {
                alert('Mensaje enviado con éxito');
                this.reset();
            } else {
                alert('Error al enviar el mensaje: ' + (data.message || 'Error desconocido'));
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error al enviar el mensaje. Por favor, intente de nuevo más tarde.');
        });
    });

    // Modificar esta parte
    const pokedexCard = document.querySelector('.pokedex-card');
    if (pokedexCard) {
        pokedexCard.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'proyecto2.html';
        });
    }

    // Eliminar o comentar este código si existe
    /*
    function handleProjectClick(projectId) {
        window.location.href = `proyecto.html?id=${projectId}`;
    }
    */

    // Modificar esta parte
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(event) {
            event.preventDefault();
            const projectId = this.getAttribute('data-project-id');
            if (projectId) {
                window.location.href = `project${projectId}.html`;
            } else if (this.classList.contains('pokedex-card')) {
                window.location.href = 'proyecto2.html';
            }
        });
    });

    // Ajusta el tamaño de los gráficos en dispositivos móviles
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            // Ajusta el tamaño de los gráficos aquí
            projectsCompletedChart.updateOptions({
                chart: {
                    height: 250
                }
            });
            clientSatisfactionChart.updateOptions({
                chart: {
                    height: 250
                }
            });
        } else {
            // Restaura el tamaño original
            projectsCompletedChart.updateOptions({
                chart: {
                    height: 350
                }
            });
            clientSatisfactionChart.updateOptions({
                chart: {
                    height: 350
                }
            });
        }
    });

    const pythonProjectCard = document.querySelector('.project-card[data-project-id="2"]');
    
    if (pythonProjectCard) {
        pythonProjectCard.style.cursor = 'pointer';
        pythonProjectCard.addEventListener('click', function() {
            window.location.href = 'python1.html';
        });
    }

    // Agregar este código al final del archivo script.js
    document.addEventListener('DOMContentLoaded', function() {
        const pokedexCard = document.querySelector('.pokedex-card');
        if (pokedexCard) {
            pokedexCard.addEventListener('click', function(event) {
                event.preventDefault();
                window.location.href = 'proyecto2.html';
            });
        }
    });
});
