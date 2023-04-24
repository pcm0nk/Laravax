
<template>
	<navigation-companybar />
	<header-companybar />
	<v-main class="fill-height ">
				<slot />
			</v-main>
        <footer-bar />
</template>
<style>

.text-body-1 ,
.text-body-2 ,
.text-caption ,
.text-footnote ,
.text-h1 ,
.text-h2 ,
.text-h3 ,
.text-h4 ,
.text-h5 ,
.text-h6 ,
.text-overline ,
.text-subtitle-1 ,.text-subtitle-2
{
  font-family: 'Vazirmatn', Tahoma, sans-serif!important;
}
</style>
