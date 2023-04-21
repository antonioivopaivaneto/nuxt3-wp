<script lang="ts" setup>
const {data: posts} = await useWpApi().getPosts<any>();

</script>
<template>
   <main>
   <PageHeader >
         <!--images-->
         <div class="w-[200px] relative h-[200px] mr-5 rounded overflow-hidden shadow-md">
                <img src="~/assets/img/minha.png" class="w-full h-full absolute object-cover " alt="perfil" />

            </div>
            <!--header text-->
            <div>
                <h1 class="text-4xl font-bold mb-2">Junior Paiva</h1>
                <p>Lorem ipsum dolor sit amet<br>
                  consectetur adipisicing elit.
                   In, aut numquam corporis eum
                   Accusantium ipsam mollitia officia.</p>
                   <a href="" class="btn bg-sky-500 py-2 px-4 rounded inline-block text-sky-50 hover:bg-sky-600 duration-200">Let's Connect</a>

                
            </div>
   </PageHeader>
   <!--Blog Grid Starts-->
   <section class="container py-16">
    <div class="grid sm:grid-cols-3 gap-5">
      <BlogCard
       v-for="post in posts"
       :key="post.id"
       :title="post.title.rendered"
       :excerpt="post.excerpt.rendered"
       :image="post._embedded['wp:featuredmedia'][0]?.source_url"
       :slug="post.slug"
       />
    </div>


   </section>
    <!--Blog Grid Ednds-->

   </main>
</template>