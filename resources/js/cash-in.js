import axios from "axios";
import { Resolver } from "laravel-mix/src/Resolver";

class cashIn {

    constructor()
    {
        this.form = $('.cashInForm');
        this.iFrameContainer = $('.paymentOrderIframe');
        this.btnCrypto = $('.btn-crypto');
        this.btnRefresh = $('.btn-refresh');
        this.btnFiat = $('.btn-fiat');
        this.iFrame = $('.cryptoIframe');
        this.btnClose = $('.cash-in-modal-close');
        this.modalBody = $('.modal-body');
        this.iFrame.css({
            'min-width'  : '400px',
            'min-height' : '1100px'
        });
        this.iFrameContainer.css({
            'height' : '1100px'
        });
        this.btnFiat = $('.btn-fiat');
        this.inputAmount = $('#cash-in-amount');
        this.setEvent();
    }

    setEvent()
    {
        let self = this;
        this.btnCrypto.on('click', function() {
            self.requestPaymentOrder(self, 'crypto-payment');
        });

        this.btnFiat.on('click', function() {
            self.requestPaymentOrder(self, 'fiat-payment');
        });

        this.btnClose.on('click', function() {
            self.modalClose(self);
        });

        this.btnRefresh.on('click', function(event) {
            self.requestCashInUpdate($(event.target), self)
        });
    }

    requestCashInUpdate(refreshBtn, self)
    {
        refreshBtn.removeClass('fa-sync');
        refreshBtn.addClass('fa-spinner fa-spin');
        let cashInId = refreshBtn.attr('data-cash_in_id');
        axios({
            method: 'post',
            url: '/cash-in/refresh',
            data: {
                'cash-in-id' : cashInId,
            }
        }).then((response) => {
            refreshBtn.addClass('fa-sync');
            refreshBtn.removeClass('fa-spinner fa-spin');
            self.changeStatus(response.data, cashInId);
        });
    }

    changeStatus(status, cashInId)
    {
        if (status === 'Success') {
            $('.cashIn-' + cashInId)
            .removeClass('text-danger')
            .removeClass('text-warning')
            .addClass('text-success')
            .text(status);
        } else if(status === 'Failed') {
            $('.cashIn-' + cashInId)
            .removeClass('text-success')
            .removeClass('text-warning')
            .addClass('text-danger')
            .text(status);
        }

    }

    modalClose(self) {
        self.form.trigger('reset');
        self.btnCrypto.removeAttr('disabled');
        self.btnFiat.removeAttr('disabled')
        self.inputAmount.val('');
        self.form.removeClass('d-none');
        self.modalBody.removeClass('d-flex justify-content-center');
        self.iFrameContainer.addClass('d-none');
        location.reload();
    }

    requestPaymentOrder(self, channel)
    {
        if(!self.inputAmount.val()) {
            return;
        }

        axios({
            method: 'post',
            url: '/cash-in',
            data: {
                'channel' : channel,
                'amount'  : self.inputAmount.val()
            }
        }).then((response) => {
            if(channel === 'fiat-payment') {
                self.redirectToFiat(response['data']['url'], self)
                return;
            }
            self.showCryptoPayment(response['data'], self)
        });
    }

    showCryptoPayment(paymentOrderResponse, self)
    {
        self.form.addClass('d-none');
        self.iFrameContainer.removeClass('d-none');
        self.modalBody.addClass('d-flex justify-content-center');
        self.iFrame.attr('src', paymentOrderResponse['url']);

    }

    redirectToFiat(url, self)
    {
        window.open(url, '_blank');
        self.modalClose(self);
    }
}
export default cashIn;
