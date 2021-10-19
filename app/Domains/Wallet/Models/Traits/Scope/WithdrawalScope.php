<?php

namespace App\Domains\Wallet\Models\Traits\Scope;

/**
 * Class UserScope.
 */
trait WithdrawalScope
{
    /**
     * @param $query
     * @param $term
     *
     * @return mixed
     */
    public function scopeSearch($query, $term)
    {
        return $query->where(function ($query) use ($term) {
            $query->Where('channel', $term)
                ->orwhere('account_name', 'like', '%'.$term.'%')
                ->orWhere('account_number', 'like', '%'.$term.'%');
        });
    }


}
