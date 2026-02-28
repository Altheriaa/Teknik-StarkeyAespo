import AdminLayout from '../../Layouts/HomeLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        price: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/products');
    };

    return (
        <AdminLayout header="Create Product">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-gray-700 text-3xl font-medium">Add New Product</h3>
                <Link
                    href="/products"
                    className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                    Back to List
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        {errors.title && <p className="text-red-500 text-xs italic mt-2">{errors.title}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="4"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-xs italic mt-2">{errors.description}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            step="0.01"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                        />
                        {errors.price && <p className="text-red-500 text-xs italic mt-2">{errors.price}</p>}
                    </div>

                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
                        >
                            Save Product
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
