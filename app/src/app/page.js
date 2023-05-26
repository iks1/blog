import Head from 'next/head'

const posts =[
  {title:'Post 1',description:'Description 1'},
  {title:'Post 2',description:'Description 2'},
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
       <Head>
        <title>bLOG</title>
       </Head>
       <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
         <div className='lg:col-span-8 col-span-1'>
            {posts.map((post,index)=>(
               <div>
                  {post.title}
                  {post.description}
               </div>
            ))}
         </div>
          <div className='lg:col-span-4 col-span-1'>
             <div className='lg:sticky relative top-8'>

             </div>
          </div>
          
         
       </div>
    </div>
  )
}
