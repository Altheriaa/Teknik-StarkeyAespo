import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function Index({ agendas }) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Agenda">
            {flash?.success && (
                <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{flash.success}</span>
                </div>
            )}

            <div className="flex justify-between items-center mb-6">
                <h3 className="text-gray-700 text-3xl font-medium">Agenda List</h3>
                <Link
                    href="/agenda/create"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
                >
                    Add Agenda
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tahun Agenda
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nama Agenda
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Masa Agenda
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tanggal
                            </th>
                            {/* <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th> */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {agendas.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                    No agenda found.
                                </td>
                            </tr>
                        ) : (
                            agendas.map((agenda) => (
                                <tr key={agenda.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {agenda.tahun_agenda}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-xs">
                                        {agenda.nama_agenda}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {agenda.masa_agenda}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {agenda.date}
                                    </td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                        <Link href={`/products/${product.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900">
                                            Delete
                                        </button>
                                    </td> */}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </HomeLayout>
    );
}
