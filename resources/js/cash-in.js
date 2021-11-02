// import axios from "axios";

// class cashIn {

//     constructor()
//     {
//         this.form = $('.cashInForm');
//         this.iFrameContainer = $('.paymentOrderIframe');
//         this.btnCrypto = $('.btn-crypto');
//         this.btnRefresh = $('.btn-refresh');
//         this.btnFiat = $('.btn-fiat');
//         this.iFrame = $('.cryptoIframe');
//         this.btnClose = $('.cash-in-modal-close');
//         this.modalBody = $('.modal-body');
//         this.iFrame.css({
//             'min-width'  : '400px',
//             'min-height' : '1100px'
//         });
//         this.iFrameContainer.css({
//             'height' : '1100px'
//         });
//         this.btnFiat = $('.btn-fiat');
//         this.inputAmount = $('#cash-in-amount');
//         this.inputWalletAddress = $('#wallet-address');
//         this.btnCrytoWithdrawal = $('.btn-crypto-withdrawal');
//         this.proceedContainer = $('.proceed-container');
//         this.checkUseWalletAddress = $('#check-use-wallet-address');
//         this.walletSection = $('.wallet_title_section');
//         this.walletTitle = $('#wallet-title');
//         this.cashInDefaultElements = $('.cashin-default-elements');
//         this.btnCancel = $('.btn-cancel');
//         this.btnProceed = $('.btn-proceed');
//         this.setAsDefaultWallet = $('.set-as-default-wallet');
//         this.checkSetDefaultWallet = $('#check-use-as-default-wallet');
//         this.routePrefix = this.getRoutePrefix($('.route-prefix').val());
//         this.isDefaultWallet = false;
//         this.amountContainer = $('.amountContainer');
//         this.isCryptoWithdrawal = false;

//         this.CRYPTO_CHANNEL = 1;
//         this.FIAT_CHANNEL = 2;
//         this.CRYPTO_WITHDRAWAL_CHANNEL = 3;
//         this.selectedChannel = 0;
//         this.modalTitle = $('#cashInModalTitle');
//         this.cryptoWithdrawalContainer = $('.crypto-withdrawal-container');
//         this.setEvent();
//     }

//     getRoutePrefix(userType) {
//         if (userType === 'admin') {
//             return '/admin';
//         }
//         return '';
//     }

//     setEvent()
//     {
//         let self = this;
//         this.btnCrypto.on('click', function() {
//             self.amountContainer.removeClass('d-none');
//             self.selectedChannel = self.CRYPTO_CHANNEL;
//             self.modalTitle.text('Cash In - Crypto');
//             self.proceedContainer.removeClass('d-none');
//             self.btnCrypto.removeClass('btn-outline-primary');
//             self.btnCrypto.addClass('btn-primary');

//             self.btnFiat.addClass('btn-outline-warning');
//             self.btnFiat.removeClass('btn-warning');

//             self.btnCrytoWithdrawal.addClass('btn-outline-success');
//             self.btnCrytoWithdrawal.removeClass('btn-success');

//             self.inputWalletAddress.attr('type', 'hidden');
//             self.cryptoWithdrawalContainer.addClass('d-none');
//         });

//         this.btnFiat.on('click', function() {
//             self.amountContainer.removeClass('d-none');
//             self.selectedChannel = self.FIAT_CHANNEL;
//             self.modalTitle.text('Cash In - Bank');
//             self.proceedContainer.removeClass('d-none');
//             self.btnFiat.removeClass('btn-outline-warning');
//             self.btnFiat.addClass('btn-warning');

//             self.btnCrypto.addClass('btn-outline-primary');
//             self.btnCrypto.removeClass('btn-primary');

//             self.btnFiat.addClass('btn-outline-warning');
//             self.btnFiat.removeClass('btn-warning');

//             self.inputWalletAddress.attr('type', 'hidden');
//             self.cryptoWithdrawalContainer.addClass('d-none');
//         });

//         this.btnClose.on('click', function() {
//             self.amountContainer.removeClass('d-none');
//             self.modalClose(self);
//         });

//         this.btnRefresh.on('click', function(event) {
//             self.requestCashInUpdate($(event.target), self)
//         });

//         this.btnCrytoWithdrawal.on('click', function() {
//             self.amountContainer.removeClass('d-none');
//             self.selectedChannel = self.CRYPTO_WITHDRAWAL_CHANNEL;
//             self.modalTitle.text('Cash In - Crypto Withdrawal');
//             self.proceedContainer.removeClass('d-none');
//             self.btnCrytoWithdrawal.removeClass('btn-outline-success');
//             self.btnCrytoWithdrawal.addClass('btn-success');

