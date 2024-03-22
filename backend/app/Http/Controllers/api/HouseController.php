<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\House;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HouseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $house;


    public  function  __construct(House $house)
    {
        $this->house = $house;
    }


    public function index()
    {
        //
        $houses = $this->house->all();
        return successResponse('Successfully', $houses, JsonResponse::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $house =$this->house->findOrFail($id);
        return  successResponse('Successfully', $house, JsonResponse::HTTP_OK);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
