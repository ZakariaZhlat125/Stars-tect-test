<?php

namespace App\Http\Controllers;

use App\Http\Requests\HouseRequest;
use App\Models\House;
use App\Traits\System\ImageUploadTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HouseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    use ImageUploadTrait;
    protected $house;

    public function __construct(House $house)
    {

        $this->house = $house;
    }

    public function index()
    {

        $houses = $this->house->paginate(10);;
        return  view('houses.index', compact('houses'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('houses.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(HouseRequest $request)
    {
        try {
            $imagePaths = $this->uploadMultiImages($request, 5, 'storage/houses');
            $houseData = $request->validated();
            $houseData = array_merge($request->validated(), $imagePaths);
            $this->house->create($houseData);
            return redirectWithSuccess('houses.index', 'House declaration Created successfully');
        } catch (\Exception $e) {
            return redirectWithError('Error Create House: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $house = House::findOrFail($id);
        return view('houses.show', compact('house'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $house = $this->house->findOrFail($id);
        return  view('houses.edit', compact('house'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(HouseRequest $request, House $house)
    {
        try {
            $imagePaths = $this->uploadMultiImages($request, 5, 'storage/houses');

            // Validate request data
            $validatedData = $request->validated();
            $houseData = array_merge($validatedData, $imagePaths);

            // Update house record
            DB::beginTransaction();
            $house->update($houseData);
            DB::commit();

            return  redirectWithSuccess('houses.index', 'House updated successfully.');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirectWithError('Error updating house: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $house = $this->house->findOrFail($id);
            $house->delete();
            return  redirectWithSuccess('houses.index', 'House Deleted successfully.');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirectWithError('Error Deleting house: ' . $e->getMessage());
        }
    }
}