//             self.btnCrypto.addClass('btn-outline-primary');
//             self.btnCrypto.removeClass('btn-primary');

//             self.btnFiat.addClass('btn-outline-warning');
//             self.btnFiat.removeClass('btn-warning');

//             self.inputWalletAddress.attr('type', 'text');
//             self.cryptoWithdrawalContainer.removeClass('d-none');
//             //self.cryptoElement.removeClass('d-none');

//         });

//         this.checkUseWalletAddress.on('click', function() {
//             self.showWalletAddressTitle(
//                 ($('#check-use-wallet-address:checkbox:checked').length > 0),
//                 self
//             );
//         });

//         this.btnCancel.on('click', function() {
//             self.amountContainer.addClass('d-none');
//             self.selectedChannel = 0;
//             self.modalTitle.text('Cash In');
//             self.proceedContainer.addClass('d-none');

//             self.btnCrytoWithdrawal.addClass('btn-outline-success');
//             self.btnCrytoWithdrawal.removeClass('btn-success');

//             self.btnCrypto.addClass('btn-outline-primary');
//             self.btnCrypto.removeClass('btn-primary');

//             self.btnFiat.addClass('btn-outline-warning');
//             self.btnFiat.removeClass('btn-warning');

//             self.inputWalletAddress.attr('type', 'hidden');
//             self.cryptoWithdrawalContainer.addClass('d-none');

//            // self.isCryptoWithdrawal = false;
//             //self.setCryptoWithdrawal(self, false);
//         });

//         this.btnProceed.on('click', function() {
//             self.proceedCashIn(self);
//             //self.requestPaymentOrder(self, 'crypto-withdrawal');
//         });

//         this.inputWalletAddress.on('keyup', function() {
//             self.checkInputWalletAddressValidity(self.inputWalletAddress);
//             if (self.inputWalletAddress.val().length > 0) {
//                 //self.setAsDefaultWallet.removeClass('d-none');
//                 return;
//             }
//             //self.setAsDefaultWallet.addClass('d-none');
//         });

//         this.checkSetDefaultWallet.on('click', function() {
//             if($('#check-use-as-default-wallet:checkbox:checked').length > 0) {
//                 self.isDefaultWallet = true;
//                 self.walletSection.removeClass('d-none');
//                 self.walletTitle.prop('disabled', false).attr('type','text');
//                 return;
//             }
//                 self.isDefaultWallet = false;
//                 self.walletSection.addClass('d-none');
//                 self.walletTitle.prop('disabled', true).attr('type','text');
//         });
//     }

//     proceedCashIn(self)
//     {
//         if(self.selectedChannel === self.CRYPTO_CHANNEL) {
//              self.requestPaymentOrder(self, 'crypto-payment');
//             return;
//         }

//         if(self.selectedChannel === self.FIAT_CHANNEL) {
//             self.requestPaymentOrder(self, 'fiat-payment');
//             return;
//         }

//         if(self.selectedChannel === self.CRYPTO_WITHDRAWAL_CHANNEL) {
//             self.requestPaymentOrder(self, 'crypto-withdrawal');
//             //elf.isCryptoWithdrawal = true;
//             //self.setCryptoWithdrawal(self, true);
//             return;
//         }
//     }

//     checkInputWalletAddressValidity(walletAddress)
//     {
//         if(!(/^[a-zA-Z0-9]*$/.test(walletAddress.val())))
//         {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Cannot accept special characters!'
//               });

//             walletAddress.focus().val(walletAddress.val().slice(0, -1));
//         }
//     }
//     setCryptoWithdrawal(self, $on)
//     {
//         if($on) {
//             self.inputWalletAddress.attr('type', 'text');
//             self.cryptoElement.removeClass('d-none');
//             self.cashInDefaultElements.addClass('d-none');
//             return;
//         }
//         self.cryptoElement.addClass('d-none');
//         self.cashInDefaultElements.removeClass('d-none');
//     }

//     getWallet()
//     {
//         axios({
//             method: 'post',
//             url: self.routePrefix + '/cash-in/refresh'
//         }).then((response) => {
//             refreshBtn.addClass('fa-sync');
//             refreshBtn.removeClass('fa-spinner fa-spin');
//             self.changeStatus(response.data, cashInId);
//         });
//     }

//     showWalletAddressTitle(isChecked, self)
//     {
//         self.inputWalletAddress.prop('disabled', isChecked);
//         if(isChecked) {
//             self.walletSection.removeClass('d-none');
//             self.walletTitle.attr('type', 'text');
//             self.getWalletAddress(self);
//             self.setAsDefaultWallet.addClass('d-none');
//             return;
//         }

