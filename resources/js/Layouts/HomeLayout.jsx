import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function HomeLayout({ children, header }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`flex-shrink-0 w-64 bg-gray-800 text-white transition-transform transform ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } sm:translate-x-0 sm:static fixed h-full z-30`}
            >
                <div className="flex items-center justify-center h-16 bg-gray-900">
                    <span className="text-xl font-semibold">Admin Panel</span>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                    <Link
                        href="/products"
                        className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        <svg className="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        Products
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
                    <div className="flex items-center">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="text-gray-500 focus:outline-none sm:hidden"
                        >
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800 ml-4 sm:ml-0">{header}</h2>
                    </div>
                </header>

                {/* Main */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        {children}
                    </div>
                </main>
            </div>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 sm:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
}
