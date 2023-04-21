<script lang="ts" setup>
const route = useRoute();

//get acategory id
const {data:categories} = await useWpApi().get<any>(
    `categories?slug=${route.params.slug}`
);
//get post related to category id
const {data:posts} = await useWpApi().getPost<any>(categories.value[0].id);
const post = posts.value[0];
</script>
<template>
    
   <PageHeader :title="`Archive: ${categories[0].name}`" />

   <section class="container py-12">
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
</template>