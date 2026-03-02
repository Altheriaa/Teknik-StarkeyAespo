<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\Visitor;
use Carbon\Carbon;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $now = Carbon::now();

        return [
            ...parent::share($request),
            'visitors' => [
                'today' => Visitor::whereDate('created_at', Carbon::today())->count(),
                'yesterday' => Visitor::whereDate('created_at', Carbon::yesterday())->count(),
                'thisWeek' => Visitor::whereBetween('created_at', [$now->copy()->startOfWeek(), $now->copy()->endOfWeek()])->count(),
                'lastWeek' => Visitor::whereBetween('created_at', [$now->copy()->subWeek()->startOfWeek(), $now->copy()->subWeek()->endOfWeek()])->count(),
                'thisMonth' => Visitor::whereMonth('created_at', $now->month)->whereYear('created_at', $now->year)->count(),
                'lastMonth' => Visitor::whereMonth('created_at', $now->copy()->subMonth()->month)->whereYear('created_at', $now->copy()->subMonth()->year)->count(),
                'total' => Visitor::count(),
            ],
        ];
    }
}
