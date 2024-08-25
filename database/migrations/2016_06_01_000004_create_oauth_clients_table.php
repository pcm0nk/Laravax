<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('oauth_clients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->nullable()->index();
            $table->string('name');
            $table->string('secret', 100)->nullable();
            $table->string('provider')->nullable();
            $table->text('redirect');
            $table->boolean('personal_access_client');
            $table->boolean('password_client');
            $table->boolean('revoked');
            $table->timestamps();
        });

        DB::table('oauth_clients')->insert([
            ['id'=>12,
            'name'=>"Laravax Personal Access Client",
            'secret'=>'EGzHzyW2Vx3bG9YT0cyBAiyMH6QcQdJbG5qpF6pU',
            'provider'=>'',
            'redirect'=>'http://localhost',
            'personal_access_client'=>1,
            'password_client'=>0,
            'revoked'=>0,
        ],
          ['id'=>13,
            'name'=>"Laravax Password Grant Client",
            'secret'=>'QRReRKeoq6oUrJTYqgYCaosuGYP4tLgBeiRONL5J',
            'provider'=>'users',
            'redirect'=>'http://localhost',
            'personal_access_client'=>0,
            'password_client'=>1,
            'revoked'=>0,
        ]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oauth_clients');
    }
};
