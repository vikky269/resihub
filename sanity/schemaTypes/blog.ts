export default {
    name: 'blog',
    type: 'document',
    title: 'resihubBlog',
    fields: [
        {
        name: 'title',
        type: 'string',
        title: 'Title of blog Article'
        },
        {
        name: 'slug',
        type: 'slug',
        title: 'Slug of your blog Article',
        options: {
            source: 'title',
            maxLength: 96
        },
       },
        {
            name:'titleImage',
            type: 'image',
            title: 'Title Image'
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}
