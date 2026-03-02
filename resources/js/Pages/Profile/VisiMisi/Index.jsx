import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function VisiMisi({ visiMisi }) {
    const { flash } = usePage().props;

    useEffect(() => {
        const ctx = document.getElementById('myChart2024').getContext('2d');
            
            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Dosen', 'Mahasiswa', 'Tendik'],
                    datasets: [
                        {
                            label: 'SKM',
                            data: [3.58, 3.48, 3.49],
                            backgroundColor: 'rgba(54, 162, 235, 0.8)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            borderRadius: 4,
                            barPercentage: 0.6,
                            categoryPercentage: 0.8
                        },
                        {
                            label: 'IKM',
                            data: [89.61, 86.91, 87.22],
                            backgroundColor: 'rgba(255, 99, 71, 0.8)',
                            borderColor: 'rgba(255, 99, 71, 1)',
                            borderWidth: 1,
                            borderRadius: 4,
                            barPercentage: 0.6,
                            categoryPercentage: 0.8
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    devicePixelRatio: 2,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                boxWidth: 12,
                                font: {
                                    size: 12
                                },
                                padding: 20
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            titleFont: {
                                size: 14
                            },
                            bodyFont: {
                                size: 13
                            },
                            padding: 12,
                            cornerRadius: 6,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw + '%';
                                }
                            }
                        },
                        datalabels: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                },
                                font: {
                                    size: 11
                                }
                            },
                            title: {
                                display: true,
                                text: 'Tingkat Pemahaman (%)',
                                font: {
                                    size: 12,
                                    weight: 'normal'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 10
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                font: {
                                    size: 11
                                }
                            },
                            title: {
                                display: true,
                                text: 'Responden',
                                font: {
                                    size: 12,
                                    weight: 'normal'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 0
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    },
                    onHover: (event, chartElement) => {
                        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
                    }
                }
            });

            // Add data labels manually since Chart.js 4 doesn't have built-in datalabels
            ctx.canvas.addEventListener('mousemove', function() {
                const datasets = chart.data.datasets;
                for (let i = 0; i < datasets.length; i++) {
                    const meta = chart.getDatasetMeta(i);
                    const dataset = datasets[i];
                    for (let j = 0; j < meta.data.length; j++) {
                        const model = meta.data[j];
                        ctx.fillStyle = dataset.borderColor;
                        ctx.font = '11px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillText(dataset.data[j] + '%', model.x, model.y - 5);
                    }
                }
            });
    }, []);

    useEffect(() => {
        const ctx = document.getElementById('myChart2023').getContext('2d');
            
            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Dosen', 'Mahasiswa', 'Tendik'],
                    datasets: [
                        {
                            label: 'SKM',
                            data: [3.68, 3.41, 3.42],
                            backgroundColor: 'rgba(54, 162, 235, 0.8)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            borderRadius: 4,
                            barPercentage: 0.6,
                            categoryPercentage: 0.8
                        },
                        {
                            label: 'IKM',
                            data: [92.04, 85.32, 85.56],
                            backgroundColor: 'rgba(255, 99, 71, 0.8)',
                            borderColor: 'rgba(255, 99, 71, 1)',
                            borderWidth: 1,
                            borderRadius: 4,
                            barPercentage: 0.6,
                            categoryPercentage: 0.8
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    devicePixelRatio: 2,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                boxWidth: 12,
                                font: {
                                    size: 12
                                },
                                padding: 20
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            titleFont: {
                                size: 14
                            },
                            bodyFont: {
                                size: 13
                            },
                            padding: 12,
                            cornerRadius: 6,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw + '%';
                                }
                            }
                        },
                        datalabels: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                },
                                font: {
                                    size: 11
                                }
                            },
                            title: {
                                display: true,
                                text: 'Tingkat Pemahaman (%)',
                                font: {
                                    size: 12,
                                    weight: 'normal'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 10
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                font: {
                                    size: 11
                                }
                            },
                            title: {
                                display: true,
                                text: 'Responden',
                                font: {
                                    size: 12,
                                    weight: 'normal'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 0
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    },
                    onHover: (event, chartElement) => {
                        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
                    }
                }
            });

            // Add data labels manually since Chart.js 4 doesn't have built-in datalabels
            ctx.canvas.addEventListener('mousemove', function() {
                const datasets = chart.data.datasets;
                for (let i = 0; i < datasets.length; i++) {
                    const meta = chart.getDatasetMeta(i);
                    const dataset = datasets[i];
                    for (let j = 0; j < meta.data.length; j++) {
                        const model = meta.data[j];
                        ctx.fillStyle = dataset.borderColor;
                        ctx.font = '11px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillText(dataset.data[j] + '%', model.x, model.y - 5);
                    }
                }
            });
    }, []);

    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');
            
            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Dosen', 'Mahasiswa', 'Tendik'],
                    datasets: [
                        {
                            label: 'SKM',
                            data: [3.63, 3.58, 3.33],
                            backgroundColor: 'rgba(54, 162, 235, 0.8)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            borderRadius: 4,
                            barPercentage: 0.6,
                            categoryPercentage: 0.8
                        },
                        {
                            label: 'IKM',
                            data: [90.74, 89.55, 83.33],
                            backgroundColor: 'rgba(255, 99, 71, 0.8)',
                            borderColor: 'rgba(255, 99, 71, 1)',
                            borderWidth: 1,
                            borderRadius: 4,
                            barPercentage: 0.6,
                            categoryPercentage: 0.8
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    devicePixelRatio: 2,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                boxWidth: 12,
                                font: {
                                    size: 12
                                },
                                padding: 20
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            titleFont: {
                                size: 14
                            },
                            bodyFont: {
                                size: 13
                            },
                            padding: 12,
                            cornerRadius: 6,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw + '%';
                                }
                            }
                        },
                        datalabels: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                },
                                font: {
                                    size: 11
                                }
                            },
                            title: {
                                display: true,
                                text: 'Tingkat Pemahaman (%)',
                                font: {
                                    size: 12,
                                    weight: 'normal'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 10
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                font: {
                                    size: 11
                                }
                            },
                            title: {
                                display: true,
                                text: 'Responden',
                                font: {
                                    size: 12,
                                    weight: 'normal'
                                },
                                padding: {
                                    top: 10,
                                    bottom: 0
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    },
                    onHover: (event, chartElement) => {
                        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
                    }
                }
            });

            // Add data labels manually since Chart.js 4 doesn't have built-in datalabels
            ctx.canvas.addEventListener('mousemove', function() {
                const datasets = chart.data.datasets;
                for (let i = 0; i < datasets.length; i++) {
                    const meta = chart.getDatasetMeta(i);
                    const dataset = datasets[i];
                    for (let j = 0; j < meta.data.length; j++) {
                        const model = meta.data[j];
                        ctx.fillStyle = dataset.borderColor;
                        ctx.font = '11px Arial';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillText(dataset.data[j] + '%', model.x, model.y - 5);
                    }
                }
            });
    }, [])
        
    return (
        <HomeLayout header="Visi & Misi">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Visi & Misi Fakultas Teknik</h1>
                </div>
            </section>


            {/* Visi Misi Section */}
            <div className="vision-mission-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <h1 className="vision-mission-title py-4"><b>Visi</b></h1>
                            <p className="visi-list mt-4">Pada Tahun 2035 menjadikan Fakultas yang Inovatif, Unggul, Islami dan
                                berwawasan Global dalam penyelenggaraan tri dharma serta menghasilkan lulusan yang menguasai teknologi
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h1 className="vision-mission-title py-4"><b>Misi</b></h1>
                            <ul className="misi-list mt-4">
                                <li>Menyelenggarakan Pendidikan, penelitian dan Pengabdian kepada Masyarakat secara Profesional dan
                                    berkesinambungan.
                                </li>
                                <li>Meningkatkan kualitas dan profesionalisme tenaga Pengajar dan administrasi.</li>
                                <li>Meningkatkan sarana dan prasarana pendidikan penunjang proses pembelajaran teknik.</li>
                                <li>Meningkatkan jaringan kerja sama dengan berbagai instansi pemerintah maupun non pemerintah.</li>
                                <li>Meningkatkan atmosfir akademik melalui proses belajar mengajar yang berkualitas.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feedback-section">
                <div className="container">
                    <h1 className="border-title text-center mb-5"><b>Tujuan & Sasaran</b></h1>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <h2 className="text-center mb-4"><b>Tujuan</b></h2>
                            <ul className="tujuan-list">
                                <li>Meningkatkan kualitas pendidikan tinggi Fakultas Teknik UNAYA yang unggul,
                                    terintegrasi dan berkelanjutan
                                </li>
                                <li>Meningkatkan kualitas penelitian dan publikasi di bidang sains dan teknologi
                                    di jurnal nasional dan internasional bereputasi
                                </li>
                                <li>Meningkatkan kerjasama dengan berbagai pihak secara berkelanjutan baik lokal maupun global
                                </li>
                                <li>Meningkatkan kualitas sumber daya manusia yang kompeten dan profesional
                                </li>
                                <li>
                                    Meningkatkan kapasitas organisasi dan tata kelola di bidang administrasi dan keuangan yang
                                    efisien, akuntabel, transparan, terintegrasi antar bidang dan berkelanjutan.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-center mb-4"><b>Sasaran Strategis</b></h2>
                            <ul className="tujuan-list mb-5">
                                <li>Peningkatan Akses dan Kualitas Penerimaan Mahasiswa Baru</li>
                                <li>Tersedianya program studi berkualitas</li>
                                <li>Lulusan mendapatkan pekerjaan yang layak</li>
                                <li>Tersedianya layanan berkualitas </li>
                                <li>Meningkatkan prestasi mahasiswa di tingkat nasional dan internasional</li>
                                <li>Meningkatkan skema penelitian dan pengabdian kepada masyarakat</li>
                                <li>Meningkatnya publikasi, produk inovasi, HKI, dan hilirisasi hasil-hasil penelitian</li>
                                <li>Meningkatkan kontribusi dalam kerja sama bidang pendidikan, penelitian dan pengabdian kepada masyarakat</li>
                                <li>Tersedianya sumber daya manusia berkarakter pembelajar yang produktif dan berdaya saing</li>
                                <li>Menciptakan tata kelola organisasi yang fleksibel, akuntabel, transparan, efisien, dan efektif</li>
                                <li>Mengembangkan infrastruktur untuk memuhi kebutuhan Tri Dharma </li>
                            </ul>


                        </div>
                        {/* <!-- end accordion--> */}
                    </div>
                </div>
            </div>
            {/* <!-- end main content --> */}
            <div className="chart-container">
                <h2>Grafik Pencapaian</h2>
                <div className="chart-card">
                    <div className="chart-title">
                        Tingkat ketercapaian pemahaman <span>dosen, mahasiswa dan tendik</span>
                        <br />terhadap visi misi Fakultas Teknik UNAYA Tahun 2024
                    </div>
                    <canvas id="myChart2024"></canvas>
                </div>
                <div className="chart-card">
                    <div className="chart-title">
                        Tingkat ketercapaian pemahaman <span>dosen, mahasiswa dan tendik</span>
                        <br />terhadap visi misi Fakultas Teknik UNAYA Tahun 2023
                    </div>
                    <canvas id="myChart2023"></canvas>
                </div>
                <div className="chart-card">
                    <div className="chart-title">
                        Tingkat ketercapaian pemahaman <span>dosen, mahasiswa dan tendik</span>
                        <br />terhadap visi misi Fakultas Teknik UNAYA Tahun 2022
                    </div>
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </HomeLayout>
    );
}
