import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        login: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login', {
            onFinish: () => setData('password', ''),
        });
    };

    return (
        <HomeLayout header="Login">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Login Quality Assurance</h1>
                    <p className="lead fade-in">Universitas Abulyatama</p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-5">
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">
                                    <p className="text-muted mb-4">
                                        <i className="fa-solid fa-lock me-2"></i>
                                        Halaman Quality Assurance hanya dapat diakses oleh pengguna
                                        terdaftar. Silakan masuk terlebih dahulu.
                                    </p>

                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className="mb-3">
                                            <label htmlFor="login" className="form-label">Username</label>
                                            <input
                                                id="login"
                                                type="text"
                                                className={`form-control ${errors.login ? 'is-invalid' : ''}`}
                                                value={data.login}
                                                onChange={(e) => setData('login', e.target.value)}
                                                autoComplete="username"
                                                autoFocus
                                            />
                                            {errors.login && (
                                                <div className="invalid-feedback">{errors.login}</div>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input
                                                id="password"
                                                type="password"
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                autoComplete="current-password"
                                            />
                                            {errors.password && (
                                                <div className="invalid-feedback">{errors.password}</div>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-success w-100"
                                            disabled={processing}
                                        >
                                            {processing ? 'Memproses...' : 'Masuk'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}