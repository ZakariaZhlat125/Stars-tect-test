
@extends('layouts.app', [
    'namePage' => 'Products',
    'class' => 'sidebar-mini',
    'activePage' => 'Products',
])

@section('content')
    @push('js')
        @if (session('success'))
            <script>
                nowuiDashboard.showNotification('top', 'right', '{{ session('success') }}', 'success');
            </script>
        @endif

        @if (session('error'))
            <script>
                nowuiDashboard.showNotification('top', 'right', '{{ session('error') }}', 'danger');
            </script>
        @endif
    @endpush
    <div class="panel-header panel-header-sm"></div>
    <div class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="card mt-6">
                    <div class="card-header">
                        <h4 class="card-title">Create New House</h4>
                        <div class="pull-right">
                            <a class="btn btn-primary" href="{{ route('houses.index') }}">Back</a>
                        </div>
                    </div>
                    <br>
                    <br>

                    <div class="card-body">
                        {!! Form::open([
                            'method' => 'POST',
                            'route' => ['houses.store'],
                            'enctype' => 'multipart/form-data',
                        ]) !!}
                        <br>
                        <div class="row">
                            <div class="col-md-5">
                                <div class="form-group">
                                    <strong>Title:</strong>
                                    {!! Form::text('title', null, ['placeholder' => 'Title', 'class' => 'form-control']) !!}
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="form-group">
                                    <strong>Address:</strong>
                                    {!! Form::text('address', null, ['placeholder' => 'Address', 'class' => 'form-control']) !!}
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-group">
                                    <strong>User ID:</strong>
                                    {!! Form::number('user_id', null, ['placeholder' => 'User ID', 'class' => 'form-control']) !!}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <strong>Bedrooms:</strong>
                                    {!! Form::number('bedrooms', null, ['placeholder' => 'Bedrooms', 'class' => 'form-control']) !!}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <strong>Bathrooms:</strong>
                                    {!! Form::number('bathrooms', null, ['placeholder' => 'Bathrooms', 'class' => 'form-control']) !!}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <strong>Guests Capacity:</strong>
                                    {!! Form::number('guests_capacity', null, ['placeholder' => 'Guests Capacity', 'class' => 'form-control']) !!}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <strong>Is Available:</strong>
                                    {!! Form::select('is_available', ['1' => 'Yes', '0' => 'No'], null, [
                                        'placeholder' => 'Select Availability',
                                        'class' => 'form-control',
                                    ]) !!}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <strong>Price:</strong>
                                    {!! Form::number('price', null, ['placeholder' => 'Price', 'class' => 'form-control']) !!}
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="row">
                            @for ($i = 1; $i <= 5; $i++)
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <strong>Image {{ $i }}:</strong>
                                        <div class="custom-file">
                                            {!! Form::file("image{$i}", [
                                                'class' => 'custom-file-input',
                                                'id' => "customFile{$i}",
                                                'onchange' => "readURL(this, 'imagePreview{$i}', 'customFileLabel{$i}')",
                                            ]) !!}
                                            <label class="custom-file-label" id="customFileLabel{{ $i }}"
                                                for="customFile{{ $i }}">Choose file</label>
                                        </div>
                                        <img id="imagePreview{{ $i }}" src="#" alt="Image Preview"
                                            style="display: none; max-width: 100%; margin-top: 10px;">
                                    </div>
                                </div>
                            @endfor
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <strong>Description:</strong>
                                    {!! Form::textarea('description', null, ['placeholder' => 'Description', 'class' => 'form-control']) !!}
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            {!! Form::submit('Create Product', ['class' => 'btn btn-primary']) !!}
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
