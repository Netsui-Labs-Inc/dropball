
    <div>
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label">@lang('Amount')</label>
            <div class="col-md-8">
                <input type="number" wire:model="amount" class="form-control" name="amount" min="1" step="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label">@lang('Channel')</label>
            <div class="col-md-8">
                <button class='btn btn-lg btn-outline-primary' wire:click="cashIn('crypto-payment')"><i class='fa fa-eye'></i> @lang('Crypto')</button>
                <button href='#' class='btn btn-lg btn-outline-warning' wire:click="cashIn('fiat-payment')"><i class='fa fa-eye'></i> @lang('Bank')</button>
            </div>
        </div>
    </div>