//         self.walletTitle.attr('type', 'hidden').val('');
//         self.walletSection.addClass('d-none');
//         self.inputWalletAddress.val('');
//     }

//     getWalletAddress(self)
//     {
//         axios({
//             method: 'post',
//             url: self.routePrefix + '/cash-in/wallet-address'
//         }).then((response) => {
//             self.inputWalletAddress.val(response.data.wallet_address);
//             self.walletTitle.val(response.data.title);
//         });
//     }

//     requestCashInUpdate(refreshBtn, self)
//     {

//         refreshBtn.removeClass('fa-sync');
//         refreshBtn.addClass('fa-spinner fa-spin');
//         let cashInId = refreshBtn.attr('data-cash_in_id');
//         axios({
//             method: 'post',
//             url: self.routePrefix + '/cash-in/refresh',
//             data: {
//                 'cash-in-id' : cashInId,
//             }
//         }).then((response) => {

//             refreshBtn.addClass('fa-sync');
//             refreshBtn.removeClass('fa-spinner fa-spin');
//             self.changeStatus(response.data, cashInId);
//         });
//     }

//     changeStatus(status, cashInId)
//     {

//         if (status === 'Success') {
//             $('.cashIn-' + cashInId)
//             .removeClass('text-danger')
//             .removeClass('text-warning')
//             .addClass('text-success')
//             .text(status);
//         } else if(status === 'Failed') {
//             $('.cashIn-' + cashInId)
//             .removeClass('text-success')
//             .removeClass('text-warning')
//             .addClass('text-danger')
//             .text(status);
//         }

//     }

//     modalClose(self) {
//         self.form.trigger('reset');
//         self.btnCrypto.removeAttr('disabled');
//         self.btnFiat.removeAttr('disabled')
//         self.inputAmount.val('');
//         self.form.removeClass('d-none');
//         self.modalBody.removeClass('d-flex justify-content-center');
//         self.iFrameContainer.addClass('d-none');
//         location.reload();
//     }

//     checkPaymentOrderRequirements(self)
//     {
//         if(!self.inputAmount.val()) {
//             return false;
//         }
//         if (self.isCryptoWithdrawal)
//         {
//             return self.checkCryptoWithdrawalRequirements(self);
//         }
//         return true
//     }

//     checkCryptoWithdrawalRequirements(self)
//     {
//         if(!self.inputWalletAddress.val()) {
//             return false;
//         }
//         if(self.isDefaultWallet) {
//             return (self.walletTitle.val()) ? true : false;
//         }
//         return true;

//     }

//     requestPaymentOrder(self, channel)
//     {
//         if (!self.checkPaymentOrderRequirements(self)) {
//             return;
//         }

//         axios({
//             method: 'post',
//             url: self.routePrefix + '/cash-in',
//             data: {
//                 'channel'            : channel,
//                 'amount'             : self.inputAmount.val(),
//                 'set_default_wallet' : self.isDefaultWallet,
//                 'wallet_address'     : self.inputWalletAddress.val(),
//                 'wallet_title'       : self.walletTitle.val()
//             }
//         }).then((response) => {
//             if(channel === 'fiat-payment') {
//                 self.redirectToFiat(response['data']['url'], self)
//                 return;
//             } else if (channel === 'crypto-withdrawal') {
//                 self.showWithdrawalRequestResult(response['data']['status'], self)
//                 return;
//             }
//             self.showCryptoPayment(response['data'], self)
//         });
//     }

//     showWithdrawalRequestResult(status, self)
//     {
//         let title = 'Something went wrong!';
//         let icon = 'error';
//         if(status) {
//             title = 'Withdrawal Request Successfully sent!';
//             icon = 'success';
//         }

//         Swal.fire({
//             position: 'middle',
//             icon: icon,
//             title: title,
//             showConfirmButton: false,
//             timer: 3000
//           }).then((result) => {
//                 self.modalClose(self);
//           })
//     }

//     showCryptoPayment(paymentOrderResponse, self)
//     {
//         self.form.addClass('d-none');
//         self.iFrameContainer.removeClass('d-none');
//         self.modalBody.addClass('d-flex justify-content-center');
//         self.iFrame.attr('src', paymentOrderResponse['url']);

//     }

//     redirectToFiat(url, self)
//     {
//         window.open(url, '_blank');
//         self.modalClose(self);
//     }

// }
// export default cashIn;
