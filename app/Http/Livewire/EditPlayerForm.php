<?php

namespace App\Http\Livewire;

use App\Domains\Auth\Models\User;
use App\Domains\Hub\Models\Hub;
use Livewire\Component;


class EditPlayerForm extends Component
{
    public $hubs;
    public $agents;
    public $hubId = '';
    public $hub;
    public $player;
    public $agent = null;

    public function mount($player)
    {
        $this->player = $player;
        $this->hubs = Hub::all();
        $this->hub = $this->hubs->first();
    }

   public function change()
   {
       if($this->hubId === '')
       {
           $this->agent = null;
           return;
       }
       $this->agents = User::where('hub_id', $this->hubId)
           ->whereHas('roles', function ($query) {
               return $query->where('name', 'Master Agent');
           })->get();

       if($this->agents->count() === 0) {
           $this->emit('swal:alert', [
               'icon' => 'warning',
               'title' => 'The selected hub does not have any master agent. Please Select other hubs',
           ]);
           $this->agent = null;
           return;
       }
       $this->agent = $this->agents->first();
   }

    public function render()
    {
        return view('livewire.default.edit-player-form');
    }
}
