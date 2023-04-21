<script lang="ts" setup>
const {params} = useRoute();

const {data:posts} = await useWpApi().getPost<any>(params.slug as string);
const post = posts.value[0];
</script>
<template>
   <main>
    <section class="header container py-12 sm:py-24">
        <!-- post title -->
        <div class="post-title text-center mb-5">
            <h1 class="text-3xl sm:text-5xl font-bold ">
                {{ post.title.rendered }}
            </h1>
        </div>
        <!-- post meta -->
        <div class="post-meta text-center mb-10">
            <span class="mr-3">Written by {{ post._embedded['author'][0].name }} </span>
            <span>publisehd on by {{ post.date }}</span>
        </div>
        <!-- post image -->
        <div class="w-full h-[250px] sm:h-[550px] relative shadow-xl rounded overflow-hidden mb-10">
            <img  :src="post._embedded['wp:featuredmedia'][0]?.source_url"
                alt="Blog Thumb" 
                class="absolute w-full h-full object-cover" 
            />
        </div>
        <!-- post content -->
        <div class="post-content">
            <div v-html="post.content.rendered"></div>
        </div>

        
        
    </section>
   </main>
</template>

<style>
.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
    @apply mb-3 font-bold;

}
.post-content p{
    @appy mb-2
}
.post-content img{
    @appy my-4
}
.post-content h1{
    @appy text-3xl
}
.post-content h2{
    @appy text-2xl
}
.post-content h3{
    @appy text-xg
}
.post-content h4{
    @appy text-lg
}
.post-content h5{
    @appy text-base
}
.post-content h6{
    @appy text-sm
}



</style>