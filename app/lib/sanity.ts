import {createClient} from 'next-sanity';
import  ImageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
    projectId: "njxlrewn",
    dataset: "production",
    apiVersion: '2022-03-07',
    useCdn: false,
    
});


const builder = ImageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)