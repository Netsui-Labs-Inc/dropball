
    {{-- <div>
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label">@lang('Amount')</label>
            <div class="col-md-8">
                <input type="number" wire:model="amount" class="form-control" name="amount" min="1" step="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label">@lang('Channel')</label>
            <div class="col-md-8">
                <a href="/cash-in/crypto-payment/{{ $amount }}" target="_blank" class='btn btn-lg btn-outline-primary'><i class='fa fa-eye'></i> @lang('Crypto')</a>
                <a href="/cash-in/fiat-payment/{{ $amount }}" target="_blank" class='btn btn-lg btn-outline-warning'><i class='fa fa-eye'></i> @lang('Bank')</a>
            </div>
        </div>
    </div> --}}

    <div class="modal-body">
        <form class="cashInForm">
          <div class="form-group">
            <label for="cash-in-amount" class="col-form-label">@lang('Amount')</label>
            <input type="number" class="form-control" id="cash-in-amount" wire:model="amount" required>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-lg btn-outline-primary" wire:click="redirectToPaymentOrder('crypto-payment')"><i class='fa fa-eye'></i> @lang('Crypto')</button>
            <button type="submit" class="btn btn-lg btn-outline-warning"><i class='fa fa-eye'></i> @lang('Bank')</button>
            <a href="/cash-in/fiat-payment/{{ $amount }}" target="_blank" class='d-none'>@lang('Bank')</a>
          </div>
        </form>
      </div>
