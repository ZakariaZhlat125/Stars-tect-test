<?php

namespace Database\Factories;

use App\Models\House;
use App\Traits\System\ImageUploadTrait;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\House>
 */
class HouseFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = House::class;

    public function definition()
    {
        $imageUrl = 'https://source.unsplash.com/random';
        $image1 = $this->uploadImage(Request::create('', 'GET'), $imageUrl, 'storage/houses');
        $image2 = $this->uploadImage(Request::create('', 'GET'), $imageUrl, 'storage/houses');
        $image3 = $this->uploadImage(Request::create('', 'GET'), $imageUrl, 'storage/houses');
        $image4 = $this->uploadImage(Request::create('', 'GET'), $imageUrl, 'storage/houses');
        $image5 = $this->uploadImage(Request::create('', 'GET'), $imageUrl, 'storage/houses');

        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'address' => $this->faker->address,
            'bedrooms' => $this->faker->numberBetween(1, 10),
            'bathrooms' => $this->faker->numberBetween(1, 5),
            'guests_capacity' => $this->faker->numberBetween(2, 20),
            'is_available' => $this->faker->boolean,
            'price' => $this->faker->randomFloat(2, 50, 500),
            'image1' => $image1,
            'image2' => $image2,
            'image3' => $image3,
            'image4' => $image4,
            'image5' => $image5,
        ];
    }

    protected function uploadImage(Request $request, $imageUrl, $destinationPath)
    {
        // Ensure the destination directory exists
        if (!file_exists(public_path($destinationPath))) {
            mkdir(public_path($destinationPath), 0777, true);
        }

        // Download the image from the URL
        $response = file_get_contents($imageUrl);

        // Generate a unique filename for the image
        $imageName = time() . '_' . uniqid() . '.jpg';

        // Save the image to the destination path
        file_put_contents(public_path($destinationPath . '/' . $imageName), $response);

        // Return the path to the uploaded image
        return $destinationPath . '/' . $imageName;
    }


}
