import {createClient} from 'next-sanity';
import  ImageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
    projectId: "njxlrewn",
    dataset: "production",
    apiVersion: '2022-03-07',
    token: "sknjBSNnslN9t3b9tFlWFjPuWnvYnCCyzOO2nqPuvrQcMmsLefAb7EP5eGCyySBsODqaTEzdYUxXaSc6s2XbyUlOiNWkV9Hh83pNEvU3zYZRp3jVZUB6LHaAF8h5HXD0ZNmMGoT6nipRDeJuPuwsfQZxFKiFqxOZqGhQoPpen8XZa2tQRg1B",
    useCdn: false,
    
});


const builder = ImageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)