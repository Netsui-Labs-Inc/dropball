class AmendmentDetails {
    constructor() {

        this.amendedTransaction = $('.amended-transaction');
        this.uuid =  $('.amendment-uuid');
        this.amount =  $('.amended-amount');
        this.balance =  $('.amended-current-amount');
        this.created_by =  $('.amended-by');
        this.created_at =  $('.amended-date');
        this.note =  $('.amended-note');

        console.log(this.amendedTransaction);
    }

    init() {
        let self = this;
        this.amendedTransaction.on('click', function(event) {
            self.setAmendmentDetails(self, $(event.target));
        });
    }

    setAmendmentDetails(self, dataElement) {
        self.uuid.html(dataElement.data('id'));
        self.amount.html(dataElement.data('amount'));
        self.balance.html(dataElement.data('balance'));
        self.created_by.html(dataElement.data('created_by'));
        self.created_at.html(dataElement.data('created_at'));
        self.note.html(dataElement.data('note'));
    }
}
export default AmendmentDetails;
