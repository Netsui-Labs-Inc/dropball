
        <div>
            <p class="pb-2 text-center">
                Current Income Wallet Balance <br>
                <span class="lead">{{ $walletBalance }}</span>
            </p>
            <div class="row">
                <label for="amount" class="col col-form-label">
                    @lang('Amount')
                    <span class="text-danger"> @lang('* Minimum amount is : ' ){{ Config::get('dropball.minimum_withdrawal') }}</span>
                </label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <input type="number" class="form-control" name="amount" min="1" step="1">
                </div>
            </div>
            <div class="row">
                <label for="amount" class="col col-form-label">@lang('Channel')</label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <select name="channel" class="form-control" wire:change="change" wire:model="channel">
                        <option value="gcash">GCash</option>
                        <option value="paymaya">Paymaya</option>
                        <option value="bank">Bank</option>
                    </select>
                </div>
            </div>
            <div class="row
                @if(!$isAccountNameRequired)
                    d-none
                @endif
            ">
                <label for="account_name" class="col col-form-label">
                    @lang('Account Name')
                </label>
            </div>
            <div class="form-group row
                @if(!$isAccountNameRequired)
                    d-none
                @endif
            ">
                <div class="col">
                    <input type="text" class="form-control" name="account_name" wire:model="accountName" min="1" step="1">
                </div>
            </div>
            <div class="row">
                <label for="account_number" class="col col-form-label">
                    @lang('Account Number')
                </label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <input type="text" class="form-control" name="account_number" min="1" step="1">
                </div>
            </div>
            <div class="row">
                <label for="amount" class="col col-form-label">@lang('Details')</label>
            </div>
            <div class="form-group row">
                <div class="col">
                    <textarea class="form-control" name="details"></textarea>
                </div>
            </div>

            <div class="row">
                <label for="password" class="col col-form-label">@lang('Enter Password')</label>
            </div>
            <div class="form-group row">
                <div class="col relative">
                    <input type="password" class="form-control" name="password" >
                    <i class="eyecandy"></i>
                </div>
            </div>
        </div>

