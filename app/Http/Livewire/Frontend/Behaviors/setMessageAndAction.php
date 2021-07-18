<?php

namespace App\Http\Livewire\Frontend\Behaviors;

trait setMessageAndAction
{
    use libStrings;
    use PopUpMessage;
    private $selectedOption;
    private $oMessage;
    private $sInitialMessage;
    private $sUser;
    private $aMethod;
    private $method;
    private $oPopUpMessage;

    public function initialize($aMethod)
    {
        $this->sInitialMessage = $this->MESSAGE_PARAMS;
        $this->aMethod= $aMethod;
        return $this;
    }

    public function pReset()
    {
        $this->MESSAGE_PARAMS = $this->sInitialMessage;
    }

    public function setOption($sSelectedOption)
    {
        $this->selectedOption = $sSelectedOption;
        return $this;
    }

    public  function setRole($user)
    {
        if ($user->hasRole('Bet Admin')) {
            $this->sUser = $this->BET_ADMIN;
            $this->method =$this->aMethod[$this->BET_ADMIN];
            return $this;
        }
        $this->sUser = $this->DEALER_ADMIN;
        $this->method =$this->aMethod[$this->DEALER_ADMIN];
        return $this;
    }

    public function setExecute($method)
    {
        if ($method === '') {
            return false;
        }
        return true;
    }

    public function setMessage($action, $messageMethod, $params, $callback = '', $callbackParams = null)
    {
        $this->appendOptionToTitle($this->selectedOption);
        $this->MESSAGE_PARAMS[$this->sUser][$action]['method'] = $messageMethod;
        $this->MESSAGE_PARAMS[$this->sUser][$action]['params'] = $params;
        $this->MESSAGE_PARAMS[$this->sUser][$action]['callbackParams'] = $callbackParams;
        if ($callback !== '') {
            $this->MESSAGE_PARAMS[$this->sUser][$action]['callback'] = $callback;
        }
        $this->oMessage = $this->{$this->method}(
            $this->MESSAGE_PARAMS[$this->sUser][$action]
        );
        return $this;
    }

    public function exec()
    {
        $this->emit( $this->oMessage['type'],  $this->oMessage['params']);
        $this->pReset();
    }

}
