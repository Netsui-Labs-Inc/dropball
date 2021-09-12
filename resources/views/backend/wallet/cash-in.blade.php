<x-utils.modal
    title="Cash In"
    targetId="cashIn"
>
    <div>
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label">@lang('Amount')</label>
            <div class="col-md-8">
                <input type="number" class="form-control" name="quantity" min="1" step="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label">@lang('Channel')</label>
            <div class="col-md-8">
                <a href='' class='btn btn-lg btn-outline-primary'><i class='fa fa-eye'></i> @lang('Crypto')</a>
                <a href='' class='btn btn-lg btn-outline-success'><i class='fa fa-eye'></i> @lang('Fiat')</a>
                <a href='' class='btn btn-lg btn-outline-warning'><i class='fa fa-eye'></i> @lang('Bank')</a>
            </div>
        </div>
    </div>
</x-utils.modal>
