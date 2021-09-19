
<div class="modal fade" id="cashIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cashInModalTitle">Cash In</h5>
            <button type="button" class="close cash-in-modal-close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        <div class="modal-body" >
        <div class="cashInForm">
            <form onsubmit="return false;">
              <div class="form-group">
                <label for="cash-in-amount" class="col-form-label">@lang('Amount')</label>
                <input type="number" class="form-control" id="cash-in-amount" wire:model="amount" required>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-lg btn-outline-primary btn-crypto"><i class='fa fa-eye'></i> @lang('Crypto')</button>
                <button type="submit" class="btn btn-lg btn-outline-warning btn-fiat"><i class='fa fa-eye'></i> @lang('Bank')</button>
              </div>
            </form>
        </div>
        <div class="paymentOrderIframe  d-none">
            <iframe
            class="cryptoIframe"
            frameBorder="0"
            scrolling="no"
            src=""></iframe>
        </div>
      </div>
    </div>
    </div>
</div>

