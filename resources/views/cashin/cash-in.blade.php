
<div class="modal fade" id="cashIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary ">
            <h5 class="modal-title text-white" id="cashInModalTitle">Cash In</h5>
            <button type="button" class="close cash-in-modal-close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
        <div class="modal-body" >
            <input type="hidden" class="route-prefix" value="{{ Auth::user()->type }}" />
        <div class="cashInForm">
            <form onsubmit="return false;">
            <div class="form-group d-flex flex-row">
                    <div class="cashin-default-elements">
                          <button type="button" class="btn btn-lg btn-crypto  btn-outline-primary">
                             <img src="/images/icons/bitcoin.png" width="100" /></button>
                          <button type="button" class="btn btn-lg btn-outline-warning btn-fiat">
                            <img src="/images/icons/bank.png" width="100" /></button></button>
                          <button type="button" class="btn btn-lg btn-outline-success btn-crypto-withdrawal">
                            <img src="/images/icons/crypto-withdrawal.png" width="100" /></button></button>
                    </div>
                  <div class="crypto-element  d-none">
                      <button type="button" class="btn btn-lg btn-outline-danger btn-cancel"> @lang('cancel')</button>
                      <button type="submit" class="btn btn-lg btn-outline-primary btn-withdraw"> @lang('Withdraw')</button>
                  </div>
              </div>
              <div class="form-group d-none amountContainer">
                <label for="cash-in-amount" class="col-form-label">@lang('Amount')</label>
                <input type="number" class="form-control" id="cash-in-amount" required>
              </div>
              <div class="form-group crypto-withdrawal-container d-none">
                <label for="wallet-address" class="col-form-label">@lang('Wallet Address')</label>
                <input type="hidden" class="form-control" id="wallet-address" required>
                <div class="wallet_title_section d-none">
                    <label for="wallet_title" class="col-form-label">@lang('Wallet Title')</label>
                    <input type="hidden" class="form-control" id="wallet-title" disabled required>
                </div>
                <div class="p-3 pl-4 d-none set-as-default-wallet">
                    <input class="form-check-input" type="checkbox" value="" id="check-use-as-default-wallet">
                    <label class="form-check-label" for="check-use-as-default-wallet">@lang('Set this as default wallet.')</label>
                </div>
                <div class="p-3 pl-4 d-none">
                    <input class="form-check-input check-use-withdrawal-wallet" type="checkbox" value="" id="check-use-wallet-address">
                    <label class="form-check-label" for="check-use-wallet-address">@lang('Use existing withdrawal wallet')</label>
                </div>
              </div>
              <div class="form-group d-flex flex-row-reverse">
              <div class="proceed-container  d-none">
                  <button type="button" class="btn btn-lg btn-outline-danger btn-cancel"> @lang('cancel')</button>
                  <button type="submit" class="btn btn-lg btn-outline-primary btn-proceed"> @lang('Proceed')</button>
              </div>
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

