<?php

namespace App\Http\Controllers\Concerns;

use Illuminate\Http\Request;

trait ResolvesEspmiFilter
{
    /**
     * Hanya terima prodi & siklus yang ada di config; selain itu pakai default.
     *
     * @return array{0: string, 1: string, 2: array, 3: array} [$prodi, $siklus, $prodiList, $siklusList]
     */
    protected function resolveEspmiFilter(Request $request): array
    {
        $prodiList = config('espmi.program_studi');
        $siklusList = config('espmi.siklus');

        // Ka. Prodi terkunci ke satu program studi miliknya; parameter ?prodi= diabaikan
        $user = $request->user();
        if ($user?->isKaprodi()) {
            abort_unless(in_array($user->program_studi, $prodiList, true), 403);
            $prodiList = [$user->program_studi];
        }

        $prodi = $request->input('prodi');
        if (! in_array($prodi, $prodiList, true)) {
            $prodi = $prodiList[0];
        }

        $siklus = $request->input('siklus');
        if (! array_key_exists($siklus, $siklusList)) {
            $siklus = config('espmi.siklus_aktif');
        }

        return [$prodi, $siklus, $prodiList, $siklusList];
    }
}