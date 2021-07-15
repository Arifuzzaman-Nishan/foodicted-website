import React from 'react';
import { Line } from 'react-chartjs-2';

export default function AdminGraph() {
    return (
        <div>
            <Line
                data={{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'sat', 'sun'],
                    datasets: [
                        {
                            label: 'Revenue',
                            data: [31, 50, 28, 70, 45, 90, 140],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 5,
                        },
                    ],
                }}
                width={449}
                height={305}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 14,
                                },
                            },
                        },
                    },
                }}
            />
        </div>
    );
}
