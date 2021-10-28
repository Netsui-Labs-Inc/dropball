<div>

<div class="modal fade" id="cashIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary ">
            <h5 class="modal-title text-white" id="cashInModalTitle">Cash In</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
        <div class="modal-body" >
            <input type="hidden" class="route-prefix" value="{{ Auth::user()->type }}" />
        <div class="cashInForm">

              <div class="form-group amountContainer">
                <label for="cash-in-amount" class="col-form-label">@lang('Amount')</label>
                <input type="number" class="form-control" id="cash-in-amount" required>
              </div>
              <div class="form-group d-flex flex-row-reverse">
              <div class="proceed-container">
                  <button type="button" class="btn btn-lg btn-outline-danger btn-cancel" data-dismiss="modal"> @lang('cancel')</button>
                  <button type="button" wire:click="createInvoice" class="btn btn-lg btn-outline-primary btn-proceed"> @lang('Proceed')</button>
              </div>
          </div>

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

</div>
