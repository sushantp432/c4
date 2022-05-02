

let searchnews=async(value)=>{
    // console.log(this.id);
    // let p=this.id;
    // let value=document.getElementById("search_input").value;
    try{
        let res= await fetch(
            `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
        )
        let data =await res.json();
        console.log(data)
        return data;
    }catch(err){
        console.log(err)
    }

    
};

let append=(data,box)=>{
    console.log(data)
     data.articles.forEach(({ title,description,urlToImage})=>{
         let box1=document.createElement("div");
         let  h=document.createElement("h4");
         h.innerText=title;

         let  p=document.createElement("p");
         p.innerText=description;

         let  img=document.createElement("img");
         img.src=urlToImage;

         box1.setAttribute("id","box1")

         let box2=document.createElement("div");
         box2.append(img)
         let box3=document.createElement("div");

         box3.append(h,p);
         box1.append(box2,box3)
         box.append(box1)
        
     })
}

export {searchnews,append};