<?php

namespace App\Domains\MasterAgent\Http\Service;

class AgentFilter
{
    private $query;

    public function setAgent($query, $isAgent)
    {
        if ($isAgent === '1') {
            $this->query = $query->where('referred_by', '!=', null);
        } else {
            $this->query = $query->where('referred_by', null);
        }
        return $this;
    }

    public function getQuery()
    {
        return $this->query;
    }

}
