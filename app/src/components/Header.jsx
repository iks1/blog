import React,{useContext} from "react";
import Link from "next/link";

const categories=[{name:'React', slug:'react'}, {name:'Vue', slug:'vue'}, {name:'Angular', slug:'angular'}]


const Header = () =>{
    return(
       <div className="container mx-auto px-10 mb-8">
           <div className="border-b w-full inline-block border-blue-400 py-8">
               <div className="mid:float-left block">
                   <Link href='/'>
                       <span className="cursor-pointer font-bold text-4xl text-white">
                          Hello
                       </span>
                   </Link>
               </div>
               <div className="hidden md:float-left md:contents">
                  {categories.map((category)=>(
                     <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right at-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            {category.name}
                        </span>
                     </Link>
                  ))}
               </div>
           </div>
       </div>
    );
}

export default Header;