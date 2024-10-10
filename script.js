const apiData = async(source)=>{
    const postdata = await axios (source)
    return postdata.data
}


const postSection = document.querySelector(".post-section")

const postInfo =async ()=>{
const apiDatas = await apiData("https://jsonplaceholder.typicode.com/posts");


apiDatas.map((post)=>{
    const postDiv = document.createElement("div")
    postDiv.classList.add("post-item")
    postDiv.innerHTML = ` <h2>${post.title}</h2>
                    <p>${post.text} </p>`
     postSection.appendChild(postDiv)
})
}
postInfo()