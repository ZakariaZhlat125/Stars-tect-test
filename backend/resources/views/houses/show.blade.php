@extends('layouts.app', ['activePage' => 'EditCategory', 'titlePage' => __('Edit Category'), 'namePage' => 'Category Update', 'activePage' => 'UpdateCategory'])

@section('content')
    <div class="panel-header panel-header-sm"></div>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h2>{{ $house->title }}</h2>
                        </div>
                        <div class="pull-right">
                            <a class="btn btn-primary" href="{{ route('houses.index') }}"> Back</a>
                            <a type="button" href="{{ route('houses.edit', $house->id) }}" class="btn btn-success "
                                data-original-title="" title="">
                                Edit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                @foreach ($house->getAttributes() as $key => $value)
                    @if ($key != 'image1' && $key != 'image2' && $key != 'image3' && $key != 'image4' && $key != 'image5')
                        <div class="col-md-4">
                            <strong>{{ ucfirst($key) }}:</strong>
                            <p>{{ $value }}</p>
                        </div>
                    @endif
                @endforeach
            </div>
            <div class="row">
                @foreach ($house->getAttributes() as $key => $value)
                    @if ($key === 'image1' || $key === 'image2' || $key === 'image3' || $key === 'image4' || $key === 'image5')
                        <div class="col-md-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <strong>{{ ucfirst($key) }}:</strong>
                                    @if ($value)
                                        <img src="{{ asset($value) }}" alt="House Image"
                                            style="max-width: 100%; max-height: 200px; border-radius: 10px">
                                    @else
                                        <p>No image available</p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    @endif
                @endforeach
            </div>
        </div>
    </div>
@endsection
