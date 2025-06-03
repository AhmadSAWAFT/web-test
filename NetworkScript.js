  // Initialize charts
        document.addEventListener('DOMContentLoaded', function() {
            // Traffic Chart
            const trafficCtx = document.getElementById('trafficChart').getContext('2d');
            const trafficChart = new Chart(trafficCtx, {
                type: 'line',
                data: {
                    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                    datasets: [
                        {
                            label: 'Incoming Traffic',
                            data: [12, 19, 8, 15, 22, 18, 25],
                            borderColor: '#00b0ff',
                            backgroundColor: 'rgba(0, 176, 255, 0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Outgoing Traffic',
                            data: [5, 12, 16, 10, 18, 14, 20],
                            borderColor: '#4caf50',
                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                            tension: 0.4,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: '#e0e0e0'
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: '#a0a0a0'
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)'
                            },
                            ticks: {
                                color: '#a0a0a0'
                            },
                            beginAtZero: true
                        }
                    }
                }
            });

            // Attack Chart
            const attackCtx = document.getElementById('attackChart').getContext('2d');
            const attackChart = new Chart(attackCtx, {
                type: 'doughnut',
                data: {
                    labels: ['DDoS', 'Malware', 'Phishing', 'Brute Force', 'Spoofing'],
                    datasets: [{
                        data: [35, 25, 20, 15, 5],
                        backgroundColor: [
                            'rgba(244, 67, 54, 0.7)',
                            'rgba(255, 152, 0, 0.7)',
                            'rgba(156, 39, 176, 0.7)',
                            'rgba(33, 150, 243, 0.7)',
                            'rgba(76, 175, 80, 0.7)'
                        ],
                        borderColor: [
                            'rgba(244, 67, 54, 1)',
                            'rgba(255, 152, 0, 1)',
                            'rgba(156, 39, 176, 1)',
                            'rgba(33, 150, 243, 1)',
                            'rgba(76, 175, 80, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                color: '#e0e0e0',
                                padding: 20
                            }
                        }
                    }
                }
            });

            // Simulate real-time updates
            setInterval(() => {
                // Simulate adding new traffic data
                const newData = Math.floor(Math.random() * 10) + 15;
                trafficChart.data.datasets[0].data.push(newData);
                trafficChart.data.datasets[0].data.shift();
                
                const newOutData = Math.floor(Math.random() * 8) + 10;
                trafficChart.data.datasets[1].data.push(newOutData);
                trafficChart.data.datasets[1].data.shift();
                
                trafficChart.update();
            }, 5000);
        });