<?php

use App\Http\Controllers\CompanyController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', [Controller::class, 'routes'])
    ->name('entry-point')
    ->withoutMiddleware('api');
Route::get('example', [Controller::class, 'example'])->name('example');
Route::get('error', [Controller::class, 'exampleError'])->name('error');

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('/email/verify/{id}', 'Auth\VerificationController@verify')->name('verification.verify');
});
Route::post('email/resend', 'Auth\VerificationController@resend');
Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');

//Route::group(['middleware' => 'auth:api'], function () {
    
//});
