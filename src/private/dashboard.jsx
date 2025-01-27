import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement)

const Dashboard = () => {
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
            },
        ],
    }

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Log Out
                </button>
            </header>

            <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Total Users</h2>
                    <p className="text-4xl font-bold text-blue-500">1,230</p>
                </div>

                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Total Sales</h2>
                    <p className="text-4xl font-bold text-green-500">$45,600</p>
                </div>

                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold">
                        Active Subscriptions
                    </h2>
                    <p className="text-4xl font-bold text-purple-500">320</p>
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">
                        Sales Overview
                    </h2>
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </main>

            <footer className="bg-white shadow p-4 text-center">
                <p className="text-sm text-gray-500">© 2025 My Dashboard App</p>
            </footer>
        </div>
    )
}

export default Dashboard
