
<x-utils.modal
title="Amendment Details"
targetId="amendment-details"
>
<x-backend.card>
    <x-slot name="headerActions">

    </x-slot>

    <x-slot name="body">
        <table class="table table-hover">
            <tr>
                <th>@lang('UUID')</th>
                <td class='amendment-uuid'></td>
            </tr>
            <tr>
                <th>@lang('Type')</th>
                <td><span class='badge badge-info'>amendment</span></td>
            </tr>

            <tr>
                <th>@lang('Amended Amount')</th>
                <td class="amended-amount">

                </td>
            </tr>
            <tr>
                <th>@lang('Current balance')</th>
                <td class="amended-current-amount">
                </td>
            </tr>
            <tr>
                <th>@lang('Amended by')</th>
                <td class="amended-by">

                </td>
            </tr>
            <tr>
                <th>@lang('Date Amended')</th>
                <td class="amended-date"></td>
            </tr>

            <tr>
                <th>@lang('Note')</th>
                <td class="amended-note"></td>
            </tr>
        </table>

    </x-slot>
</x-backend.card>
</x-utils.modal>
