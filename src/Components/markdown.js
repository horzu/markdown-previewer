const marked = require("marked");

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

function Preview({ markdown }){
  return(
    <div
    
      dangerouslySetInnerHTML={{
        __html: marked(markdown, {renderer: renderer}),
      }}
      id="preview"
    >
      
    </div>
  )
}

export default Preview;